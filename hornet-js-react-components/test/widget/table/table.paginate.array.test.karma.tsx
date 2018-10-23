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
 * @version v5.2.2
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */

"use strict";
const chai = require("chai");
const expect = chai.expect;
import * as _ from "lodash";
import * as React from "react";

import { BaseTest } from "hornet-js-test/src/base-test";
import { runTest } from "hornet-js-test/src/test-run";
import { Decorators } from "hornet-js-test/src/decorators";
import { SortData, SortDirection } from "hornet-js-core/src/component/sort-data";
import * as assert from "assert";

import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
import { PaginateDataSource } from "hornet-js-core/src/component/datasource/paginate-datasource";
import { Table } from "hornet-js-react-components/src/widget/table/table";
import { Header } from "hornet-js-react-components/src/widget/table/header";
/* Composant Content */
import { Content } from "hornet-js-react-components/src/widget/table/content";
/*  Colonne du tableau */
import { Column } from "hornet-js-react-components/src/widget/table/column";
import { Columns } from "hornet-js-react-components/src/widget/table/columns";
import { CheckColumn } from "src/widget/table/column/check-column";

import { Footer } from "hornet-js-react-components/src/widget/table/footer";
import { Picto } from "hornet-js-react-components/src/img/picto";
import { Pager, PaginationProps } from "hornet-js-react-components/src/widget/pager/pager";
import { ActionColumn } from "src/widget/table/column/action-column";
import { MoreInfoColumn } from "src/widget/table/column/more-info-column";
import { LineAfter } from "src/widget/table/line/line-after";

/** Tableau de liste de secteurs */
let dataSource: PaginateDataSource<any>;
let tableElement: JSX.Element;
let tableElementWithActionColumns: JSX.Element;
let tableElementWithActionColumnsSupprimer: JSX.Element;
let table;
let data;

@Decorators.describe("Test Karma table paginate")
class tableTest extends BaseTest {

    @Decorators.beforeEach
    beforeEach() {
        data = [];
        let step = 1;
        for (let i: number = 1; i < 50; i++) {
            data.push({ id: i, label: "libelle" + i, desc: (step % 3 === 0) ? "desc" + 0 : "desc" + step++ });
        }

        dataSource = new PaginateDataSource<any>(data, {
            pageIndex: 0,
            itemsPerPage: 10,
            totalItems: 0,
        }, {});

        tableElement = (
            <Table id="lite">
                <Header title={"Secteurs"}>
                </Header>
                <Content dataSource={dataSource}>
                    <Columns>
                        <CheckColumn keyColumn="id" />
                        <Column keyColumn="label" title={"libelle"} sortable={true} />
                        <Column keyColumn="desc" title={"desc"} sortable={true} />
                    </Columns>
                </Content>
                <Footer>
                    <Pager dataSource={dataSource} id="maTable-paginate" />
                </Footer>
            </Table>
        );

        tableElementWithActionColumns = (
            <Table id="table-with-action-column">
                <Header title={"Secteurs"}>
                </Header>
                <Content dataSource={dataSource}>
                    <Columns>
                        <CheckColumn keyColumn="id" />
                        <Column keyColumn="label" title={"libelle"} sortable={true} />
                        <Column keyColumn="desc" title={"desc"} sortable={true} />
                        <ActionColumn keyColumn="editer"
                            srcImg={Picto.blue.editer}
                            alt={"Editer {label}"}
                            action={() => { }} />
                        <MoreInfoColumn keyColumn="idMore" visible={(value) => true}
                            alt={"Plus d'info sur {label} {desc}"}
                            headers={["label", "desc"]}>
                        </MoreInfoColumn>
                    </Columns>
                </Content>
                <Footer>
                    <Pager dataSource={dataSource} id="maTable-paginate-with-action-column" />
                </Footer>
            </Table>
        );

        tableElementWithActionColumnsSupprimer = (
            <Table id="table-with-action-column-supprimer">
                <Header title={"test"}>
                </Header>
                <Content dataSource={dataSource}>
                    <Columns>
                        <CheckColumn keyColumn="id" />
                        <Column keyColumn="label" title={"libelle"} sortable={true} />
                        <Column keyColumn="desc" title={"desc"} sortable={true} />
                        <ActionColumn keyColumn="supprimer"
                            srcImg={Picto.white.supprimer}
                            titleAlert={"Suppression de ${label} alert title"}
                            messageAlert={"Voulez-vous vraiment supprimer ${label}"}
                            alt={"Supprimer {label}"}
                            action={() => { }} />
                    </Columns>
                </Content>
                <Footer>
                    <Pager dataSource={dataSource} id="maTable-paginate-with-action-column-supprimer" />
                </Footer>
            </Table>
        );
    }

    @Decorators.it("Test OK")
    testOk() {
        assert.equal(1, 1);
        this.end();
    }

