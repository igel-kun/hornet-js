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
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.2.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */

const chai = require("chai");
const expect = chai.expect;
import * as _ from "lodash";
import * as React from "react";

import { HornetReactTest } from "hornet-js-test/src/hornet-react-test";
import { runTest } from "hornet-js-test/src/test-run";
import { Decorators } from "hornet-js-test/src/decorators";
import { SortData, SortDirection } from "hornet-js-core/src/component/sort-data";
import * as assert from "assert";

import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
import { Table } from "hornet-js-react-components/src/widget/table/table";
import { Header } from "hornet-js-react-components/src/widget/table/header";
/* Composant Content */
import { Content } from "hornet-js-react-components/src/widget/table/content";
/*  Colonne du tableau */
import { Column } from "hornet-js-react-components/src/widget/table/column";
import { Columns } from "hornet-js-react-components/src/widget/table/columns";
import { CheckColumn } from "src/widget/table/column/check-column";
import * as messages from "hornet-js-core/src/i18n/hornet-messages-components.json";
import { Utils } from "hornet-js-utils";
Utils.setConfigObj({});

/** Tableau de liste de secteurs */
let dataSourceSortTitle: DataSource<any>;
let tableElement: JSX.Element;
let tableElement2: JSX.Element;
let table;
let data;

@Decorators.describe("Test Karma table SortTitle")
class tableTest extends HornetReactTest {

    @Decorators.beforeEach
    beforeEach() {
        Utils.setCls("hornet.internationalization", { messages });
        data = [];
        let step = 1;
        for (let i: number = 1; i < 10; i++) {
            data.push({ id: i, label: "libelle" + i, desc: (step % 3 === 0) ? "desc" + 0 : "desc" + step++ });
        }
        dataSourceSortTitle = new DataSource(data);

        tableElement = (
            <Table id="lite">
                <Header title={"Secteurs"}>
                </Header>
                <Content dataSource={dataSourceSortTitle}>
                    <Columns>
                        <CheckColumn keyColumn="id" />
                        <Column keyColumn="label" title={"libelle"} sortable={true} />
                        <Column keyColumn="desc" title={"desc"} sortable={true} />
                    </Columns>
                </Content>
            </Table>
        );


        tableElement2 = (
            <Table id="lite">
                <Header title={"Secteurs"}>
                </Header>
                <Content dataSource={dataSourceSortTitle}>
                    <Columns>
                        <CheckColumn keyColumn="id" />
                        <Column keyColumn="label" title={"libelle"} sortable={true} orderByLabelUp={"Custom Up"} orderByLabelDown={"Custom Down"} />
                        <Column keyColumn="desc" title={"desc"} sortable={true} />
                    </Columns>
                </Content>
            </Table>
        );
    }

    @Decorators.it("Test OK")
    testOk() {
        assert.equal(1, 1);
        this.end();
    }


    @Decorators.it("Manipuler des titres de tableaux d'entêtes classiques")
    renderTable() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement, id);
        dataSourceSortTitle.on("fetch", (value) => {
            expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).hasAttribute("title")).to.be.true;
            expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).getAttribute("title"))
                .to.be.equal("Trier par libelle dans l'ordre croissant");
            this.end();
        });
        dataSourceSortTitle.reload();
    }

    @Decorators.it("Manipuler des titres de tableaux d'entêtes customisées")
    renderTableCustom() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement2, id);
        dataSourceSortTitle.on("fetch", (value) => {
            expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).hasAttribute("title")).to.be.true;
            expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).getAttribute("title")).to.be.equal("Custom Up");

            this.triggerMouseEvent(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 .arrow-sort-container`), "click");
            setTimeout(() => {
                expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).hasAttribute("title")).to.be.true;
                expect(document.querySelector(`#${id} #lite-0 #lite-0-colHeader-0-1 div`).getAttribute("title")).to.be.equal("Custom Down");
                this.end();
            },         1000);
        });
        dataSourceSortTitle.reload();
    }

}

// lancement des Tests
runTest(new tableTest());