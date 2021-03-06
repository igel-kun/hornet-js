/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */

/**
 * hornet-js-database - Ensemble des composants de gestion de base hornet-js
 *
 * @author 
 * @version v5.4.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */

import { Configuration } from "src/configuration";
import * as fs from "fs";
import { DbConnect } from "src/sequelize/dbconnect-sequelize";
import forEach = require("lodash.foreach");
import Sequelize = require("sequelize");
import { Utils } from "hornet-js-utils";
import { Injector } from "hornet-js-core/src/inject/injector";
import { Promise } from "hornet-js-utils/src/promise-api";

export class Database {
    protected _config: Configuration;
    protected _sequelize: Sequelize.Sequelize;
    protected _namespace: any;

    /**
     * @param configName Nom de la configuration de la base de données
     */
    constructor() {
    }

    get config(): Configuration {
        return this._config;
    }

    set config(value: Configuration) {
        this._config = value;
    }

    get sequelize(): Sequelize.Sequelize {
        return this._sequelize;
    }

    set sequelize(value: Sequelize.Sequelize) {
        this._sequelize = value;
    }

    get namespace(): any {
        return this._namespace;
    }

    set namespace(value: any) {
        this._namespace = value;
    }

    static getSQLFromFile(fileName: string): string[] {
        // Extract SQL queries from files. Assumes no ';' in the fileNames
        return fs.readFileSync(fileName).toString()
            .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
            .replace(/\s+/g, " ") // excess white space
            .split(";") // split into all statements
            .map(Function.prototype.call, String.prototype.trim)
            .filter(function (el) {
                return el.length !== 0;
            }); // remove any empty ones
    }

    static sequence(tasks, fn): Promise<any> {
        return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve());
    }

    static runScripts(list: {}[]): Promise<Boolean> {
        let p: Promise<any>[] = [];
        forEach(list, (item) => {
            DbConnect.init(item[ "configName" ]);
            let cfg: Database = DbConnect.getGlobal(item[ "configName" ]);

            let files: string[] = item[ "files" ];
            p.push(Database.sequence(item[ "files" ].map((path) => {
                return Database.getSQLFromFile(path);
            }), Database.run.bind({ cfg: cfg })));
        });
        return Promise.all(p).then(() => {
            return true;
        });
    }

    static run(sql: string[]) {
        let cfg: Database = this[ "cfg" ];
        return new Promise((resolve, reject) => {
            let databaseConfName = Injector.getRegistered("databaseConfigName");
            if (Utils.config.getOrDefault("database." + databaseConfName + ".reload", false)) {
                let list = [];
                cfg._sequelize.transaction((t) => {
                    sql.forEach((query) => {
                        list.push(cfg._sequelize.query(query));
                    });
                    return Promise.all(list).then(() => {
                        resolve(true);
                    });
                });
            } else {
                resolve(true);
            }
        });
    }
}