    @Decorators.it("afficher 10 éléments par page à l'init")
    selectionUnElement() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement, id);
        expect(document.querySelectorAll(`#${id} .datatable-data tr`).length).to.equal(10);
        this.end();
    }

    @Decorators.it("afficher la dernière page")
    goToLastPage() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement, id);
        dataSource.on("pagination", (value) => {
            expect(value.list.length).to.equal(9);
            expect(value.list[0].id).to.equal(41);
            expect(document.querySelector(`#${id} .datatable-data #lite-0-colBody-0-1`).innerHTML, value.list[0].label);
            this.end();
        });
        this.triggerMouseEvent(document.querySelector(`#${id} .datatable-pagination-button-lastpage`), "click");
    }

    @Decorators.it("supprimer la selection")
    deleteSelectedItem() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement, id);
        dataSource.on("delete", () => {
            expect(dataSource.selected === undefined).to.true;
            expect(document.querySelectorAll(`#${id} .datatable-data tr`).length).to.equal(10);
            this.end();
        });
        dataSource.on("select", (value) => {
            if (value.length > 0) dataSource.deleteAll();

        });
        this.triggerMouseEvent(document.querySelector(`#${id} .datatable-data #lite-0-colBody-0-0 input`), "click");
    }

    @Decorators.it("test d'un appel de pagination programmatiquement")
    goToPageCall() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElement, id);
        dataSource.on("pagination", (value) => {
            expect(document.querySelector(`#${id} .datatable-pagination-input`)["value"]).to.equal("2");
            this.end();
        });
        dataSource.goToPage(2);
    }

    @Decorators.it("test du rendu de l'action column après pagination sur la page 2")
    testRenderActionColumnAfterPaginationToPage2() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElementWithActionColumns, id);
        dataSource.on("pagination", (value) => {
            expect(document.querySelector(`#${id} #table-with-action-column-0-colBody-0-3 a`)["title"]).to.equal("Editer libelle11");
            expect(document.querySelector(`#${id} #table-with-action-column-0-colBody-0-4 a`)["title"]).
                to.equal("Plus d'info sur libelle11 desc0");
            this.end();
        });
        dataSource.goToPage(2);
    }


    @Decorators.it("test du rendu de l'action column après pagination sur la page 3")
    testRenderActionColumnAfterPaginationToPage3() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElementWithActionColumns, id);
        dataSource.on("pagination", (value) => {
            expect(document.querySelector(`#${id} #table-with-action-column-0-colBody-0-3 a`)["title"]).to.equal("Editer libelle21")
            expect(document.querySelector(`#${id} #table-with-action-column-0-colBody-0-4 a`)["title"])
                .to.equal("Plus d'info sur libelle21 desc0");
            this.end();
        });
        dataSource.goToPage(3);
    }

    @Decorators.it("test du rendu de la modale suite au clic sur le bouton de l'action column supprimer après pagination sur la page 2")
    testRenderActionColumnAlertAfterPaginationToPage2() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElementWithActionColumnsSupprimer, id);
        dataSource.on("pagination", (value) => {
            expect(document.querySelector(`#${id} #table-with-action-column-supprimer-0-colBody-0-3 a`)["title"])
                .to.equal("Supprimer libelle11");
            this.triggerMouseEvent(document.querySelector(`#${id} #table-with-action-column-supprimer-0-colBody-0-3 a`), "click");
            setTimeout(() => {
                expect(document.querySelector(`.dialog-content-alert`), "alerte n'existe pas").to.exist;
                expect(document.querySelector(`#dialogue-title h1`), "h1 n'existe pas").to.exist;
                expect(document.querySelector(`#dialogue-title h1`).innerHTML).to.equal("Suppression de libelle11 alert title");
                expect(document.querySelector(`#widget-alert-body`)).to.exist;
                expect(document.querySelector(`#widget-alert-body`).innerHTML).to.equal("Voulez-vous vraiment supprimer libelle11");
                this.triggerMouseEvent(document.querySelector("#confirmCancel"), "click");
                this.end();
            }, 200);
        });
        dataSource.goToPage(2);
    }

    @Decorators.it("test du rendu de la modale suite au clic sur le bouton de l'action column supprimer après pagination sur la page 3")
    testRenderActionColumnAlertAfterPaginationToPage3() {
        const id = this.generateMainId();
        table = this.renderIntoDocument(tableElementWithActionColumnsSupprimer, id);
        dataSource.on("pagination", (value) => {
            expect(document.querySelector(`#${id} #table-with-action-column-supprimer-0-colBody-0-3 a`)["title"])
                .to.equal("Supprimer libelle21");
            this.triggerMouseEvent(document.querySelector(`#${id} #table-with-action-column-supprimer-0-colBody-0-3 a`), "click");
            setTimeout(() => {
                expect(document.querySelector(`.dialog-content-alert`), "alerte n'existe pas").to.exist;
                expect(document.querySelector(`#dialogue-title h1`), "h1 n'existe pas").to.exist;
                expect(document.querySelector(`#dialogue-title h1`).innerHTML).to.equal("Suppression de libelle21 alert title");
                expect(document.querySelector(`#widget-alert-body`)).to.exist;
                expect(document.querySelector(`#widget-alert-body`).innerHTML).to.equal("Voulez-vous vraiment supprimer libelle21");
                this.triggerMouseEvent(document.querySelector("#confirmCancel"), "click");
                this.end();
            }, 200);
        });
        dataSource.goToPage(3);
    }
}

// lancement des Tests
runTest(new tableTest());
