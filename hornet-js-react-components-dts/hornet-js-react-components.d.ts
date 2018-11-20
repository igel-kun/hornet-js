declare module "hornet-js-react-components/src/img/picto" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	export interface PictoProps extends HornetComponentProps {
	    picto: string;
	    width?: number;
	    height?: number;
	    className?: string;
	    color?: string;
	}
	/**
	 * Class permettant la gestion des images en SVG
	 */
	export class Picto<P extends PictoProps, S> extends HornetComponent<P, any> {
	    static defaultProps: {
	        width: number;
	        height: number;
	        color: string;
	    };
	    static black: {
	        editer: string;
	        consulter: string;
	        supprimer: string;
	        addCircle: string;
	        settings: string;
	        close: string;
	        add: string;
	        user: string;
	        userCircle: string;
	        commentDesabled: string;
	        commentEnabled: string;
	        openBook: string;
	        cube: string;
	        file: string;
	        folder: string;
	        idCard: string;
	        prohibitionCircle: string;
	        gavel: string;
	        undo: string;
	        restore: string;
	        bell: string;
	        send: string;
	        fileTxt: string;
	        fileOutline: string;
	    };
	    static blue: {
	        editer: string;
	        consulter: string;
	        supprimer: string;
	        quickEdit: string;
	        addCircle: string;
	        settings: string;
	        close: string;
	        add: string;
	        user: string;
	        userCircle: string;
	        previous: string;
	        next: string;
	        commentDesabled: string;
	        commentEnabled: string;
	        openBook: string;
	        cube: string;
	        file: string;
	        folder: string;
	        idCard: string;
	        prohibitionCircle: string;
	        gavel: string;
	        undo: string;
	        restore: string;
	        bell: string;
	        send: string;
	        fileTxt: string;
	        fileOutline: string;
	    };
	    static darkBlue: {
	        editer: string;
	        consulter: string;
	        supprimer: string;
	        quickEdit: string;
	        addCircle: string;
	        settings: string;
	        close: string;
	        add: string;
	        user: string;
	        userCircle: string;
	        previous: string;
	        next: string;
	    };
	    static white: {
	        editer: string;
	        consulter: string;
	        supprimer: string;
	        ajouter: string;
	        info: string;
	        settings: string;
	        close: string;
	        add: string;
	        user: string;
	        userCircle: string;
	        commentDesabled: string;
	        commentEnabled: string;
	        openBook: string;
	        cube: string;
	        file: string;
	        folder: string;
	        idCard: string;
	        prohibitionCircle: string;
	        gavel: string;
	        undo: string;
	        restore: string;
	        bell: string;
	        send: string;
	        fileTxt: string;
	        fileOutline: string;
	    };
	    static grey: {
	        close: string;
	        add: string;
	        user: string;
	        userCircle: string;
	    };
	    static editable: {
	        editer: string;
	        valider: string;
	        annuler: string;
	    };
	    static export: {
	        csv: string;
	        ods: string;
	        odt: string;
	        pdf: string;
	        xls: string;
	    };
	    render(): JSX.Element;
	    /**
	     * Rendu graphique de svg
	     * @returns {any}
	     */
	    renderSvg(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/middleware/component-middleware" {
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
	import { Logger } from "hornet-js-utils/src/logger";
	import { AbstractHornetSubMiddleware } from "hornet-js-core/src/middleware/middlewares";
	import { ServerConfiguration } from "hornet-js-core/src/server-conf";
	export class PageRenderingMiddleware extends AbstractHornetSubMiddleware {
	    protected static logger: Logger;
	    constructor(config?: ServerConfiguration);
	}
	export class UnmanagedViewErrorMiddleware extends AbstractHornetSubMiddleware {
	    protected static logger: Logger;
	    constructor(config?: ServerConfiguration);
	}
	
}

declare module "hornet-js-react-components/src/react/react-client" {
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
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import { ComponentChangeEventDetail } from "hornet-js-core/src/routes/router-client-async-elements";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { IHornetPage } from "hornet-js-components/src/component/ihornet-page";
	import { HornetPage }  from "hornet-js-react-components/src/widget/component/hornet-page";
	import { IClientInitializer } from "hornet-js-components/src/component/iclient-initializer";
	/**
	 * Gère les étapes d'initialisation du client spécifiques à React
	 */
	export class ReactClientInitializer implements IClientInitializer<HornetEvent<ComponentChangeEventDetail>> {
	    /** Composant page correspondant à l'application */
	    protected appComponent: Class<HornetPage<any, any, any>>;
	    /** Fonction à appeler une fois le client initialisé */
	    protected readyCallback: () => void;
	    /**
	     * Constructeur
	     * @param appComponent Composant page correspondant à l'application
	     * @param readyCallback Fonction à appeler une fois react initialisé
	     */
	    constructor(appComponent: Class<HornetPage<any, any, any>>, readyCallback: () => void);
	    initErrorComponent(errorPage: {
	        new (...args: any[]): IHornetPage<any, any>;
	    }): void;
	    initClientRendering(event: HornetEvent<ComponentChangeEventDetail>): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/accordion/accordion-header" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés du composant Header de accordion
	 */
	export interface AccordionHeaderProps extends HornetComponentProps {
	}
	/**
	 * Header de accordion
	 */
	export class AccordionHeader extends HornetComponent<AccordionHeaderProps, any> {
	    constructor(props?: AccordionHeaderProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/accordion/accordion-info" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés du composant info de accordion
	 */
	export interface AccordionInfoProps extends HornetComponentProps {
	}
	/**
	 * info de accordion
	 */
	export class AccordionInfo extends HornetComponent<AccordionInfoProps, any> {
	    constructor(props?: AccordionInfoProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/accordion/accordion" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent } from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import KeyboardEvent = __React.KeyboardEvent;
	export const TAB_ID_NAME = "tab";
	export const FOCUS_ON_ACCORDION: HornetEvent<string>;
	/**
	 * Propriétés de l'accordion
	 */
	export interface AccordionProps extends HornetComponentProps {
	    id?: string;
	    key?: string;
	    title?: string;
	    isOpen?: boolean;
	    panelIndex?: number;
	    handleClickAccordion?: Function;
	    handleFocusAccordion?: Function;
	    tabIndex?: string;
	    infoAccordion?: string;
	}
	/**
	 * Composant Accordion
	 */
	export class Accordion extends HornetComponent<AccordionProps, any> {
	    protected errors: number;
	    constructor(props?: AccordionProps, context?: any);
	    componentDidMount(): void;
	    focusInputAccordion(ev: HornetEvent<string>): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    protected getAccordionPanelId(): string;
	    protected getAccordionLiId(): string;
	    protected trackInputFieldFromChildren(node: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Gestion aux clavier
	     * @param e
	     */
	    handleKeyDownButton(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * gestion du clavier lors de la touche CTRL ou SHIFT
	     * @param e
	     * @param preventDefault
	     */
	    handleKeyDownPanel(e: any, preventDefault: any): void;
	    /**
	     * Place le focus sur l'accordeon dont l'index est passer en parametre
	     * si l'index n'existe pas, le focus est placer sur l'accordeon 0
	     * @param index
	     */
	    Panelfocus(index: any): void;
	    static handleFocusOnAccordion(element: HTMLElement): void;
	    /**
	     * teste si l'accordion a des erreurs
	     * @param ev
	     */
	    protected accordionHasError(ev: HornetEvent<any>): void;
	    /**
	     * teste si l'erreur se trouve dans l'enfant présent dans l'accordion
	     * @param elem enfant de l'accordion
	     * @param error erreur recherchée
	     * @returns {number}
	     */
	    protected isErrorInAccordion(elem: any, error: any): number;
	    /**
	     * Recherche un lien de parenté entre le composant déclenchant la notification
	     * et l'accordion
	     * @param {string} idComponent
	     * @returns {boolean}
	     */
	    protected isLinkedWithFormManager(idComponent: string): boolean;
	    protected isHtmlElementFoundThroughChildren(element: Element, targetedId: string): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/accordion/accordions" {
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
	import * as React from "react";
	import { Accordion }  from "hornet-js-react-components/src/widget/accordion/accordion";
	import { GroupComponent, GroupComponentProps }  from "hornet-js-react-components/src/widget/group/abstract-group-component";
	export interface AccordionsProps extends GroupComponentProps {
	    multiSelectable?: boolean;
	    beforeHideAccordion?: (accordionRef?: Accordion, index?: number) => void;
	    afterShowAccordion?: (accordionRef?: Accordion, index?: number) => void;
	}
	export class Accordions<P extends AccordionsProps> extends GroupComponent<AccordionsProps, any> {
	    static defaultProps: {
	        id: string;
	        multiSelectable: boolean;
	    };
	    protected oltTabIxFocused: number;
	    /** liste des instances Accordion*/
	    protected accordionList: Array<Accordion>;
	    constructor(props?: P, context?: any);
	    componentWillReceiveProps(nextProps: any, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Initialisation des accordions
	     */
	    initializeAccordions(): any[];
	    /**
	     * controle de l'action sur le clique
	     * @param index
	     * @param strDomId
	     * @param callback function
	     */
	    handleClickAccordion(index: number, strDomId: string, callback: any): void;
	    protected handleBeforeHideAccordion(index: number): void;
	    scrollToFocus: (strDomId: any) => void;
	    /**
	     * Action sur le focus de l'accordion
	     * @param index
	     * @param event
	     * @param targetEvent
	     */
	    handleFocusAccordion: (index: number, event: any, targetEvent: any) => void;
	    /**
	     * Rendu de l'acorodion
	     */
	    protected renderAccordion(): React.DetailedReactHTMLElement<{
	        id: string;
	        key: string;
	        panelIndex: number;
	        isOpen: any;
	        tabIndex: any;
	        handleClickAccordion: (index: number, strDomId: string, callback: any) => void;
	        handleFocusAccordion: (index: number, event: any, targetEvent: any) => void;
	        totalAccordion: any;
	        ref: (accordion: any) => void;
	    }, HTMLElement>[];
	}
	
}

declare module "hornet-js-react-components/src/widget/button/button-info-accessibilite" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés du bouton et de sa modale d'information
	 */
	export interface ButtonInfoAccessibiliteProps extends HornetComponentProps {
	    /** Messages internationalisés de tableau */
	    message?: any;
	    /** Descriptions de raccourcis clavier */
	    shortcutDescriptions?: ShortcutDescription[];
	    /** Source de l'image associé */
	    srcImg?: string;
	}
	/**
	 * Eléments de description de raccourci clavier
	 */
	export interface ShortcutDescription {
	    /** Représentation(s) de la ou des touches du clavier */
	    shortcuts: string[];
	    /** Description de l'action correspondante */
	    description: string;
	    /** Lorsque shortcuts contient plusieurs éléments, indique si l'un OU l'autre de ces éléments peut-être utilisé */
	    or?: boolean;
	    /** Lorsque shortcuts contient plusieurs éléments, indique si tous les éléments sont nécessaires */
	    and?: boolean;
	}
	/**
	 * Bouton et modale d'information sur l'accessibilité clavier du composant Table
	 */
	export class ButtonInfoAccessibilite<P extends ButtonInfoAccessibiliteProps> extends HornetComponent<ButtonInfoAccessibiliteProps, any> {
	    protected shortcutsI18n: any;
	    protected htmlIcon: any;
	    static defaultProps: {
	        message: string;
	        shortcutDescriptions: any[];
	    };
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    protected renderModal(): JSX.Element;
	    protected renderShortCut(item: any, index: any): JSX.Element;
	    protected handleShowInfoModal(): void;
	    protected handleClickClose(t: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/button/button" {
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
	import * as React from "react";
	import { HornetComponentProps, HornetComponentState } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés Button
	 */
	export interface ButtonProps extends HornetComponentProps {
	    type?: string;
	    id?: string;
	    name?: string;
	    value?: string;
	    onClick?: React.MouseEventHandler<HTMLElement>;
	    className?: string;
	    label?: string;
	    title?: string;
	    disabled?: boolean;
	    url?: string;
	    /** Indicateur d'ouverture d'un popup suite à clic sur bouton */
	    hasPopUp?: boolean;
	}
	export interface ButtonState extends ButtonProps, HornetComponentState {
	    type?: string;
	    effect?: boolean;
	    css?: any;
	    unmount?: boolean;
	}
	/**
	 * Composant Button
	 */
	export class Button<P extends ButtonProps, S extends ButtonState> extends HornetComponent<ButtonProps, ButtonState> {
	    static defaultProps: {
	        disabled: boolean;
	    };
	    readonly props: Readonly<ButtonProps>;
	    readonly state: ButtonState;
	    constructor(props: any, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Rendu type Button
	     * @returns {any}
	     * @protected
	     */
	    protected renderButton(): JSX.Element;
	    /**
	     * Rendu Type Link
	     * @returns {any}
	     * @protected
	     */
	    protected renderLink(): JSX.Element;
	    /**
	     * Evènement déclenché lors du clic sur le bouton
	     * @param e
	     * @protected
	     */
	    protected handleClick(e: any): void;
	    /**
	     * Effet activé lors d'un lcick sur un bouton
	     * @param e
	     */
	    rippleEffect(e: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/button/top-button" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés de la classe TopButton
	 */
	export interface TopButtonProps extends HornetComponentProps {
	    className?: string;
	    header?: string;
	    footer?: string;
	    id?: string;
	    name?: string;
	    title?: string;
	}
	/**
	 * Bouton de retour vers le haut de la page
	 */
	export class TopButton extends HornetComponent<TopButtonProps, any> {
	    static defaultProps: {
	        offset: number;
	        header: string;
	        footer: string;
	        notificationSession: string;
	    };
	    constructor(props: any, context?: any);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     * @override
	     */
	    render(): JSX.Element;
	    /**
	     * Calcule si un élément est présent ou non a l'écran
	     * @param {Element} elm - l'élément a rechercher
	     * @return {boolean} true si l'élément est présent
	     */
	    protected checkvisible(elm: any): boolean;
	    /**
	     * Métohde de gestion du scroll à l'écran
	     * @param event - evenement scroll
	     */
	    protected handleScroll(event: any): void;
	    /**
	     * Méthode de retour en haut de la page
	     */
	    protected scrolltop(): void;
	    /**
	     * Gestion du clic sur entrer ou espace
	     * @param event
	     */
	    protected handleKeyDown(event: any): void;
	    /**
	     * Génére le contenu du bouton
	     * @returns {any}
	     */
	    protected renderDefaultTopButtonContent(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/component/error-page" {
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
	import { HornetPage } from "hornet-js-react-components/src/widget/component/hornet-page";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	export class ErrorPage extends HornetPage<any, HornetComponentProps, any> {
	    constructor(props?: HornetComponentProps, context?: any);
	    prepareClient(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/component/hornet-component" {
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
	import * as React from "react";
	import { UserInformations } from "hornet-js-utils/src/authentication-utils";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import { HornetComponentErrorHandler } from "hornet-js-core/src/component/hornet-component-errors";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { HornetComponentProps, IHornetComponent, HornetComponentState } from "hornet-js-components/src/component/ihornet-component";
	import { HornetPage }  from "hornet-js-react-components/src/widget/component/hornet-page";
	import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
	export interface HornetComponentDatasourceProps {
	    name?: string;
	    /**
	     * Défini un datasource.
	     */
	    dataSource?: DataSource<any>;
	    /**
	     * Permet de cacher le spinner du composant.
	     */
	    hideSpinner?: boolean;
	    /**
	     * Permet de surchager le message
	     */
	    loadingMessage?: any;
	}
	export enum Alignment {
	    CENTER = 0,
	    LEFT = 1,
	    RIGHT = 2
	}
	/**
	 * Classe parente des composants graphiques Hornet basés sur React.
	 */
	export class HornetComponent<P extends HornetComponentProps, S extends HornetComponentState> extends React.Component<P, S> implements IHornetComponent<P, S> {
	    /** Indique si les erreurs sont encapsulées de façon à rediriger vers la page d'erreur*/
	    static ERROR_MANAGED: boolean;
	    /** Page d'erreur à afficher en cas d'erreur technique */
	    static ERROR_COMPONENT: Class<HornetPage<any, any, any>>;
	    constructor(props?: P, context?: any);
	    protected rendering: boolean;
	    protected hasError: boolean;
	    protected mounted: boolean;
	    protected user: UserInformations;
	    componentWillMount(): void;
	    componentDidMount(): void;
	    componentWillUpdate(nextProps: P, nextState: S, nextContext: any): void;
	    componentDidUpdate(prevProps: P, prevState: S, prevContext: any): void;
	    componentWillUnmount(): void;
	    /**
	     * Met à jour l'état interne avec les nouvelles propriétés
	     * @param nextProps nouvelles propriétés
	     * @param nextContext nouveau contexte
	     */
	    componentWillReceiveProps(nextProps: P, nextContext: any): void;
	    /**
	     * A surcharger éventuellement.
	     * @return {boolean} true lorsque toutes les fonctions du composant doivent être encapsulées en s'appuyant
	     * sur le gestionnaire d'erreurs (getErrorHandler()) et le composant d'affichage erreur (getErrorComponent()).
	     */
	    isErrorManaged(): boolean;
	    /**
	     * A surcharger éventuellement.
	     * @return {Class<HornetPage<any, any>>} la page à afficher en cas d'erreur
	     */
	    getErrorComponent(): Class<HornetPage<any, any, any>>;
	    /**
	     * A surcharger éventuellement.
	     * @return {HornetComponentErrorHandler} la fonction implémentant le comportement à adopter en cas d'erreur
	     */
	    getErrorHandler(): HornetComponentErrorHandler;
	    protected copyInitialPropsToState(props: P, state: any): void;
	    protected autobinding(): void;
	    /**
	     * Si la gestion des erreurs est activée, encapsule toutes les fonctions de ce composant avec une gestion d'erreur
	     * commune.
	     */
	    protected errorManagement(): void;
	    /**
	     * Permet d'écouter un évènement
	     * @param event
	     * @param callback
	     * @param capture
	     */
	    listen<T extends HornetEvent<any>>(event: T, callback: (ev: T) => void, capture?: boolean): void;
	    /**
	     * Permet de n'écouter qu'une seule foix un évènement
	     * @param event
	     * @param callback
	     * @param capture
	     */
	    listenOnce<T extends HornetEvent<any>>(event: T, callback: (ev: T) => void, capture?: boolean): void;
	    /**
	     * Permet d'émettre un évènement
	     * @param event
	     * @param eventOptions
	     */
	    fire<T extends HornetEvent<any>>(event: T, eventOptions?: any): void;
	    /**
	     * Permet de supprimer un évènement
	     * @param event
	     * @param callback
	     * @param capture
	     */
	    remove<T extends HornetEvent<any>>(event: T, callback: (ev: T) => void, capture?: boolean): void;
	    /**
	     * Méthode permettant d'enrober un composant
	     * @param method
	     */
	    protected wrapMethod(method: any): void;
	    /**
	     * Retourne les éléments enfants d'un composant du type passé en paramètre
	     * @param ComponentType
	     * @returns {Array}
	     */
	    protected getChildrenOf(ComponentType: any): any[];
	    /**
	     * Retourne les éléments enfants d'un composant du type passé en paramètre
	     * @param ComponentType
	     * @returns {Array}
	     */
	    static getChildrenFrom(parent: any, componentType: any): any[];
	    /**
	     * Retourne les éléments enfants d'un composant du type passé en paramètre
	     * @param ComponentType
	     * @returns {Array}
	     */
	    protected getComponentBy(ComponentType: any): any[];
	    /**
	     * Retourne les éléments enfants d'un composant du type passé en paramètre
	     * @param ComponentType
	     * @returns {Array}
	     */
	    static getComponentFromParentBy(parent: any, ComponentType: any): any[];
	    /**
	     * Retourne les éléments enfants d'un composant du type passé en paramètre
	     * @param ComponentType
	     * @returns {Array}
	     */
	    protected getComponentsBy(ComponentType: any): any[];
	    /***
	     * Méthode déterminant si un des enfant dont le parent est de type Component est de type ComponentType
	     * @param Component: composant dont les enfants sont à rechercher
	     * @param ComponentType: type de composant à rechercher
	     * @returns {boolean}
	     */
	    protected hasChildrenOfComponentTypeOf(Component: any, ComponentType: any): boolean;
	    /**
	     * Wrap un composant avec de nouvelles props pour eviter le cloneElement
	     * @param {HornetComponent} ComponentToWrap composant à wrapper
	     * @param {Object} otherProps nouvelle props à ajouter
	     */
	    wrap<P, S>(ComponentToWrap: any, otherProps: P, thisProps?: Readonly<{
	        children?: React.ReactNode;
	    }> & Readonly<P>): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
	    /**
	     * Wrap un composant avec de nouvelles props pour eviter le cloneElement
	     * @param {HornetComponent} ComponentToWrap composant à wrapper
	     * @param {HornetComponent} componentProps props du composant à wrapper
	     * @param {Object} otherProps nouvelle props à ajouter
	     */
	    static wrap<P, S>(ComponentToWrap: any, hornetComponentContext: HornetComponent<HornetComponentProps, HornetComponentState>, componentProps: P, otherProps: P): any;
	    /**
	     * Méthode permettant de merger proprement des objects
	     * @param obj1
	     * @param obj2
	     * @returns {any}
	     */
	    static mergeObjects(obj1: any, obj2: any): any;
	    /**
	     * @param path éventuel chemin relatif à l'url de base du thème
	     * @return l'url du thème CSS courant
	     */
	    static genUrlTheme(path?: string): string;
	    /**
	     * @param path éventuel chemin relatif à l'url de base du thème embarqué
	     * @return l'url du thème CSS embarqué
	     */
	    static genUrlThemeEmbedded(path?: string): string;
	    /**
	     * @param l'url de base du thème externe
	     * @return l'url du thème CSS embarqué
	     */
	    static genUrlThemeExternal(path?: string): string;
	    /**
	     * Méthode permettant de générer une Url
	     * @param path
	     * @returns {string}
	     */
	    genUrl(path: string): string;
	    /**
	     * Permet de générer une Url de l'application depuis une url paramétrée
	     * @param path
	     * @param item
	     * @returns {string}
	     */
	    genUrlWithParams(path: string, item: any): string;
	    /**
	     * Récupère le contexte Applicatif
	     * @returns {string}
	     */
	    getContextPath(): string;
	    /**
	     * Permet de générer l'url vers les répertoires static de l'application
	     * @param path
	     * @returns {string}
	     */
	    genUrlStatic(path: string): string;
	    /**
	     * Permet de récupérer tous les messages liés à l'internationalisation ainsi que la local
	     * @returns {any} un objet contenant la locale et les messages internationalisés à utiliser.
	     */
	    protected static getInternationalization(): any;
	    /**
	     * Renvoie le ou les messages internationalisés correspondant à la clé indiquée, après avoir remplacé les valeurs paramétrables
	     * avec celles indiquées.
	     * @param keysString clé de message internationalisé
	     * @param values valeurs de remplacement éventuelles
	     * @param internationalization paramètre optionnel contenant les messages internationalisés et la locale
	     * @returns {any} une chaîne de caractères ou un objet contenant des messages
	     */
	    static getI18n(keysString: string, values?: any, internationalization?: any): any;
	    /**
	     * Renvoie le ou les messages internationalisés correspondant à la clé indiquée, après avoir remplacé les valeurs paramétrables
	     * avec celles indiquées.
	     * @param keysString clé de message internationalisé
	     * @param values valeurs de remplacement éventuelles
	     * @returns {any} une chaîne de caractères ou un objet contenant des messages
	     */
	    i18n(keysString: string, values?: any): any;
	    /**
	     * Retourne la valeur de la ressource si la property n'est pas initialisée
	     * @param property : valeur à vérifier si elle est initialisée
	     * @param ressource : valeur par défaut à retourner si la première n'est pas initialisée
	     * @returns {any}
	     */
	    protected initRessourceProperty(property: any, ressource: string): any;
	    /**
	     * Méthode indiquant si le userAgent mentionne l'utilison en cours depuis un périphérique
	     * mobile
	     * Attention userAgent n'est pas ce qu'il y a de plus fiable.
	     * @returns {boolean}
	     */
	    protected isMobile(): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/component/hornet-content" {
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
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { HornetPage }  from "hornet-js-react-components/src/widget/component/hornet-page";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export interface HornetContentProps extends HornetComponentProps {
	    content: Class<HornetPage<any, any, any>>;
	    workingZoneWidth: string;
	    id?: string;
	    error?: any;
	}
	export class HornetContent extends HornetComponent<HornetContentProps, any> {
	    static defaultProps: {};
	    constructor(props?: HornetContentProps, context?: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    componentWillUpdate(nextProps: any, nextState: any): void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Méthode appelée lors du changement de contenu
	     * @param ev
	     */
	    handleComponentChangeEvent(ev: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/component/hornet-page" {
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
	import * as React from "react";
	import { RouteInfos } from "hornet-js-core/src/routes/abstract-routes";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { IHornetPage } from "hornet-js-components/src/component/ihornet-page";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { IService } from "hornet-js-core/src/services/service-api";
	import { ExpandingLayout } from "hornet-js-core/src/services/default/expanding-layout";
	/**
	 * Propriétés HornetPage
	 */
	export interface HornetPageProps extends HornetComponentProps {
	    /**
	     * Largeur maximale de la zone de travail en pixel
	     * Utilisé par le composant LayoutSwitcher pour agrandir ou rétrécir la
	     * zone de travail
	     */
	    workingZoneWidth?: string;
	    /**
	     * Largeur maximale de la zone de travail en pixel utilisée
	     * Utilisé par le composant LayoutSwitcher
	     */
	    currentWorkingZoneWidth?: string;
	    /**
	     * Nom du className a utiliser pour les
	     * layout sensitive components (composant qui s'étendent)
	     * Utilisés par le composant LayoutSwitcher
	     */
	    classNameExpanded?: string;
	    /**
	     * données transmise par la page précédente
	     */
	    navigateData?: any;
	    hasError?: boolean;
	    error?: any;
	}
	/**
	 * Composant de haut-niveau : correspond à une page.
	 */
	export class HornetPage<T extends IService, P extends HornetPageProps, S extends HornetPageProps> extends HornetComponent<HornetPageProps, S> implements IHornetPage<P, S> {
	    static defaultProps: {};
	    /**
	     * Permet de stocker les informations de page liées à la route:
	     * exemple: /:mode/:id
	     */
	    protected attributes: any;
	    /**
	     * Service de la page
	     */
	    protected service: T;
	    /**
	     * Service middleware pour le layout
	     */
	    protected layoutService: ExpandingLayout;
	    /**
	     * @returns {any} les informations de routage associées à la page
	     */
	    protected getRouteInfos(): RouteInfos;
	    /**
	     * Permet d'effectuer les appels d'API et initialisations éventuellement nécessaires une fois le composant page
	     * monté côté client.
	     */
	    prepareClient(): void;
	    /**
	     * Permet d'effectuer les appels d'API et initialisations éventuellement nécessaires une fois le composant page
	     * monté côté client et après le componentDidUpdate.
	     */
	    updateClient(): void;
	    constructor(props?: P, context?: any);
	    /**
	     * @override
	     */
	    componentDidMount(): void;
	    /**
	     * @override
	     */
	    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
	    componentWillUpdate(nextProps: P, nextState: S, nextContext: any): void;
	    componentWillReceiveProps(nextProps: P, nextContext: any): void;
	    componentDidCatch(error: any, info: any): void;
	    render(): React.ReactNode;
	    /**
	     * renvoie le service de la page
	     */
	    getService(): T;
	    /**
	     * Ecoute l'évenement UPDATE_PAGE_EXPAND provenant du composant Hornet LayoutSwitcher
	     * @param specifiedMaxWidth
	     */
	    listenUpdatePageExpandEvent(): void;
	    /**
	     *
	     * @param currentClassName
	     * @param newClassName
	     * @param specifiedMaxWidth
	     */
	    protected fetchHtmlElementsToSetClassBy(currentClassName: string, newClassName: string, specifiedMaxWidth?: string): void;
	    /**
	     *
	     * @param htmlElements
	     * @param i
	     * @param currentClassName
	     * @param newClassName
	     * @param specifiedMaxWidth
	     */
	    protected majCssStyleExpand(htmlElements: HTMLCollectionOf<Element>, i: number, currentClassName: string, newClassName: string, specifiedMaxWidth?: string): void;
	    /**
	     * Méthode permettant à l'écoute du changement d'Url afin de changer le titre de la page
	     */
	    listenUrlChangeEvent(): void;
	    /**
	     *
	     * @param value
	     */
	    protected setIsLayoutExpandedThroughService(value: boolean): void;
	    /**
	     * Définis le style à positionner dans le state classNameExpanded
	     * et la taille max pour le state currentWorkingZoneWidth
	     * Ces states sont utilisées par le composant LayoutSwitcher
	     * pour étendre les composants
	     */
	    protected handleStyleAndWidth(): void;
	    /**
	     * permet de changer d'url en passant des données à la page suivante
	     * @param {string} url - Url à charger
	     * @param {any} data - données à passer à la page suivante
	     * @param {() => void} cb - callback
	     */
	    protected navigateTo(url: string, data: any, cb: () => void): void;
	    /**
	     * Supprime les données de navigation
	     */
	    protected deleteNavigateData(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/dialog/alert" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { ButtonProps }  from "hornet-js-react-components/src/widget/button/button";
	export interface AlertProps extends HornetComponentProps {
	    isVisible?: boolean;
	    onClickOk?: React.MouseEventHandler<HTMLInputElement>;
	    onClickClose?: React.MouseEventHandler<HTMLInputElement>;
	    title?: string;
	    message: string;
	    valid?: string;
	    validTitle?: string;
	    underlayClickExits?: boolean;
	    escapeKeyExits?: boolean;
	    notificationId?: string;
	    dialogId?: string;
	}
	export class Alert extends HornetComponent<AlertProps, any> {
	    props: AlertProps;
	    static defaultProps: {
	        isVisible: boolean;
	        underlayClickExits: boolean;
	        escapeKeyExits: boolean;
	    };
	    constructor(props?: AlertProps, context?: any);
	    setTitle(title: string, cb?: any): this;
	    setMessage(message: string, cb?: any): this;
	    setOnClickOk(onClickOk: React.MouseEventHandler<HTMLInputElement>, cb?: any): this;
	    setOnClickClose(onClickClose: Function, cb?: any): this;
	    open(cb?: any): this;
	    close(cb?: any): this;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Renvoie le/les buttons
	     * @returns {any}
	     */
	    protected renderButtons(): JSX.Element;
	    /**
	     * Configuration du bouton OK
	     * @returns {{type: string, id: string, name: string, value: string, className: string, label: (boolean|string), onClick: (*|defaultFunction)}}
	     */
	    protected configOKButton(): ButtonProps;
	    /**
	     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getValid(): string;
	    /**
	     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getValidTitle(): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/dialog/confirm" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { ButtonProps }  from "hornet-js-react-components/src/widget/button/button";
	export interface ConfirmProps extends HornetComponentProps {
	    isVisible?: boolean;
	    onClickOk?: React.MouseEventHandler<HTMLInputElement>;
	    onClickCancel?: React.MouseEventHandler<HTMLInputElement>;
	    onClickClose?: React.MouseEventHandler<HTMLInputElement>;
	    title?: string;
	    message: string;
	    valid?: string;
	    cancel?: string;
	    validTitle?: string;
	    cancelTitle?: string;
	    underlayClickExits?: boolean;
	    escapeKeyExits?: boolean;
	    notificationId?: string;
	    dialogId?: string;
	}
	export class Confirm extends HornetComponent<ConfirmProps, any> {
	    props: ConfirmProps;
	    static defaultProps: {
	        isVisible: boolean;
	        underlayClickExits: boolean;
	        escapeKeyExits: boolean;
	    };
	    constructor(props?: ConfirmProps, context?: any);
	    setTitle(title: string, cb?: any): this;
	    setMessage(message: string, cb?: any): this;
	    setOnClickOk(onClickOk: React.MouseEventHandler<HTMLInputElement>, cb?: any): this;
	    setOnClickCancel(onClickCancel: Function, cb?: any): this;
	    setOnClickClose(onClickClose: Function, cb?: any): this;
	    open(cb?: any): this;
	    close(cb?: any): this;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Renvoie le/les buttons
	     * @returns {any}
	     */
	    protected renderButtons(): JSX.Element;
	    /**
	     * Configuration du bouton OK
	     * @returns {{type: string, id: string, name: string, value: string, className: string, label: (boolean|string), onClick: (*|defaultFunction)}}
	     */
	    protected configOKButton(): ButtonProps;
	    /**
	     * Configuration du bouton ANNULER
	     * @returns {{type: string, id: string, name: string, value: string, className: string, label: (*|string|cancel), onClick: (*|defaultFunction)}}
	     */
	    protected configCancelButton(): ButtonProps;
	    /**
	     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getValid(): string;
	    /**
	     * Extrait le libelle cancel passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getCancel(): string;
	    /**
	     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getValidTitle(): string;
	    /**
	     * Extrait le libelle cancel passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getCancelTitle(): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/dialog/modal" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import ReactNode = __React.ReactNode;
	import MouseEvent = __React.MouseEvent;
	export interface ModalProps extends HornetComponentProps {
	    onClickClose?: __React.MouseEventHandler<HTMLInputElement>;
	    isVisible?: boolean;
	    title?: string;
	    hideTitleBar?: boolean;
	    hideCloseBar?: boolean;
	    closeLabel?: string;
	    closeSymbole?: string;
	    className?: string;
	    underlayClass?: string;
	    initialFocus?: string;
	    alert?: boolean;
	    underlayClickExits?: boolean;
	    escapeKeyExits?: boolean;
	    verticallyCenter?: boolean;
	    focusDialog?: boolean;
	    manageFocus?: boolean;
	    onShow?: Function;
	    context?: any;
	    isDraggable?: boolean;
	    withoutOverflow?: boolean;
	    dialogId?: string;
	}
	export class Modal extends HornetComponent<ModalProps, any> {
	    static defaultProps: {
	        isVisible: boolean;
	        hideTitleBar: boolean;
	        hideCloseBar: boolean;
	        alert: boolean;
	        underlayClickExits: boolean;
	        verticallyCenter: boolean;
	        focusDialog: boolean;
	        withoutOverflow: boolean;
	    };
	    constructor(props?: ModalProps, context?: any);
	    setTitle(title: string, cb?: any): this;
	    setCloseLabel(closeLabel: string, cb?: any): this;
	    setCloseSymbole(closeSymbole: string, cb?: any): this;
	    setChildren(children: ReactNode, cb?: any): this;
	    open(cb?: any): this;
	    close(cb?: any): this;
	    /**
	     * Gestion par défaut du clic sur le bouton de fermeture
	     * @param event
	     */
	    protected onClickClose(event: MouseEvent<HTMLInputElement>): void;
	    /**
	     * Gestion par défaut du clic sur echap
	     * @param event
	     */
	    protected handleKeyDown(event: KeyboardEvent): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Extrait le titre passé dans les propriétés du composant ou indique un titre par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getTitle(): any;
	    /**
	     * Extrait le label de fermeture passé dans les propriétés du composant ou indique un label par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getCloseLabel(): any;
	    /**
	     * Extrait le symbole de fermeture dans les propriétés du composant ou indique un symbole par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getCloseSymbole(): any;
	}
	
}

declare module "hornet-js-react-components/src/widget/dialog/react-aria-modal" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export class ReactAriaModal extends HornetComponent<any, any> {
	    static defaultProps: {
	        mounted: boolean;
	        manageFocus: boolean;
	        underlayClickExits: boolean;
	        underlayColor: string;
	        escapeKeyExits: boolean;
	        isDraggable: boolean;
	    };
	    static number: number;
	    renderModal(): void;
	    removeModal(): void;
	    render(): any;
	    componentWillMount(): void;
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
	    componentWillUnmount(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/dropdown/dropdown-item" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Composant contenant les élements du dropdown
	 */
	export class DropdownItem extends HornetComponent<any, any> {
	    constructor(props: any, context?: any);
	    onClickEvent: (e: any) => void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/dropdown/dropdown" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export enum Position {
	    BOTTOMLEFT = 0,
	    BOTTOMRIGHT = 1,
	    TOPLEFT = 2,
	    TOPRIGHT = 3
	}
	/**
	 * Propriétés Dropdown
	 */
	export interface DropdownProps extends HornetComponentProps {
	    id: string;
	    onClick?: React.MouseEventHandler<HTMLInputElement>;
	    className?: string;
	    label?: string;
	    /** className facultatif à appliquer au label */
	    labelClassName?: string;
	    disabled?: boolean;
	    icon?: string;
	    items?: any;
	    valueCurrent?: number;
	    ariaLabel?: string;
	    /** parametre pour afficher le dropdown qui prendre en valeur un enum Position (ci-dessus) */
	    position?: Position;
	    /** Option qui affiche ou non la petite fleche pour la box dropdown */
	    drawArrow?: boolean;
	    /** boolean qui cache ou non le dropdown apres le click sur un item */
	    closeClick?: boolean;
	    title?: string;
	    type?: string;
	    ariaLabelledById?: string;
	}
	/**
	 * Composant Dropdown
	 */
	export class Dropdown extends HornetComponent<DropdownProps, any> {
	    static defaultProps: {
	        disabled: boolean;
	        position: Position;
	        drawArrow: boolean;
	        closeClick: boolean;
	    };
	    /** bouton du dropdown */
	    button: any;
	    /** Liste des items du dropdown */
	    items: any[];
	    dropDown: any;
	    /** Tableau pour matcher Enum avec className */
	    lstPosition: string[];
	    boxStyle: any;
	    arrowStyle: any;
	    constructor(props: any, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidUpdate(): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUpdate(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    renderLink(): JSX.Element;
	    renderButton(): JSX.Element;
	    /**
	     * Rendu type Dropdown
	     * @returns {any}
	     * @protected
	     */
	    renderDropDown(): JSX.Element;
	    calculPositionBox(): void;
	    handleClick(): void;
	    /**
	     * ouvre le dropdown, le focus reste sur le bouton appelant
	     */
	    openPanel(): void;
	    /**
	     * ferme le dropdown et focus le bouton parent
	     */
	    closePanel(): void;
	    /**
	     * Gère les événements clavier sur le dropdown
	     * @param e Event
	     */
	    handleKeyDownDropDown: (e: any) => void;
	    /**
	     * Gère les événements clavier sur un item du dropdown
	     *
	     * @param e Event
	     * @param action Function
	     * @param url String
	     */
	    handleKeyDownDropDownItem: (e: any, action: any, url: any) => void;
	    /**
	     * Ferme la liste lorsque le clic est en dehors de la div
	     * @param e Event
	     */
	    handleExpandOutside(e: any): void;
	    /**
	     * Ferme le dropdown courrant à l'ouverture d'un autre dropdown
	     * @param event
	     */
	    private handleOtherDropdownActivation;
	}
	
}

declare module "hornet-js-react-components/src/widget/footer/footer-page" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export interface FooterPageProps extends HornetComponentProps {
	    /**
	     * Largeur maximale de la zone de travail en pixel
	     * Utilisé par le composant LayoutSwitcher pour agrandir ou rétrécir la
	     * zone de travail
	     */
	    workingZoneWidth?: string;
	}
	export class FooterPage extends HornetComponent<FooterPageProps, any> {
	    static defaultProps: {
	        workingZoneWidth: string;
	    };
	    constructor(props: FooterPageProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/group/abstract-group-component" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export interface GroupComponentProps extends HornetComponentProps {
	    id: any;
	    key?: any;
	}
	export class GroupComponent<P extends GroupComponentProps, S extends GroupComponentProps> extends HornetComponent<P, S> {
	    constructor(props?: P, context?: any);
	    static generateKey(object: any, defaultKey?: string): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/header/header-page" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export interface HeaderPageProps extends HornetComponentProps {
	    /**
	     * number
	     * Hauteur en pixel du header en props pour afficher
	     * la class css 'sticky'
	     */
	    scrollHeight?: number;
	}
	export class HeaderPage extends HornetComponent<HeaderPageProps, any> {
	    /** ref */
	    header?: any;
	    height?: any;
	    constructor(props: HeaderPageProps, context?: any);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     *
	     * @param element
	     * @returns {boolean}
	     */
	    isInView(element: any): boolean;
	    /**
	     *
	     * @param e
	     */
	    handleScroll: (e: any) => void;
	}
	
}

declare module "hornet-js-react-components/src/widget/icon/icon" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés d'une icône
	 */
	export interface IconProps extends HornetComponentProps {
	    /** Url de l'image */
	    src: string;
	    /** Texte alternatif */
	    alt: string;
	    /** Identifiant HTML de l'image rendue */
	    idImg?: string;
	    /** Class CSS de l'image */
	    classImg?: string;
	    /** Url du lien */
	    url?: string;
	    /** Texte d'infobulle du lien */
	    title: string;
	    /** Identifiant HTML du lien */
	    idLink?: string;
	    /** Classe CSS du lien */
	    classLink?: string;
	    /** Cible du lien */
	    target?: string;
	    /** Fonction déclenchée lorsque le bouton correspondant à l'icône est pressé ou cliqué */
	    action?: () => void;
	    /** Valeur de l'attribut HTML tabIndex à affecter au lien ou bouton correspondant à l'icône*/
	    tabIndex?: number;
	    /** Indicateur d'ouverture d'un popup suite à clic sur bouton */
	    hasPopUp?: boolean;
	}
	/** Valeur de l'url par défaut lorsque la propriété url est vide */
	export const EMPTY_URL: string;
	/**
	 * Composant Icône
	 */
	export class Icon extends HornetComponent<IconProps, any> {
	    static defaultProps: {
	        url: string;
	    };
	    /**
	     * Retire le focus de l'élément une fois cliqué de façon à permettre de scroller ou mettre le focus sur les
	     * notifications éventuellement présentées suite à l'action.
	     * @param event évènement
	     * @protected
	     */
	    protected iconOnClick(event: React.MouseEvent<HTMLElement>): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/language/change-language" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { Position }  from "hornet-js-react-components/src/widget/dropdown/dropdown";
	/**
	 *
	 * Propriétés ChangeLanguage
	 */
	export interface ChangeLanguageProps extends HornetComponentProps {
	    /** id du composant */
	    id?: string;
	    /** Boolean permettant de savoir si la liste deroulante est affiché */
	    isOpen?: boolean;
	    /** Méthode appelé après un changement de langue */
	    handleChangeLanguage?: (locale: string) => void;
	    /** détermine la position du arrow */
	    position?: Position;
	    switchTitle?: string;
	}
	/**
	 * Composant ChangeLanguage
	 * Il permet de changer le langue sur le site via un menu deroulant
	 */
	export class ChangeLanguage extends HornetComponent<ChangeLanguageProps, any> {
	    /** Valeur de propriétés par défaut */
	    static defaultProps: {
	        isOpen: boolean;
	        position: Position;
	    };
	    constructor(props: any, context?: any);
	    componentDidMount(): void;
	    componentDidUpdate(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Met à jour la la langue en fonction de la selection
	     * @param locale de format Ii18n {locale:"fr-FR", lang:'fr'}
	     * @param shortLabel bigramme de la nouvelle langue ( ex : 'en' , 'fr' )
	     */
	    selectLanguage(locale: string, shortLabel: string): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/abstract-field-datasource" {
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
	import { AbstractField, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { IHornetComponentDatasource, IHornetComponentAsync } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
	/**
	 * Représente un champ de formulaire qui possède un datasource
	 */
	export abstract class AbstractFieldDatasource<P extends HornetComponentDatasourceProps & AbstractFieldProps, S> extends AbstractField<HornetComponentDatasourceProps & AbstractFieldProps, S> implements IHornetComponentDatasource, IHornetComponentAsync {
	    readonly props: Readonly<HornetComponentDatasourceProps & AbstractFieldProps>;
	    constructor(props?: HornetComponentDatasourceProps & AbstractFieldProps, context?: any);
	    /**
	     * Méthode qui controle l'affichage et la suppression du spinner
	     * @param flag booléen true pour l'afficher false sinon
	     */
	    displaySpinner(flag: boolean): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * enregistre la liste des choix possibles
	     */
	    protected setItem(): void;
	    /**
	     * Méthode premettant d'afficher le spinner
	     * @returns {Table}
	     */
	    showSpinnerComponent(): this;
	    /**
	     * Méthode premettant de masquer le spinner
	     * @returns {Table}
	     */
	    hideSpinnerComponent(): this;
	    setDataSource(value: DataSource<any>, callback?: () => any): this;
	    updateDataSource(value: any): void;
	    /**
	     * Génère le rendu des élements assurant la saisie des valeurs
	     * @returns {any}
	     */
	    renderField(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/abstract-field" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { DomAdapter }  from "hornet-js-react-components/src/widget/form/dom-adapter";
	import { FieldErrorProps }  from "hornet-js-react-components/src/widget/form/field-error";
	import { INotificationType } from "hornet-js-core/src/notification/notification-manager";
	import ComponentClass = __React.ComponentClass;
	import ReactElement = __React.ReactElement;
	import ReactNode = __React.ReactNode;
	import ClipboardEventHandler = __React.ClipboardEventHandler;
	import CompositionEventHandler = __React.CompositionEventHandler;
	import FocusEventHandler = __React.FocusEventHandler;
	import FormEventHandler = __React.FormEventHandler;
	import ReactEventHandler = __React.ReactEventHandler;
	import KeyboardEventHandler = __React.KeyboardEventHandler;
	import MouseEventHandler = __React.MouseEventHandler;
	import DragEventHandler = __React.DragEventHandler;
	import TouchEventHandler = __React.TouchEventHandler;
	import UIEventHandler = __React.UIEventHandler;
	import WheelEventHandler = __React.WheelEventHandler;
	import AnimationEventHandler = __React.AnimationEventHandler;
	import TransitionEventHandler = __React.TransitionEventHandler;
	/**
	 * Propriétés standards pour un élément HTML
	 */
	export interface HornetBasicFormFieldProps extends HTMLStandardConfigAttributes, HTMLStandardFormAttributes, HTMLStandardGlobalAttributes, HTMLStandardPresentationAttributes, HornetFormFieldProps, ReactBasicDOMAttributes, ReactFormDOMAttributes, HornetComponentProps {
	    name: string;
	}
	export interface HornetWrittableProps extends ReactClipboardDOMAttributes, ReactFormDOMAttributes, ReactKeyboardDOMAttributes {
	}
	export interface HornetClickableProps extends ReactBasicMouseDOMAttributes, ReactSelectDOMAttributes {
	}
	export interface HornetMediaProps extends HTMLStandardMediaAttributes, ReactMediaDOMAttributes, ReactImageDOMAttributes {
	}
	export interface HornetDraggableProps extends HTMLStandardGlobalAttributes, ReactDragDOMAttributes, HornetClickableProps {
	}
	export interface HTMLStandardConfigAttributes {
	    accept?: string;
	    acceptCharset?: string;
	    action?: string;
	    autoComplete?: string;
	    charSet?: string;
	    challenge?: string;
	    checked?: boolean;
	    defaultChecked?: boolean;
	    classID?: string;
	    dateTime?: string;
	    default?: boolean;
	    defer?: boolean;
	    disabled?: boolean;
	    download?: any;
	    encType?: string;
	    high?: number;
	    href?: string;
	    hrefLang?: string;
	    htmlFor?: string;
	    inputMode?: string;
	    integrity?: string;
	    is?: string;
	    keyParams?: string;
	    keyType?: string;
	    list?: string;
	    low?: number;
	    manifest?: string;
	    method?: string;
	    multiple?: boolean;
	    name?: string;
	    open?: boolean;
	    optimum?: number;
	    pattern?: string;
	    placeholder?: string;
	    radioGroup?: string;
	    readOnly?: boolean;
	    rel?: string;
	    role?: string;
	    sandbox?: string;
	    scrolling?: string;
	    seamless?: boolean;
	    sizes?: string;
	    summary?: string;
	    target?: string;
	    type?: string;
	    useMap?: string;
	}
	export interface HTMLStandardFormAttributes {
	    form?: string;
	    formAction?: string;
	    formEncType?: string;
	    formMethod?: string;
	    formNoValidate?: boolean;
	    formTarget?: string;
	    noValidate?: boolean;
	    required?: boolean;
	    wrap?: string;
	}
	export interface HTMLStandardGlobalAttributes {
	    accessKey?: string;
	    className?: string;
	    contentEditable?: boolean;
	    contextMenu?: string;
	    data?: string;
	    dir?: string;
	    draggable?: boolean;
	    hidden?: boolean;
	    id?: string;
	    lang?: string;
	    spellCheck?: boolean;
	    style?: React.CSSProperties;
	    tabIndex?: number;
	    title?: string;
	}
	export interface HTMLStandardMediaAttributes {
	    allowFullScreen?: boolean;
	    allowTransparency?: boolean;
	    async?: boolean;
	    autoPlay?: boolean;
	    capture?: boolean;
	    controls?: boolean;
	    coords?: string;
	    crossOrigin?: string;
	    kind?: string;
	    label?: string;
	    loop?: boolean;
	    media?: string;
	    mediaGroup?: string;
	    muted?: boolean;
	    poster?: string;
	    preload?: string;
	    src?: string;
	    srcLang?: string;
	    srcSet?: string;
	    wmode?: string;
	}
	export interface HTMLStandardMetaAttributes {
	    content?: string;
	    httpEquiv?: string;
	}
	export interface HTMLStandardPresentationAttributes {
	    alt?: string;
	    autoFocus?: boolean;
	    cellPadding?: number | string;
	    cellSpacing?: number | string;
	    cols?: number;
	    colSpan?: number;
	    frameBorder?: number | string;
	    headers?: string;
	    height?: number | string;
	    icon?: string;
	    marginHeight?: number;
	    marginWidth?: number;
	    max?: number | string;
	    maxLength?: number;
	    min?: number | string;
	    minLength?: number;
	    rows?: number;
	    rowSpan?: number;
	    scope?: string;
	    scoped?: boolean;
	    selected?: boolean;
	    shape?: string;
	    size?: number;
	    span?: number;
	    srcDoc?: string;
	    start?: number;
	    step?: number | string;
	    width?: number | string;
	}
	export interface HTMLRDFaAttributes {
	    about?: string;
	    datatype?: string;
	    inlist?: any;
	    prefix?: string;
	    property?: string;
	    resource?: string;
	    typeof?: string;
	    vocab?: string;
	}
	export interface HTMLNonStandardAttributes {
	    autoCapitalize?: string;
	    autoCorrect?: string;
	    autoSave?: string;
	    color?: string;
	    itemProp?: string;
	    itemScope?: boolean;
	    itemType?: string;
	    itemID?: string;
	    itemRef?: string;
	    results?: number;
	    security?: string;
	    unselectable?: boolean;
	    label?: string;
	}
	export interface HornetHTMLAttributes extends HTMLStandardConfigAttributes, HTMLStandardFormAttributes, HTMLStandardGlobalAttributes, HTMLStandardMediaAttributes, HTMLStandardMetaAttributes, HTMLStandardPresentationAttributes, HTMLNonStandardAttributes, HTMLRDFaAttributes {
	}
	export interface HornetProps extends HornetReactDOMAttributes, HornetHTMLAttributes {
	}
	export interface HornetReactDOMAttributes extends ReactClipboardDOMAttributes, ReactComposeDOMAttributes, ReactFocusDOMAttributes, ReactFormDOMAttributes, ReactImageDOMAttributes, ReactKeyboardDOMAttributes, ReactMediaDOMAttributes, ReactBasicMouseDOMAttributes, ReactDragDOMAttributes, ReactSelectDOMAttributes, ReactTouchDOMAttributes, ReactScrollDOMAttributes, ReactWheelDOMAttributes, ReactAnimationDOMAttributes, ReactTransitionDOMAttributes, ReactBasicDOMAttributes {
	}
	export interface ReactMouseDOMAttributes extends ReactBasicMouseDOMAttributes, ReactDragDOMAttributes {
	}
	export interface ReactClipboardDOMAttributes {
	    onCopy?: ClipboardEventHandler<HTMLInputElement>;
	    onCut?: ClipboardEventHandler<HTMLInputElement>;
	    onPaste?: ClipboardEventHandler<HTMLInputElement>;
	}
	export interface ReactComposeDOMAttributes {
	    onCompositionEnd?: CompositionEventHandler<HTMLElement>;
	    onCompositionStart?: CompositionEventHandler<HTMLElement>;
	    onCompositionUpdate?: CompositionEventHandler<HTMLElement>;
	}
	export interface ReactFocusDOMAttributes {
	    onFocus?: FocusEventHandler<HTMLInputElement>;
	    onBlur?: FocusEventHandler<HTMLInputElement>;
	}
	export interface ReactFormDOMAttributes {
	    onChange?: FormEventHandler<HTMLElement>;
	    onInput?: FormEventHandler<HTMLElement>;
	    onSubmit?: FormEventHandler<HTMLElement>;
	}
	export interface ReactImageDOMAttributes {
	    onLoad?: ReactEventHandler<HTMLElement>;
	    onError?: ReactEventHandler<HTMLElement>;
	}
	export interface ReactKeyboardDOMAttributes {
	    onKeyDown?: KeyboardEventHandler<HTMLElement>;
	    onKeyPress?: KeyboardEventHandler<HTMLElement>;
	    onKeyUp?: KeyboardEventHandler<HTMLElement>;
	}
	export interface ReactMediaDOMAttributes {
	    onError?: ReactEventHandler<HTMLElement>;
	    onAbort?: ReactEventHandler<HTMLMediaElement>;
	    onCanPlay?: ReactEventHandler<HTMLMediaElement>;
	    onCanPlayThrough?: ReactEventHandler<HTMLMediaElement>;
	    onDurationChange?: ReactEventHandler<HTMLMediaElement>;
	    onEmptied?: ReactEventHandler<HTMLMediaElement>;
	    onEncrypted?: ReactEventHandler<HTMLMediaElement>;
	    onEnded?: ReactEventHandler<HTMLMediaElement>;
	    onLoadedData?: ReactEventHandler<HTMLMediaElement>;
	    onLoadedMetadata?: ReactEventHandler<HTMLMediaElement>;
	    onLoadStart?: ReactEventHandler<HTMLMediaElement>;
	    onPause?: ReactEventHandler<HTMLMediaElement>;
	    onPlay?: ReactEventHandler<HTMLMediaElement>;
	    onPlaying?: ReactEventHandler<HTMLMediaElement>;
	    onProgress?: ReactEventHandler<HTMLMediaElement>;
	    onRateChange?: ReactEventHandler<HTMLMediaElement>;
	    onSeeked?: ReactEventHandler<HTMLMediaElement>;
	    onSeeking?: ReactEventHandler<HTMLMediaElement>;
	    onStalled?: ReactEventHandler<HTMLMediaElement>;
	    onSuspend?: ReactEventHandler<HTMLMediaElement>;
	    onTimeUpdate?: ReactEventHandler<HTMLMediaElement>;
	    onVolumeChange?: ReactEventHandler<HTMLMediaElement>;
	    onWaiting?: ReactEventHandler<HTMLMediaElement>;
	}
	export interface ReactBasicMouseDOMAttributes {
	    onClick?: MouseEventHandler<HTMLElement>;
	    onContextMenu?: MouseEventHandler<HTMLElement>;
	    onDoubleClick?: MouseEventHandler<HTMLElement>;
	    onMouseDown?: MouseEventHandler<HTMLElement>;
	    onMouseEnter?: MouseEventHandler<HTMLElement>;
	    onMouseLeave?: MouseEventHandler<HTMLElement>;
	    onMouseMove?: MouseEventHandler<HTMLElement>;
	    onMouseOut?: MouseEventHandler<HTMLElement>;
	    onMouseOver?: MouseEventHandler<HTMLElement>;
	    onMouseUp?: MouseEventHandler<HTMLElement>;
	}
	export interface ReactDragDOMAttributes {
	    onDrag?: DragEventHandler<HTMLElement>;
	    onDragEnd?: DragEventHandler<HTMLElement>;
	    onDragEnter?: DragEventHandler<HTMLElement>;
	    onDragExit?: DragEventHandler<HTMLElement>;
	    onDragLeave?: DragEventHandler<HTMLElement>;
	    onDragOver?: DragEventHandler<HTMLElement>;
	    onDragStart?: DragEventHandler<HTMLElement>;
	    onDrop?: DragEventHandler<HTMLElement>;
	}
	export interface ReactSelectDOMAttributes {
	    onSelect?: ReactEventHandler<HTMLElement>;
	}
	export interface ReactTouchDOMAttributes {
	    onTouchCancel?: TouchEventHandler<HTMLElement>;
	    onTouchEnd?: TouchEventHandler<HTMLElement>;
	    onTouchMove?: TouchEventHandler<HTMLElement>;
	    onTouchStart?: TouchEventHandler<HTMLElement>;
	}
	export interface ReactScrollDOMAttributes {
	    onScroll?: UIEventHandler<HTMLElement>;
	}
	export interface ReactWheelDOMAttributes {
	    onWheel?: WheelEventHandler<HTMLElement>;
	}
	export interface ReactAnimationDOMAttributes {
	    onAnimationStart?: AnimationEventHandler<HTMLElement>;
	    onAnimationEnd?: AnimationEventHandler<HTMLElement>;
	    onAnimationIteration?: AnimationEventHandler<HTMLElement>;
	}
	export interface ReactTransitionDOMAttributes {
	    onTransitionEnd?: TransitionEventHandler<HTMLElement>;
	}
	export interface ReactBasicDOMAttributes {
	    children?: ReactNode;
	    dangerouslySetInnerHTML?: {
	        __html: string;
	    };
	}
	export interface HornetFormFieldProps {
	    /** Nom du champ. Il peut s'agir d'un "path" dans la hiérarchie d'objets de données extraites depuis le formulaire,
	     * ou servant à l'initialiser. Exemple : "ville.pays.id" */
	    name: string;
	    label?: string;
	    abbr?: string;
	    /** Classe(s) CSS du bloc englobant le libellé et le champ de formulaire */
	    groupClass?: string;
	    /** Classe(s) CSS du libellé */
	    labelClass?: string;
	    /** Classe(s) CSS du champ de formulaire */
	    fieldClass?: string;
	    toolTip?: string;
	    icoToolTip?: string;
	    /** Préfixe (texte ou noeud) éventuellement ajouté entre le libellé et le champ de saisie.
	     * Exemples : <Field prefix="M." name="nom"/> <Field prefix={<strong>M.</strong>} name="nom"/>*/
	    prefix?: any;
	    /** Suffixe (texte ou noeud) éventuellement ajouté après le champ de saisie.
	     * Exemples : <Field name="taille" suffix="cm"/> <Field name="taille" suffix={<strong>cm</strong>} />*/
	    suffix?: any;
	    /** Lorsqu'égal à false, les libellés des champs obligatoires ne sont pas marqués avec un astérisque */
	    markRequired?: boolean;
	    /** Titre à afficher sous l'asterisque lorsque le champ est obligatoire */
	    requiredLabel?: string;
	    imgFilePath?: string;
	    currentValue?: string | string[];
	    /** Composant générant le rendu d'erreurs de validation liées au champ */
	    errorComponent?: ComponentClass<FieldErrorProps>;
	    /** Erreurs de validation */
	    errors?: INotificationType[];
	    inline?: InlineStyle;
	    reverseLabel?: boolean;
	}
	export enum InlineStyle {
	    NONE = 0,
	    FIELD = 1,
	    ALL = 2
	}
	export interface AbstractFieldProps extends HornetBasicFormFieldProps {
	    nullable?: boolean;
	}
	/**
	 * Représente un champ de formulaire.
	 */
	export abstract class AbstractField<P extends AbstractFieldProps, S> extends DomAdapter<AbstractFieldProps, any> {
	    /** Valeurs par défaut des propriétés */
	    static defaultProps: any;
	    static Inline: typeof InlineStyle;
	    constructor(props?: AbstractFieldProps, context?: any);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    /**
	     * Met à jour l'état interne avec les nouvelles propriétés.
	     * Surcharge la méthode parente : les attributs HTML standards sont initialisés via la fonction générique setAttribute.
	     * @param nextProps nouvelles propriétés
	     * @param nextContext nouveau contexte
	     * @override
	     */
	    componentWillReceiveProps(nextProps: any, nextContext: any): void;
	    /**
	      * @inheritDoc
	      */
	    render(): JSX.Element;
	    /**
	     * Génère l'état interne du composant à partir des propriétés indiquées
	     * @param props
	     */
	    makeState<S>(state: AbstractFieldProps): void;
	    /**
	     * @inheritDoc
	     * @param removeEmptyStrings {boolean} si false et le champs nullable alors renvoie null
	     */
	    getCurrentValue(removeEmptyStrings?: boolean): any;
	    setAbbr(abbr: string, callback?: () => any): this;
	    setGroupClass(groupClass: string, callback?: () => any): this;
	    setLabelClass(labelClass: string, callback?: () => any): this;
	    setFieldClass(fieldClass: string, callback?: () => any): this;
	    setToolTip(toolTip: string, callback?: () => any): this;
	    setIcoToolTip(icoToolTip: string, callback?: () => any): this;
	    setPrefix(prefix: any, callback?: () => any): this;
	    setSuffix(suffix: any, callback?: () => any): this;
	    setMarkRequired(markRequired: boolean, callback?: () => any): this;
	    setrequiredLabel(requiredLabel: string, callback?: () => any): this;
	    setImgFilePath(imgFilePath: string, callback?: () => any): this;
	    setErrorComponent(errorComponent: ComponentClass<FieldErrorProps>, callback?: () => any): this;
	    setErrors(errors: INotificationType[], callback?: () => any): this;
	    /**
	     * @override
	     */
	    setAttribute(name: string, value: any): this;
	    /**
	     * @override
	     */
	    setCurrentChecked(value: any): this;
	    /**
	     * @override
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * @override
	     */
	    setReadOnly(value: any): this;
	    /**
	     * @override
	     */
	    setDisabled(value: any): this;
	    /**
	     * le champ est-il en erreur
	     */
	    hasErrors(): boolean;
	    /**
	     * Renvoie un tableau de champs en erreur: lui-même ou un champ lié ?
	     */
	    getNamesFieldsError(): string[];
	    /**
	     * Génère le rendu des erreurs de validation éventuelles
	     */
	    renderErrors(): ReactElement<FieldErrorProps>;
	    /**
	     * Génère le rendu du libellé pour le champ
	     * @param fieldId identifiant du champ
	     * @param fieldName nom du champ
	     * @param label libellé à afficher
	     * @param required indique si le champ est obligatoire
	     * @returns {any}
	     */
	    renderLabel(fieldId: string, fieldName: string, label: string, required: boolean): JSX.Element;
	    /**
	     * Méthode permettant de calculer les classNames du label
	     */
	    protected calculateLabelClassName(): ClassDictionary;
	    protected getRequiredLabel(): string;
	    /**
	     * Applique certaines règles par défaut sur les propriétés HTML standards
	     * @param propriétés à traiter. Cet objet est éventuellement modifié.
	     */
	    processHtmlProps(state: AbstractFieldProps): void;
	    /**
	     * @returns {TResult} les propriétés html standard de ce champ
	     */
	    getHtmlProps(): AbstractFieldProps;
	    /**
	     * Génère le rendu de l'élément permettant la saisie. A implémenter dans les sous-classes.
	     */
	    abstract renderWidget(): JSX.Element;
	    /**
	     * Génère le rendu des élements assurant la saisie des valeurs
	     * @returns {any}
	     */
	    renderField(): JSX.Element;
	    /**
	     *  Lorsque le champ prends le focus on verifie qu'il n'est pas caché par le bandeau
	     *  si c'est le cas on effecteur un scroll du double de la hauteur du bandeau
	     */
	    handleSimulateScroll(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/abstract-form" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { DomAdapter }  from "hornet-js-react-components/src/widget/form/dom-adapter";
	export interface AbstractFormProps extends HornetComponentProps {
	    /** Indique que les champs enfants sont en lecture seule */
	    readOnly?: boolean;
	    /** Indique que les champs enfatns sont désactivés */
	    disabled?: boolean;
	}
	/**
	 * Composant permettant de rendre un formulaire Hornet de manière standardisée
	 */
	export abstract class AbstractForm<P extends AbstractFormProps, S> extends HornetComponent<P, any> {
	    /** Référence vers le formulaire HTML */
	    protected formElement: HTMLFormElement;
	    protected fieldSetElement: HTMLFieldSetElement;
	    /** Valeur de propriétés par défaut */
	    static defaultProps: any;
	    constructor(props?: P, context?: any);
	    setReadOnly(value: boolean, callback?: () => any): this;
	    setDisabled(value: boolean, callback?: () => any): this;
	    componentDidMount(): void;
	    registerForm(formInstance: React.ReactInstance): void;
	    registerFieldSet(fieldSetInstance: React.ReactInstance): void;
	    /**
	     * Met à jour la propriété readOnly sur chacun des champs enfants
	     * @param isReadOnly valeur à assigner à la propriété 'readOnly'
	     * @return cet objet
	     */
	    protected updateReadOnlyFields(isReadOnly: boolean): this;
	    /**
	     * Met à jour la propriété disabled sur chacun des champs enfants
	     * @param isDisabled valeur à assigner à la propriété 'disabled'
	     * @return cet objet
	     */
	    protected updateDisabledFields(isDisabled: boolean): this;
	    /**
	     * Propage les propriétés devant être transmises aux champs enfants
	     */
	    protected propagateParentState(): void;
	    /**
	     * @returns {{}} un object associant les noms de champ aux composants HTML ou React correspondants
	     */
	    protected abstract extractFields(): {
	        [key: string]: DomAdapter<any, any>;
	    };
	    /**
	     * Extrait les données du formulaire
	     * @param removeEmptyStrings indique si les champs ayant pour valeur une chaîne de caractères vide ne doivent pas
	     * être présents dans l'objet résultat.
	     * @returns {Object}
	     */
	    extractData(removeEmptyStrings?: boolean): Object;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/auto-complete-field" {
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
	import * as React from "react";
	import { HornetBasicFormFieldProps, HornetClickableProps, HornetWrittableProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { FieldErrorProps }  from "hornet-js-react-components/src/widget/form/field-error";
	import { HornetComponentChoicesProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { AutoCompleteState }  from "hornet-js-react-components/src/widget/form/auto-complete-state";
	import { AbstractFieldDatasource }  from "hornet-js-react-components/src/widget/form/abstract-field-datasource";
	import FormEvent = __React.FormEvent;
	export enum FilterTextType {
	    beginWith = 1,
	    indexOf = 2
	}
	/**
	 * Propriétés du composant d'auto-complétion
	 */
	export interface AutoCompleteFieldProps extends AbstractFieldProps, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, HornetComponentDatasourceProps, HornetComponentChoicesProps {
	    minValueLength?: number;
	    maxElements?: number;
	    delay?: number;
	    maxHeight?: number;
	    init?: boolean;
	    autoCompleteState?: AutoCompleteState;
	    writable?: boolean;
	    itemSelectedLabel?: string;
	    filterText?: FilterTextType | Function;
	    name: string;
	    noResultLabel?: String;
	    resettable?: boolean;
	    resetTitle?: string;
	}
	/**
	 * Composant d'auto-complétion.
	 * Les fonctions getCurrentValue et setCurrentValue s'appuient sur le champ caché contenant la valeur sélectionnée.
	 */
	export class AutoCompleteField<P extends AutoCompleteFieldProps> extends AbstractFieldDatasource<AutoCompleteFieldProps, any> {
	    readonly props: Readonly<AutoCompleteFieldProps>;
	    static defaultProps: any;
	    protected _throttledTriggerAction: Function;
	    /** Référence vers le champ caché contenant la valeur de l'élément sélectionné */
	    protected hiddenInput: HTMLInputElement;
	    /** Référence vers le champ de saisie libre */
	    protected textInput: HTMLInputElement;
	    protected autoCompleteState: AutoCompleteState;
	    /** Indicateur si la valeur dans l'autocomplete a changé depuis le dernier focus */
	    protected isUpdated: boolean;
	    protected typedValueOnFocus: string;
	    constructor(props: P, context?: any);
	    /**
	     * Setter indiquant que l'API est en cours d'exécution
	     * @param value valeur à utiliser
	     * @param callback fonction de callback éventuelle
	     * @returns {AutoComplete}
	     */
	    setIsApiLoading(value: boolean, callback?: () => any): this;
	    /**
	     * Setter des choix du composant
	     * @param value tableau de choix
	     * @param callback fonction de callback éventuelle
	     * @returns {AutoComplete}
	     */
	    setChoices(value: any[], callback?: () => any): this;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUpdate(nextProps: AutoCompleteFieldProps, nextState: any, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: AutoCompleteFieldProps, nextState: any, nextContext: any): boolean;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * rendu html du bouton reset
	     * @returns {any}
	     */
	    renderResetButton(): JSX.Element;
	    handleResetKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
	    reset(): void;
	    isValued(): boolean;
	    /**
	     *
	     * @param result
	     */
	    protected fetchEventCallback(result: any): void;
	    /**
	     * récupération des choix dans le datasource
	     * @param result
	     */
	    protected addEventCallback(result: any): void;
	    /**
	     * récupération des choix dans le datasource
	     * @param result
	     */
	    protected setResultCallback(result: any): void;
	    /**
	     * récupération des choix dans le datasource
	     * mise à jour des choix possibles
	     * @param result
	     */
	    protected setDeleteResultCallback(result: any): void;
	    /**
	     * récupération des choix possibles dans le datasource
	     * @param filtered
	     */
	    protected filterEventCallback(filtered: any): void;
	    /**
	     * récupération des choix à l'initialisation
	     * @param result
	     */
	    protected initEventCallback(result: any): void;
	    /**
	     * retourne le texte saisi
	     * @return {any} le texte actuellement saisi dans le champ de saisie libre
	     */
	    getCurrentText(): string;
	    /**
	     * Modifie la valeur du texte présent dans l'input
	     * @param value texte à mettre dans l'input
	     */
	    setCurrentText(value: string): void;
	    /**
	     * Réinitialise le champs autocomplete
	     */
	    resetField(): this;
	    /**
	     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
	     */
	    protected resetSelectedValue(): void;
	    /**
	     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
	     */
	    protected resetSelectedText(): void;
	    /**
	     * Fonction appelée lors d'un appui de touche sur le champ de saisie libre
	     * @param e évènement
	     * @protected
	     */
	    protected handleOnKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
	    /**
	     * gère la tabulation
	     * @param {__React.KeyboardEvent<HTMLElement>} e
	     * @param {boolean} shouldShow
	     * @param {boolean} preventDefault
	     */
	    protected tabHandlerForValueChange(e: __React.KeyboardEvent<HTMLElement>, shouldShow: boolean): void;
	    /**
	     * valide le choix sélectionné
	     * @param shouldShow indique si les résultats doivent être affichés
	     */
	    protected validateSelectedValue(shouldShow: boolean): void;
	    /**
	     * Gestion de l'évènement onFocus pour le champ de saisie libre.
	     * @param event
	     */
	    protected handleOnFocus(event: any): void;
	    /**
	     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
	     * @param event
	     */
	    protected handleOnBlur(event: React.FocusEvent<HTMLElement>): void;
	    /**
	     * indique aux élément esclave qu'un filter a été fait sur le maitre si le datasource en est un
	     */
	    clearFilterData(): void;
	    /**
	     * Fonction déclenchée sur une modification du champ de saisie libre
	     * @param event
	     */
	    protected handleChangeTextInput(event: FormEvent<HTMLElement>): void;
	    /**
	     * si il n'y a plus qu'un choix écrit dans sa totalité,
	     * valid ele choix
	     * @param {string} newText
	     */
	    protected changeSelectedChoiceWhenOneChoice(newText: string): void;
	    /**
	     * change la valeur courrante
	     * @param value
	     * @returns {this}
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * Déclenche le chargement des éléments correspondant au texte saisi
	     * @param newText texte saisi
	     */
	    protected triggerAction(newText: string): void;
	    /**
	     * Controle la longeur du text saisie avant de déclancher la recherche
	     * @param cnt : boolean
	     */
	    protected isMaxElementNumberReached(cnt: number): boolean;
	    /**
	     * Charge la liste de choix dans le composant
	     */
	    protected prepareChoices(display?: boolean): void;
	    /**
	     * Fonction déclenchée une fois les éléments de choix obtenus par la fonction choicesLoader
	     * @param resultItems éléments obtenus. ceux-ci doivent contenir une propr
	     */
	    protected choicesLoaderCallback(resultItems: any[]): void;
	    /**
	     * test si le choix choice commence par current
	     * @param choice
	     * @param current
	     * @returns {boolean}
	     */
	    protected startsWithText(choice: any, current: string): boolean;
	    /**
	     * teste si le texte current est contenu dans le choix choice
	     * @param choice
	     * @param current
	     * @returns {boolean}
	     */
	    protected indexOfText(choice: any, current: string): boolean;
	    /**
	     * indique si le texte current se trouve dans le choix
	     * @param choice
	     * @param current
	     * @returns {boolean}
	     */
	    protected findText(choice: any, current: string): any;
	    /**
	     * Fonction appelée lorsque l'utilisateur a choisi un élément de la liste de choix.
	     * @param choice élément sélectionné
	     */
	    changeSelectedChoice(choice?: any): void;
	    /**
	     * Recupere l'index de l'element selectionné
	     * @param choice
	     */
	    selectedChoice(choice: any): void;
	    /**
	     * Fonction appelée lorsque l'utilisateur clique sur un item de la liste des valeurs possibles
	     * @param event
	     */
	    protected onListWidgetSelected(event: __React.MouseEvent<HTMLElement>, choice: any): void;
	    /**
	     * Retourne true si le texte indiqué correspond aux critères de taille minimale
	     * @param text
	     * @returns {boolean}
	     * @protected
	     */
	    protected isValidText(text: string): boolean;
	    /**
	     * Navigue au sein de la liste de choix
	     * @param delta {number} indique de combien d'éléments on doit se déplacer par rapport à l'élément actuellement sélectionné
	     * @protected
	     */
	    protected navigateInChoices(delta: number): void;
	    /**
	     * Selectionne l'élement actuellement en surbrillance dans la liste de choix
	     * @return boolean si une sélection a effectivement eu lieu
	     * @protected
	     */
	    protected selectCurrentIndex(): boolean;
	    /**
	     * Demande l'affichage du composant de choix
	     * @public
	     */
	    showChoices(): void;
	    /**
	     * Demande le masquage du composant de choix
	     * @public
	     */
	    hideChoices(): void;
	    /**
	     * @return {boolean} true si le composant de liste doit s'afficher
	     * @protected
	     */
	    protected shouldShowChoices(): boolean;
	    /**
	     * @return {string} le nom du champ caché contenant la valeur
	     */
	    getValueFieldName(): string;
	    /**
	     * @return {string} le nom du champ de saisie libre
	     */
	    getFreeTypingFieldName(): string;
	    /**
	     * Surcharge le rendu des erreurs de validation : le nom du champ à mettre en évidence est le champ de saisie libre
	     * @override
	     */
	    renderErrors(): __React.ReactElement<FieldErrorProps>;
	    /**
	     * On enregistre également le champ contenant la valeur dans la classe parente DomAdapter, ce qui fait les liens
	     entre le formulaire, le champ HTML et le composant React.
	     * @param hiddenInput
	     */
	    protected registerHiddenInput(hiddenInput: HTMLInputElement): void;
	    /**
	     *  Conserve la valeur du champs saisie
	     * @param textInput
	     */
	    protected registerTextInput(textInput: HTMLInputElement): void;
	    /** on mets le focus sur l'input */
	    setFocus(): this;
	    /**
	     * teste si le composant a des erreurs
	     * @override
	     */
	    hasErrors(): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/auto-complete-multi-field" {
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
	import * as React from "react";
	import { HornetBasicFormFieldProps, HornetClickableProps, HornetWrittableProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { AutoCompleteField, AutoCompleteFieldProps }  from "hornet-js-react-components/src/widget/form/auto-complete-field";
	import { HornetComponentChoicesProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { AutoCompleteState }  from "hornet-js-react-components/src/widget/form/auto-complete-state";
	import FormEvent = __React.FormEvent;
	/**
	 * Propriétés du composant d'auto-complétion
	 */
	export interface AutoCompleteMultiFieldProps extends AbstractFieldProps, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, HornetComponentDatasourceProps, HornetComponentChoicesProps {
	    name: string;
	    /** Longueur minimale de texte libre permettant la proposition des choix */
	    minValueLength?: number;
	    /** Nombre maximum de choix à proposer */
	    maxElements?: number;
	    /** Délai minimal en millisecondes entre deux déclenchements de l'action de chargement de choix */
	    delay?: number;
	    /** Hauteur maximum de la popin de choix à proposer (en pixels) */
	    maxHeight?: number;
	    /** Lance un init sur le datasource à l'initialisation du composant */
	    init?: boolean;
	    autoCompleteState?: AutoCompleteState;
	    writable?: boolean;
	    itemSelectedLabel?: string;
	    /** force de nettoyage de la zone de saisie sur la sortie du champ **/
	    cleanFilterOnBlur?: boolean;
	    /** surcharge du label lors qu'on a pas de resultat **/
	    noResultLabel?: String;
	}
	/**
	 * Composant d'auto-complétion  a choix multiple.
	 */
	export class AutoCompleteMultiField<P extends AutoCompleteMultiFieldProps, S> extends AutoCompleteField<AutoCompleteMultiFieldProps> {
	    readonly props: Readonly<AutoCompleteMultiFieldProps>;
	    protected autocompleteContainer: HTMLDivElement;
	    constructor(props: P, context?: any);
	    /**
	     * @inheritDoc
	     * @param {AutoCompleteFieldProps} nextProps
	     * @param nextState
	     * @param nextContext
	     */
	    componentWillUpdate(nextProps: AutoCompleteFieldProps, nextState: any, nextContext: any): void;
	    /**
	     * @inheritDoc AutoCompleteField
	     */
	    componentDidMount(): void;
	    /**
	     * ferme la liste de choix de l'autocomplete lors d'un clic en dehors
	     */
	    eventClickListener(): void;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * navigation dans les choix
	     * @param {number} delta
	     */
	    protected navigateInChoices(delta: number): void;
	    /**
	     * Fonction appelée lors d'un appui de touche sur le champ de saisie libre
	     * @param e évènement
	     * @protected
	     */
	    protected handleOnKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
	    /**
	     * Fonction déclenchée sur une modification du champ de saisie libre
	     * @param event
	     */
	    protected handleChangeTextInput(event: FormEvent<HTMLElement>): void;
	    /**
	     * créer la liste des values
	     * @param value
	     */
	    computeCurrentValues(value: any): this;
	    /**
	     * set la value
	     * @param value
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * @inheritDoc
	     * Fonction appelée lorsque l'utilisateur a choisi un élément de la liste de choix pour nettoyer le currentText du selector
	     * Ici on diffère du normal, car cette gestion est propre à ce dernier.
	     */
	    changeSelectedChoice(choice?: any): void;
	    /**
	     * ajout d'un listener sur les clic
	     */
	    showChoices(): void;
	    /**
	     * suppression du listener sur les clic
	     */
	    hideChoices(): void;
	    /**
	     * Gestion de l'évènement onFocus pour le champ de saisie libre.
	     * @param event
	     */
	    protected handleOnFocus(event: any): void;
	    /**
	     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
	     * @param event
	     */
	    protected handleOnBlur(event: React.FocusEvent<HTMLElement>): void;
	    /**
	     * Fonction appelée lorsque l'utilisateur clique sur un item de la liste des valeurs possibles
	     * @param event
	     */
	    protected getTotalSelectedItems(): number;
	    /**
	     * Fonction appelée lorsque l'utilisateur clique sur un item de la liste des valeurs possibles
	     * @param event
	     */
	    protected onListWidgetSelected(event: __React.MouseEvent<HTMLElement>, choice: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/auto-complete-selector" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { AutoCompleteState }  from "hornet-js-react-components/src/widget/form/auto-complete-state";
	import MouseEventHandler = __React.MouseEventHandler;
	import * as React from "react";
	/**
	 * Propriétés de la liste de choix pour le composant d'auto-complétion
	 */
	export interface AutoCompleteSelectorProps extends HornetComponentProps {
	    choices?: Array<any>;
	    onOptionSelected: (event: __React.MouseEvent<HTMLElement>, choice: any) => void;
	    currentTypedText?: string;
	    currentIndex?: number;
	    selectorId: string;
	    showComponent?: boolean;
	    maxHeight?: number;
	    isMultiple?: boolean;
	    choicesSelected?: string | string[];
	    autoCompleteState: AutoCompleteState;
	    readOnly?: boolean;
	    disabled?: boolean;
	    noResultLabel?: String;
	}
	/**
	 * Liste de choix de l'auto completion
	 */
	export class AutoCompleteSelector extends HornetComponent<AutoCompleteSelectorProps, any> {
	    static defaultProps: {
	        onOptionSelected(event: React.MouseEvent<HTMLElement>, choice: any): void;
	        currentTypedText: string;
	        showComponent: boolean;
	        choices: any[];
	        readOnly: boolean;
	        disabled: boolean;
	    };
	    protected liElts: HTMLElement[];
	    protected liReact: JSX.Element[];
	    protected choicesSelected: string | string[];
	    protected noResultLabelDefault: string;
	    constructor(props: any, context?: any);
	    shouldComponentUpdate(nextProps: AutoCompleteSelectorProps, nextState: any, nextContext: any): boolean;
	    setChoices(value: Array<any>, callback?: () => any): this;
	    setOnOptionSelected(value: MouseEventHandler<HTMLElement>, callback?: () => any): this;
	    setCurrentTypedText(currentTypedText: string, callback?: () => any): this;
	    setCurrentIndex(value: number, callback?: () => any): this;
	    setSelectorId(value: string, callback?: () => any): this;
	    setShowComponent(value: string, callback?: () => any): this;
	    /**
	     * Fonction appelée lors du click sur un élément de la liste
	     **/
	    protected onListClick(event: __React.MouseEvent<HTMLElement>, choice: any): any;
	    protected onListClickMulti(event: any, index: number, choice: any): any;
	    /**
	     * Fonction appelée pour scroller de un item vers le bas
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    scrollDown(element: HTMLElement, checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée pour scroller de un item vers le haut
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    scrollUp(element: HTMLElement, checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée pour scroller au début de la liste
	     * @param {HTMLElement} element la liste déroulante
	     **/
	    scrollToBegin(element: HTMLElement): void;
	    /**
	     * Fonction appelée pour scroller à la toute fin de la liste
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    scrollToEnd(element: HTMLElement, checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée tester si la position de l'élément est en amont dans la liste
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    isBefore(element: HTMLElement, checkedElement: HTMLElement): boolean;
	    /**
	     * Fonction appelée tester si la position de l'élément est en aval dans la liste
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    isAfter(element: HTMLElement, checkedElement: HTMLElement): boolean;
	    /**
	     * Fonction appelée la taille  de l'écart
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    hasBigGap(element: HTMLElement, checkedElement: HTMLElement): boolean;
	    /**
	     * Fonction appelée pour position la liste directement sur l'élément
	     * @param {HTMLElement} element la liste déroulante
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    goToElement(element: HTMLElement, checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée pour scroller vers un élément
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    scrollToElement(checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée pour déselectionner
	     **/
	    protected cleanActived(): void;
	    /**
	     * Fonction appelée pour activer un item
	     * @param {HTMLElement} checkedElement l'élément sélectionné
	     **/
	    protected setActive(checkedElement: HTMLElement): void;
	    /**
	     * Fonction appelée pour scroller vers un élément par son id
	     * @param {string} id l'élément sélectionné
	     **/
	    scrollToElementById(id: string): void;
	    /**
	     * Lorsque l'element selectionné change, on scroll vers celui-ci
	     */
	    componentDidUpdate(): void;
	    /**
	     * Retourne le rendu de la liste de choix
	     **/
	    protected renderOptionList(): JSX.Element[];
	    /**
	     * indique un clic sur une checkbox
	     **/
	    multiClick(event: any): void;
	    /**
	     * Retourne le rendu de la liste de choix
	     **/
	    protected renderOptionMultipleList(): JSX.Element[];
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Fonction appelée pour scroller vers un élément
	     * @param {number} oldChoiceFocused l'ancien indice de l'élément sélectionné
	     * @param {number} newChoiceFocused l'indice de l'élément sélectionné
	     * @param {string} value l'élément sélectionné
	     * @param {number} index l'élément sélectionné
	     **/
	    handleFocus(oldChoiceFocused: any, newChoiceFocused: any, value: string, index: number): void;
	    /**
	     * Fonction appelée pour focus un item
	     * @param {HTMLElement} elmt l'élément sélectionné à focus
	     **/
	    setFocusElement(elmt: HTMLElement): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/auto-complete-state" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as events from "events";
	export class AutoCompleteState extends events.EventEmitter {
	    static FOCUS_CHANGE_EVENT: string;
	    choiceFocused: number;
	    /**
	     * mets à jour l'élément focus
	     * @param choiceFocused
	     * @param {string} value
	     */
	    setFocusOn(choiceFocused: any, value: string, index: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/buttons-area" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { ButtonProps }  from "hornet-js-react-components/src/widget/button/button";
	/**
	 * Propriétés de la zone de boutons du formulaire hornet.
	 */
	export interface ButtonsAreaProps extends HornetComponentProps {
	    width?: number;
	    className?: string;
	}
	/**
	 * Composant représentant les buttons d'action du formulaire
	 */
	export class ButtonsArea extends HornetComponent<ButtonsAreaProps, any> {
	    static defaultProps: any;
	    constructor(props: any, context?: any);
	    /**
	     * Génère la configuration des boutons par défaut : "Valider" de type "submit" et "Annuler" de type "reset".
	     * @returns {*[]}
	     */
	    getDefaultButtons(): ButtonProps[];
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/calendar-field" {
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
	import * as React from "react";
	import { InputField, InputFieldProps }  from "hornet-js-react-components/src/widget/form/input-field";
	/**
	 * Propriétés du composant calendrier.
	 */
	export interface CalendarFieldProps extends InputFieldProps {
	    /** Titre du champ, utilisé comme texte alternatif à l'image du bouton d'ouverture de calendrier.
	     * Si non spécifié, le libellé calendar.agendaTitle est utilisé. */
	    title?: string;
	    dateFormats?: string[];
	    defaultYear?: number;
	    isDatePicker?: boolean;
	    placeHolder?: string;
	    /** validation lors du submot formulaire */
	    valideOnForm?: boolean;
	    onValueChange?: (value: string) => void;
	    /** définit si le champs peut être réinitialiser */
	    resettable?: boolean;
	}
	/**
	 * Etat du composant calendrier
	 */
	export interface CalendarFieldState {
	    isVisible?: boolean;
	    strValue?: string;
	    calendarLocale?: any;
	    inputSize?: number;
	    onValueChange?: (value: string) => void;
	}
	/**
	 * Composant Calendrier
	 */
	export class CalendarField<P extends CalendarFieldProps, S extends CalendarFieldState> extends InputField<CalendarFieldProps, CalendarFieldState> {
	    protected hasKeyPress: boolean;
	    readonly props: Readonly<CalendarFieldProps>;
	    static defaultProps: any;
	    constructor(props?: P, context?: any);
	    componentDidMount(): void;
	    /**
	     * Récupère le format d'affichage des dates
	     */
	    protected getFormat(): any;
	    /**
	     * Génère le rendu spécifique du champ : un datePicker
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * @override
	     */
	    setCurrentValue(value: any): this;
	    /**time
	     * @override
	     */
	    resetValue(): void;
	    /**
	     * Méthode délenchée lors d'une intéraction avec le champ input du composant Calendar
	     * @param e
	     */
	    protected handleInputChange(e: React.SyntheticEvent<HTMLElement>): void;
	    /**
	     * Méthode délenchée lorsque l'utilisateur quitte l'input du composant Calendar
	     * @param e
	     */
	    protected handleInputLeave(e: React.SyntheticEvent<HTMLElement>): void;
	    /**
	     * Controle des touches claviers
	     * @param e
	     */
	    protected handleInputKeyPress(e: React.KeyboardEvent<HTMLElement>): void;
	    /**
	     * @param time temps en millisecondes depuis Epoch
	     * @param calendarLocale propriétés localisées du calendrier
	     */
	    formatCalendarDate(time: any, calendarLocale: any): string;
	    /**
	     * Met à jour la valeur et déclenche la fermeture de la popup de calendrier
	     * @param value {Moment} instance de Moment
	     */
	    setValueAndCloseCalendar(value: any): void;
	    /**
	     * Permet de mettre à jour la valeur du datePicker
	     * @param value
	     * @returns {this}
	     */
	    setValue(value: any): this;
	    /**
	     * Permet d'afficher la modal contenant le calendier
	     * @returns {Calendar}
	     */
	    showCalendar(): this;
	    /**
	     * Permet de masquer la modal contenant le calendier
	     * @returns {Calendar}
	     */
	    hideCalendar(): this;
	    getCurrentValue(removeEmptyStrings?: boolean): Date;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/chars-counter" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { Alert }  from "hornet-js-react-components/src/widget/dialog/alert";
	export interface HornetCharsCounterAttributes {
	    maxChar?: number;
	    showAlert?: boolean;
	    alertMessage?: string;
	    alertTitle?: string;
	    charLabel?: string;
	}
	/**
	 * Interface des propriétés du composant CharsCounter
	 */
	export interface CharsCounterProps extends HornetComponentProps, HornetCharsCounterAttributes {
	    elementId: string;
	    text: string;
	    tooManyCharsClassName?: string;
	    className?: string;
	}
	/**
	 * Composant de compteur de caractères
	 */
	export class CharsCounter extends HornetComponent<CharsCounterProps, any> {
	    protected errorShowed: boolean;
	    protected alert: Alert;
	    protected content: HTMLDivElement;
	    private currentText;
	    readonly props: Readonly<CharsCounterProps>;
	    constructor(props: CharsCounterProps);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Permet de déclencher l'ouverture de la modal d'alert
	     * @param text{string} : contenu du composant associé
	     */
	    private handleAlert;
	    /**
	     * Méthode déclenchée sur détection du changement de texte du composant associé
	     * @param text
	     */
	    handleTextChange(text: string): void;
	    /**
	    * Méthode déclenchant la fermeture de l'alerte
	    */
	    protected closeAlert(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/checkbox-field" {
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
	import { AbstractField, HornetBasicFormFieldProps, HornetClickableProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	export interface CheckBoxFieldProps extends AbstractFieldProps, HornetClickableProps, HornetBasicFormFieldProps {
	    currentChecked?: boolean;
	    switch?: boolean;
	    labelOnOff?: any;
	}
	/**
	 * Champ de formulaire Hornet de type Checkbox
	 */
	export class CheckBoxField extends AbstractField<CheckBoxFieldProps, any> {
	    readonly props: Readonly<CheckBoxFieldProps>;
	    state: any;
	    static defaultProps: any;
	    constructor(props?: CheckBoxFieldProps, context?: any);
	    /**
	 * Méthode permettant de calculer les classNames du label
	 */
	    protected calculateLabelClassName(): ClassDictionary;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     * @override
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * Génère le rendu du champ en mode switch
	     * @returns {any}
	     */
	    renderSwitch(htmlProps: any): JSX.Element;
	    /**
	     * Génère le rendu du champ en mode checkbox
	     * @returns {any}
	     */
	    renderCheckbox(htmlProps: any): JSX.Element;
	    /**
	     * Prise en compte de la navigation clavier pour les touches entrée et espace
	     * @param e
	     */
	    protected handleKeyDown(e: any): void;
	    /**
	     * Gestion du clic sur le switch pour gérer l'ajout et suppression de l'attribut checked sur le switch
	     * @param e
	     */
	    protected handleClick(e: any): void;
	    /**
	     * Indique si le checkbox est inactif (readOnly et/ou disabled) ou pas
	     */
	    private isNotInactive;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/checkbox" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { ReactFormDOMAttributes, HTMLStandardConfigAttributes, ReactBasicMouseDOMAttributes }  from "hornet-js-react-components/src/widget/form/abstract-field";
	export interface CheckboxProps {
	    label?: string;
	    title?: string;
	    id?: string;
	    checked?: boolean;
	    tabIndex?: number;
	}
	/**
	 * Champ de formulaire Hornet de type Checkbox
	 */
	export class CheckBox extends HornetComponent<CheckboxProps & ReactFormDOMAttributes & HTMLStandardConfigAttributes & ReactBasicMouseDOMAttributes, any> {
	    protected inputRef: any;
	    protected checked: any;
	    protected spanRef: any;
	    constructor(props?: CheckboxProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillReceiveProps(nextProps: any, nextState: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): React.ReactElement<CheckboxProps>;
	    /**
	     * fonction appelée au changement de valeur de la checkbox
	     * @param e
	     */
	    onChange(e: any): void;
	    /**
	     * mets le focus sur la checkbox
	     */
	    setFocus(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/dom-adapter" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Adaptateur DOM pour un champ de formulaire
	 */
	export class DomAdapter<P, S> extends HornetComponent<P, S> {
	    /** Nom du champ */
	    protected name: any;
	    /** Type HTML */
	    protected type: any;
	    /** Référence vers l'élément react */
	    protected htmlElement: any;
	    protected multipleElement: Array<any>;
	    constructor(props?: P, context?: any);
	    protected getElementType(elt: any): any;
	    getHornetForm(): any;
	    registerHtmlElement(elt: any): void;
	    addHtmlElement(elt: any): void;
	    /**
	     * Renvoie la valeur de la propriété HTML indiquée
	     * @param name nom de la propriété
	     * @returns {string} la valeur ou null si la propriété n'est pas définie
	     */
	    getAttribute(name: any): string;
	    /**
	     * Initialise la propriété HTML avec la valeur indiquée
	     * @param name nom de la propriété
	     * @param value valeur
	     * @returns {DomAdapter} cette instance
	     */
	    setAttribute(name: string, value: string): this;
	    /**
	     * Pour une case à cocher, initialise la propriété checked
	     * @param value booléen
	     * @returns {DomAdapter} cette instance
	     */
	    setCurrentChecked(value: boolean): this;
	    /**
	     * Initialise la valeur courante du champ de formulaire
	     * @param value valeur à utiliser
	     * @returns {DomAdapter} cette instance
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * Renvoie la valeur courante du champ de formulaire
	     * @param removeEmptyStrings {boolean} non utilisé ici, à conserver pour remonter valeur champs non valorisé d'un form
	     * @returns {null}
	     */
	    getCurrentValue(removeEmptyStrings?: boolean): any;
	    /**
	     * Bascule le champ en readOnly
	     * @param value valeur à utiliser
	     * @returns {DomAdapter} cette instance
	     */
	    setReadOnly(value: any): this;
	    /**
	     * Bascule le champ en readOnly
	     * @param value valeur à utiliser
	     * @returns {DomAdapter} cette instance
	     */
	    setDisabled(value: any): this;
	    /**
	     * retourne le type
	     */
	    getType(): any;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/event" {
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	export const VALUE_CHANGED_EVENT: HornetEvent<any>;
	
}

declare module "hornet-js-react-components/src/widget/form/field-error" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { INotificationType } from "hornet-js-core/src/notification/notification-manager";
	export interface FieldErrorProps extends HornetComponentProps {
	    /** Tableau de messages d'erreur */
	    errors?: INotificationType[];
	    /** Nom du champ concerné par les erreurs */
	    fieldName: string;
	    /** boolean permettant de specifier si on affiche le message d'erreur ou pas */
	    hideError?: boolean;
	}
	/**
	 * Génère le rendu d'un ou plusieurs message d'erreur de validation au-dessus d'un champ de formulaire
	 */
	export class FieldError extends HornetComponent<FieldErrorProps, any> {
	    static defaultProps: any;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/fieldset" {
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
	import { AbstractForm, AbstractFormProps }  from "hornet-js-react-components/src/widget/form/abstract-form";
	import { DomAdapter }  from "hornet-js-react-components/src/widget/form/dom-adapter";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés du groupe de champs
	 */
	export interface FieldSetProps extends AbstractFormProps, HornetComponentProps {
	    /** Légende du groupe de champs */
	    legend: string;
	    /** Noms de classes CSS à utiliser */
	    className?: string;
	    /** Nom FieldSet **/
	    name?: string;
	}
	/**
	 * Groupe de champs de formulaire avec légende
	 */
	export class FieldSet extends AbstractForm<FieldSetProps, any> {
	    static defaultProps: {
	        className: string;
	    };
	    /**
	     * Construit une instance de FieldSet
	     * @param props propriétés
	     * @param context contexte
	     */
	    constructor(props?: FieldSetProps, context?: any);
	    componentWillUnmount(): void;
	    setLegend(legend: string, callback?: () => any): this;
	    setClassName(className: string, callback?: () => any): this;
	    /** @override */
	    protected extractFields(): {
	        [key: string]: DomAdapter<any, any>;
	    };
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/form-utils" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { DomAdapter }  from "hornet-js-react-components/src/widget/form/dom-adapter";
	import { Notifications } from "hornet-js-core/src/notification/notification-manager";
	import { UploadedFile } from "hornet-js-core/src/data/file";
	import ErrorObject = ajv.ErrorObject;
	export abstract class FormUtils {
	    /**
	     * Extrait le nom du champ depuis l'erreur de validation indiquée
	     * Le nom du champ peut être un "path" tel que "ville.pays.id".
	     * @param error une erreur de validation ajv
	     * @return le nom du champ, ou une chaîne vide si non renseigné
	     */
	    static extractFieldName(error: ErrorObject): string;
	    /**
	     * Génère le message d'erreur correspondant au mot-clé et au champ indiqués
	     * @param keyword mot clé de validation json-schema
	     * @param fieldName nom du champ (peut être un "path" tel que "ville.pays.id")
	     * @param fieldsMessages messages spécifiques aux champs du formulaire
	     * @param genericValidationMessages messages d'erreur génériques
	     * @param complement
	     * @return le message ou undefined lorsqu'aucun n'est défini pour le mot-clé indiqué
	     */
	    static extractMessage(keyword: string, fieldName: string, fieldsMessages?: any, genericValidationMessages?: any, complement?: any, field?: DomAdapter<any, any>): string;
	    /**
	     * Traite les erreurs de validation de formulaire : renvoie des notifications d'erreur.
	     * @param errors liste d'erreurs éventuellement vide
	     * @param fields Liste des champs du formulaire
	     * @param fieldsMessages messages spécifiques aux champs du formulaire
	     * @param genericValidationMessages messages d'erreur génériques
	     * @return {Notifications} les notifications correspondant aux erreurs de validation
	     */
	    static getErrors(errors: Array<ErrorObject>, fields: {
	        [key: string]: DomAdapter<any, any>;
	    }, fieldsMessages?: any, genericValidationMessages?: any): Notifications;
	    /**
	     * Récupère les informations du fichier éventuellement déjà sélectionné associé à un champ de type "file"
	     * @param inputItem champ de formulaire de type envoi de fichier
	     * @returns {UploadedFile} une instance de UploadedFile ou undefined
	     */
	    static extractFileData(inputItem: HTMLInputElement): UploadedFile;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/form" {
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
	import * as React from "react";
	import { AbstractForm, AbstractFormProps }  from "hornet-js-react-components/src/widget/form/abstract-form";
	import { DomAdapter }  from "hornet-js-react-components/src/widget/form/dom-adapter";
	import { Notifications } from "hornet-js-core/src/notification/notification-manager";
	import { IValidationResult, ICustomValidation } from "hornet-js-core/src/validation/data-validator";
	import ErrorObject = ajv.ErrorObject;
	/**
	 * Propriétés du formulaire hornet.
	 */
	export interface FormProps extends AbstractFormProps {
	    /** Identifiant du formulaire */
	    id: string;
	    /** Nom du formulaire */
	    name?: string;
	    /** Fonction déclenchée lors de la soumission du formulaire, avant la validation */
	    onBeforeSubmit?: (data: any) => void;
	    /** Fonction déclenchée lors de la soumission du formulaire, lorsque celui-ci est valide */
	    onSubmit?: (data: any) => void;
	    /** Fonction déclenchée lors de la modification d'un champ du formulaire */
	    onFormChange?: __React.FormEventHandler<HTMLElement>;
	    /** Lorsque mis à true, le message d'information concernant les champs obligatoires est masqué.
	     * Ignoré lorsque markRequired est à false car le message n'a pas lieu d'être affiché. */
	    isMandatoryFieldsHidden?: boolean;
	    /** Sous-titre éventuel */
	    subTitle?: string;
	    /** Texte descriptif éventuel */
	    text?: string;
	    /** langue du texte descriptif */
	    textLang?: string;
	    /** Nom de la classe CSS à affecter au formulaire. */
	    className?: string;
	    /** Lorsqu'égal à false, les libellés des champs obligatoires ne sont pas marqués avec un astérisque */
	    markRequired?: boolean;
	    /** Path permettant de surcharger les pictogrammes/images **/
	    imgFilePath?: string;
	    /** Schema JSON de validation */
	    schema?: any;
	    /** Options de validation ajv (cf. http://epoberezkin.github.io/ajv/#options) */
	    validationOptions?: ajv.Options;
	    /** Messages spécifiques à ce formulaire : utilisés pour la génération des messages d'erreur de validation */
	    formMessages?: any;
	    /**
	     * Valideurs customisés : permettent d'implémenter et de chaîner des règles de validation difficiles à mettre
	     * en oeuvre simplement avec un schéma json-schema. Ils sont appliqués après la validation basée sur le schéma
	     * de validation, donc les données du formulaire ont déjà éventuellement bénéficié de la coercition de types. */
	    customValidators?: ICustomValidation[];
	    /** Données initiales du formulaire */
	    defaultValues?: any;
	    /** Identifiant du groupe de notifications auquel seront rattachées les notifications d'erreurs de validation
	     * de ce formulaire */
	    notifId?: string;
	    /** Lorsqu'égal à true, les boutons de validation ne sont pas affichés */
	    hideButtons?: boolean;
	    omitNull?: boolean;
	}
	/**
	 * Composant permettant de rendre un formulaire Hornet de manière standardisée
	 */
	export class Form extends AbstractForm<FormProps, any> {
	    static idx: number;
	    protected debouncedValidateAndSubmit: any;
	    /** Valeur de propriétés par défaut */
	    static defaultProps: FormProps;
	    constructor(props?: FormProps, context?: any);
	    setName(value: string, callback?: () => any): this;
	    setOnSubmit(handler: (data: any) => void, callback?: () => any): this;
	    setOnFormChange(handler: __React.FormEventHandler<HTMLElement>, callback?: () => any): this;
	    setIsMandatoryFieldsHidden(value: boolean, callback?: () => any): this;
	    setSubTitle(value: string, callback?: () => any): this;
	    setText(value: string, callback?: () => any): this;
	    setClassName(value: string, callback?: () => any): this;
	    setMarkRequired(value: boolean, callback?: () => any): this;
	    setImgFilePath(value: string, callback?: () => any): this;
	    setSchema(value: any, callback?: () => any): this;
	    setValidationOptions(value: ajv.Options, callback?: () => any): this;
	    setFormMessages(value: any, callback?: () => any): this;
	    setCustomValidators(value: ICustomValidation[], callback?: () => any): this;
	    setNotifId(value: string, callback?: () => any): this;
	    componentWillUnmount(): void;
	    componentDidMount(): void;
	    /**
	     * Met à jour la propriété markRequired sur chacun des champs héritant de AbstractField contenus dans le formulaire
	     * @param isMarkRequired valeur à assigner à la propriété 'markRequired'
	     * @return ce formulaire
	     */
	    protected updateMarkRequiredFields(isMarkRequired: boolean): this;
	    /**
	     * Met à jour la propriété imgFilePath sur chacun des champs héritant de AbstractField contenus dans le formulaire
	     * @param imgFilePath valeur à assigner à la propriété 'imgFilePath'
	     * @return ce formulaire
	     */
	    protected updateImagFilePathFields(imgFilePath: string): this;
	    /**
	     * Met à jour les valeurs courantes des champs du formulaire
	     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
	     */
	    updateFields(data: any): void;
	    /**
	     * Traitement spécifique des notifications concernant les champs d'autocomplétion
	     * @param fields champs du formulaire
	     * @param notifs notifications d'erreurs de validation
	     */
	    protected processAutocompleteErrors(fields: {
	        [key: string]: DomAdapter<any, any>;
	    }, notifs: Notifications): void;
	    /**
	     * Déclenche les notifications correspondant aux éventuelles erreurs de validation
	     * @param errors erreurs de validation de formulaire, éventuellement vides
	     */
	    protected notifyErrors(errors: Array<ErrorObject>): void;
	    /**
	     * Transforme les valeurs des champs déclarés avec le format "date-time" dans le schéma de validation :
	     * effectue la conversion depuis la locale courante, vers le format ISO 8601. Ceci permet une validation isomorphique
	     * côté client comme serveur en utilisant le même schéma, et la conversion automatique en objet Date côté backend REST
	     * reste possible.
	     * @param schema schéma de validation JSON-Schema
	     * @param data données de formualaire
	     */
	    protected transformDatesToISO(schema: any, data: any): void;
	    /**
	     * Déclenche la validation du formulaire, notifie les erreurs éventuelles et exécute la fonction
	     * onSubmit présente dans les propriétés s'il n'y a pas d'erreurs
	     *
	     */
	    validateAndSubmit(): void;
	    /**
	     * Retourne le résultat de la validation et ses éventuelles erreurs
	     * @param schema : schéma de validation, par défaut celui du formulaire
	     * @param data: data extraites du formulaire à valider
	     */
	    getValidationResult(schema?: any, dataTovalidate?: any): IValidationResult;
	    /**
	     * Déclenche une validation du formulaire basée sur un schéma précis ou celui défini pour le formulaire
	     * @param schema : schéma de validation, par défaut celui du formulaire
	     */
	    validate(notifyErrors: boolean, schema?: any): boolean;
	    /**
	     * Supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
	     */
	    cleanFormErrors(): void;
	    /**
	     * Met à jour les valeurs courantes des champs du formulaire et
	     * supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
	     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
	     */
	    updateFieldsAndClean(data: any): void;
	    /**
	     * Méthode permettant d'alimenter le bloc Notifications d'erreurs puis de déléguer l'évent au composant parent
	     * @param e
	     *
	     */
	    protected _submitHornetForm(e: React.SyntheticEvent<HTMLElement>): void;
	    /** @override */
	    protected propagateParentState(): void;
	    /** @override */
	    protected extractFields(): {
	        [key: string]: DomAdapter<any, any>;
	    };
	    /**
	     * Méthode permettant de déterminer si le formulaire dispose d'un champ de type UploadFileField
	     * Dans ce cas, on ajoute la propriété ["encType"] = "multipart/form-data" au formulaire
	     * @param items
	     * @returns {boolean}
	     */
	    protected isMultiPartForm(items: Array<React.ReactChild>): boolean;
	    /**
	     * Méthode permettant de déterminer s'il y a au moins un champ requis.
	     * @param items
	     * @returns {boolean}
	     */
	    protected isOneRequired(items: Array<React.ReactChild>): boolean;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * retourne un tableau de bouton pour la validation du formulaire
	     * @param children
	     * @returns {Array<any>}
	     */
	    protected getButtonsArea(children: any): Array<any>;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/html-attributes" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { HornetProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	/**
	 * Object contenant toutes les propriétés standards HTML définies dans HornetHTMLAttributes.
	 * Sert à vérifier si une propriété est une propriété standard HTML.
	 */
	export const HTML_ATTRIBUTES: HornetProps;
	
}

declare module "hornet-js-react-components/src/widget/form/html-const-attributes" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { HTMLStandardConfigAttributes, HTMLStandardFormAttributes, HTMLStandardGlobalAttributes, HTMLStandardMediaAttributes, HTMLStandardMetaAttributes, HTMLStandardPresentationAttributes, HTMLRDFaAttributes, HTMLNonStandardAttributes, ReactClipboardDOMAttributes, ReactComposeDOMAttributes, ReactFocusDOMAttributes, ReactFormDOMAttributes, ReactImageDOMAttributes, ReactKeyboardDOMAttributes, ReactMediaDOMAttributes, ReactBasicMouseDOMAttributes, ReactDragDOMAttributes, ReactSelectDOMAttributes, ReactTouchDOMAttributes, ReactScrollDOMAttributes, ReactWheelDOMAttributes, ReactAnimationDOMAttributes, ReactTransitionDOMAttributes, ReactBasicDOMAttributes }  from "hornet-js-react-components/src/widget/form/abstract-field";
	export const HTML_STANDARD_CONFIG_ATTRIBUTES: HTMLStandardConfigAttributes;
	export const HTML_STANDARD_FORM_ATTRIBUTES: HTMLStandardFormAttributes;
	export const HTML_STANDARD_GLOBAL_ATTRIBUTES: HTMLStandardGlobalAttributes;
	export const HTML_STANDARD_MEDIA_ATTRIBUTES: HTMLStandardMediaAttributes;
	export const HTML_STANDARD_META_ATTRIBUTES: HTMLStandardMetaAttributes;
	export const HTML_STANDARD_PRESENTATION_ATTRIBUTES: HTMLStandardPresentationAttributes;
	export const HTML_RDFA_ATTRIBUTES: HTMLRDFaAttributes;
	export const HTML_NON_STANDARD_ATTRIBUTES: HTMLNonStandardAttributes;
	export const REACT_CLIPBOARD_DOM_ATTRIBUTES: ReactClipboardDOMAttributes;
	export const REACT_COMPOSE_DOM_ATTRIBUTES: ReactComposeDOMAttributes;
	export const REACT_FOCUS_DOM_ATTRIBUTES: ReactFocusDOMAttributes;
	export const REACT_FORM_DOM_ATTRIBUTES: ReactFormDOMAttributes;
	export const REACT_IMAGE_DOM_ATTRIBUTES: ReactImageDOMAttributes;
	export const REACT_KEYBOARD_DOM_ATTRIBUTES: ReactKeyboardDOMAttributes;
	export const REACT_MEDIA_DOM_ATTRIBUTES: ReactMediaDOMAttributes;
	export const REACT_BASIC_MOUSE_DOM_ATTRIBUTES: ReactBasicMouseDOMAttributes;
	export const REACT_DRAG_DOM_ATTRIBUTES: ReactDragDOMAttributes;
	export const REACT_SELECT_DOM_ATTRIBUTES: ReactSelectDOMAttributes;
	export const REACT_TOUCH_DOM_ATTRIBUTES: ReactTouchDOMAttributes;
	export const REACT_SCROLL_DOM_ATTRIBUTES: ReactScrollDOMAttributes;
	export const REACT_WHEEL_DOM_ATTRIBUTES: ReactWheelDOMAttributes;
	export const REACT_ANIMATION_DOM_ATTRIBUTES: ReactAnimationDOMAttributes;
	export const REACT_TRANSITION_DOM_ATTRIBUTES: ReactTransitionDOMAttributes;
	export const REACT_BASIC_DOM_ATTRIBUTES: ReactBasicDOMAttributes;
	export class HtmlAttributes {
	    static HTML_STANDARD_CONFIG_ATTRIBUTES: HTMLStandardConfigAttributes;
	    static HTML_STANDARD_FORM_ATTRIBUTES: HTMLStandardFormAttributes;
	    static HTML_STANDARD_GLOBAL_ATTRIBUTES: HTMLStandardGlobalAttributes;
	    static HTML_STANDARD_MEDIA_ATTRIBUTES: HTMLStandardMediaAttributes;
	    static HTML_STANDARD_META_ATTRIBUTES: HTMLStandardMetaAttributes;
	    static HTML_STANDARD_PRESENTATION_ATTRIBUTES: HTMLStandardPresentationAttributes;
	    static HTML_RDFA_ATTRIBUTES: HTMLRDFaAttributes;
	    static HTML_NON_STANDARD_ATTRIBUTES: HTMLNonStandardAttributes;
	    static REACT_CLIPBOARD_DOM_ATTRIBUTES: ReactClipboardDOMAttributes;
	    static REACT_COMPOSE_DOM_ATTRIBUTES: ReactComposeDOMAttributes;
	    static REACT_FOCUS_DOM_ATTRIBUTES: ReactFocusDOMAttributes;
	    static REACT_FORM_DOM_ATTRIBUTES: ReactFormDOMAttributes;
	    static REACT_IMAGE_DOM_ATTRIBUTES: ReactImageDOMAttributes;
	    static REACT_KEYBOARD_DOM_ATTRIBUTES: ReactKeyboardDOMAttributes;
	    static REACT_MEDIA_DOM_ATTRIBUTES: ReactMediaDOMAttributes;
	    static REACT_BASIC_MOUSE_DOM_ATTRIBUTES: ReactBasicMouseDOMAttributes;
	    static REACT_DRAG_DOM_ATTRIBUTES: ReactDragDOMAttributes;
	    static REACT_SELECT_DOM_ATTRIBUTES: ReactSelectDOMAttributes;
	    static REACT_TOUCH_DOM_ATTRIBUTES: ReactTouchDOMAttributes;
	    static REACT_SCROLL_DOM_ATTRIBUTES: ReactScrollDOMAttributes;
	    static REACT_WHEEL_DOM_ATTRIBUTES: ReactWheelDOMAttributes;
	    static REACT_ANIMATION_DOM_ATTRIBUTES: ReactAnimationDOMAttributes;
	    static REACT_TRANSITION_DOM_ATTRIBUTES: ReactTransitionDOMAttributes;
	    static REACT_BASIC_DOM_ATTRIBUTES: ReactBasicDOMAttributes;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/input-field" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { AbstractField, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, ReactFocusDOMAttributes, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { CharsCounter, HornetCharsCounterAttributes }  from "hornet-js-react-components/src/widget/form/chars-counter";
	/**
	 * Composant champ de formulaire : input html de type texte par défaut
	 */
	export interface InputFieldProps extends AbstractFieldProps, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, HornetCharsCounterAttributes, ReactFocusDOMAttributes {
	    resettable?: boolean;
	    displayMaxCharInLabel?: boolean;
	    displayCharNumber?: boolean;
	    resetTitle?: string;
	}
	export class InputField<P extends InputFieldProps, S> extends AbstractField<InputFieldProps, S> {
	    static defaultProps: any;
	    readonly props: Readonly<InputFieldProps>;
	    protected charsCounter: CharsCounter;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     * @override
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * Surcharge de la méthode
	     * @param value
	     * @returns {InputField}
	     */
	    setCurrentValue(value: any): this;
	    isValued(): boolean;
	    /**
	     * rendu html du bouton reset
	     * @returns {any}
	     */
	    renderResetButton(): JSX.Element;
	    handleResetKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
	    /**
	     * Permet de rendre à null la valeur du champ et de masquer la colonne
	     */
	    resetValue(e: any): void;
	    /**
	     * Action exécutée lors d'un changement de valeur du champ
	     * @param e
	     */
	    handleChangeInput(e: any): void;
	    /**
	     * Surcharge de la méthode de la classe mère pour ajouter la limite autorisée si le nombre de caractères maximum est défini
	     * et si la props displayMaxCharInLabel est true
	     * @param fieldId
	     * @param fieldName
	     * @param label
	     * @param required
	     */
	    renderLabel(fieldId: string, fieldName: string, label: string, required: boolean): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/radios-field" {
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
	import { HornetClickableProps, HornetBasicFormFieldProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { HornetComponentChoicesProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { AbstractFieldDatasource }  from "hornet-js-react-components/src/widget/form/abstract-field-datasource";
	/**
	 * Propriétés d'un champ de formulaire de type groupe de boutons radios
	 */
	export interface RadiosFieldProps extends AbstractFieldProps, HornetClickableProps, HornetBasicFormFieldProps, HornetComponentDatasourceProps, HornetComponentChoicesProps {
	    currentChecked?: boolean;
	    /**
	     * @deprecated utiliser un datasource contenant le jeu de données
	     */
	    data?: any;
	    id?: string;
	    name: string;
	    defaultValue?: any;
	}
	/**
	 * Composant groupe de boutons radio
	 */
	export class RadiosField extends AbstractFieldDatasource<RadiosFieldProps, any> {
	    readonly props: Readonly<RadiosFieldProps>;
	    static defaultProps: any;
	    constructor(props?: any, context?: any);
	    setData(value: any): void;
	    /**
	     * enregistre la liste des choix possibles
	     */
	    protected setItem(): void;
	    handleClick(item: any): any;
	    handleChange(event: any): boolean;
	    protected isDataSourceSelectedArray(): boolean;
	    /**
	     * Génère le rendu des radio boutons à partir d'un dataSource
	     * @returns {any}
	     */
	    protected renderRadioItemdataSource(): JSX.Element;
	    /**
	     * Génère le rendu d'un radio bouton et son libellé
	     * @param choice choix sélectionnable
	     * @param id number position in array
	     * @returns {any}
	     */
	    protected renderRadioItem(choice: any, id: number): JSX.Element;
	    protected shouldRadioBeChecked(choice: any): boolean;
	    /**
	     * @override
	     * Génère le rendu du libellé pour le champ
	     * l'override permet de supprimer le for du label
	     * @param fieldId identifiant du champ
	     * @param fieldName nom du champ
	     * @param label libellé à afficher
	     * @param required indique si le champ est obligatoire
	     * @returns {any}
	     */
	    renderLabel(fieldId: string, fieldName: string, label: string, required: boolean): JSX.Element;
	    /**
	     * Génère le rendu spécifique du champ : un groupe de boutons radio correspondant au tableau choices
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * @override
	     */
	    setCurrentValue(value: any): this;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/row" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés d'une ligne de formulaire
	 */
	export interface RowProps extends HornetComponentProps {
	    /** Nom(s) de classe(s) CSS à utiliser. Séparés par un espace lorsqu'il y a plusieurs noms */
	    className?: string;
	    fraction?: number;
	}
	/**
	 * Ligne de formulaire
	 */
	export class Row extends HornetComponent<RowProps, any> {
	    /** Propriétés par défaut */
	    static defaultProps: {
	        className: string;
	    };
	    /**
	     * Construit une instance de Row
	     * @param props propriétés
	     * @param context contexte
	     */
	    constructor(props?: RowProps, context?: any);
	    /**
	     * Initialise la ou les classe(s) CSS de ce composant
	     * @param className nom(s) de classe(s) CSS
	     * @param callback fonction à appeler éventuellemnt
	     * @returns {Row} ce composant
	     */
	    setClassName(className: string, callback?: () => any): this;
	    /**
	     * @returns {number} le diviseur de fraction à utiliser pour les noeuds enfants
	     */
	    protected getPureChildFraction(): number;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/select-field" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { HornetBasicFormFieldProps, HornetClickableProps, HornetWrittableProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { AbstractFieldDatasource }  from "hornet-js-react-components/src/widget/form/abstract-field-datasource";
	import { IHornetComponentDatasource, HornetComponentChoicesProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés d'un champ de formulaire de type groupe de boutons radios
	 */
	export interface SelectFieldProps extends AbstractFieldProps, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, HornetComponentDatasourceProps, HornetComponentChoicesProps {
	    data?: any;
	    labelClass?: string;
	    valueKey?: string;
	    labelKey?: string;
	    name: string;
	    nullable?: boolean;
	}
	/**
	 * Définition d'un choix
	 */
	export interface SelectChoice {
	    /** Valeur du choix : peut être une chaîne de caractères vide pour un libellé 'Aucun(e)" par exemple */
	    value: string;
	    /** Libellé */
	    label?: string;
	    name: string;
	}
	/**
	 * Composant liste déroulante
	 */
	export class SelectField<P extends SelectFieldProps> extends AbstractFieldDatasource<SelectFieldProps, any> implements IHornetComponentDatasource {
	    readonly props: Readonly<SelectFieldProps>;
	    static defaultProps: any;
	    constructor(props: P, context?: any);
	    /**
	     * Génère le rendu spécifique du champ : une liste déroulante dont les éléments correspondent au tableau dataSource
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    setData(data: SelectChoice[] | any[], cb?: any): this;
	    setValueKey(key: string, cb?: any): this;
	    setLabelKey(key: string, cb?: any): this;
	    /**
	     * Override
	     * @param state
	     */
	    processHtmlProps(state: SelectFieldProps): void;
	    /**
	     * Génère le rendu du selectField à partir d'un dataSource
	     * @returns {any}
	     */
	    protected renderOptionsDataSource(): JSX.Element;
	    /**
	     * Génère le rendu d'un radio bouton et son libellé
	     * @param choice choix sélectionnable
	     * @returns {any}
	     */
	    protected renderOption(choice: SelectChoice): JSX.Element;
	    /**
	     *
	     * @param value
	     */
	    protected selectItemByValue(value: any): void;
	    /**
	     * @override
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * @override
	     */
	    protected handleChange(e: React.ChangeEvent<HTMLElement>): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/textarea-field" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as React from "react";
	import { AbstractField, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, AbstractFieldProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { CharsCounter, HornetCharsCounterAttributes }  from "hornet-js-react-components/src/widget/form/chars-counter";
	/**
	 * Champ de formulaire Hornet de type zone de texte (textarea)
	 */
	export interface TextAreaFieldProps extends AbstractFieldProps, HornetWrittableProps, HornetClickableProps, HornetBasicFormFieldProps, HornetCharsCounterAttributes {
	    resettable?: boolean;
	    extendable?: boolean;
	    displayMaxCharInLabel?: boolean;
	    displayCharNumber?: boolean;
	    resetTitle?: string;
	}
	export class TextAreaField extends AbstractField<TextAreaFieldProps, any> {
	    protected element: any;
	    protected charsCounter: CharsCounter;
	    protected minHeight: number;
	    readonly props: Readonly<TextAreaFieldProps>;
	    static defaultProps: any;
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     * @override
	     */
	    renderWidget(): JSX.Element;
	    /**
	     * Surcharge de la méthode de la classe mère pour ajouter la limite autorisée si le nombre de caractères maximum est défini
	     * et si la props displayMaxCharInLabel est true
	     * @param fieldId
	     * @param fieldName
	     * @param label
	     * @param required
	     */
	    renderLabel(fieldId: string, fieldName: string, label: string, required: boolean): JSX.Element;
	    /**
	     * rendu html du bouton reset
	     * @returns {any}
	     */
	    renderResetButton(): JSX.Element;
	    handleResetKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
	    protected getResetButtonId(): string;
	    protected setMinHeight(): void;
	    /**
	     * règle la taille du textarea en fonction du texte présent à l'intérieur de celui ci
	     * @param event
	     */
	    private setClientHeight;
	    /**
	     * Calcule si le champs à une valeur ou non
	     * @param event
	     */
	    valueChange(event: any): void;
	    /**
	     * Surcharge de la méthode
	     * @param value
	     * @returns {InputField}
	     */
	    setCurrentValue(value: any): this;
	    /**
	     * teste si le champs n'est pas vide
	     * @returns {boolean|any}
	     */
	    isValued(): boolean;
	    /**
	     * Permet de rendre à null la valeur du champ
	     */
	    resetValue(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/form/upload-file-field" {
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
	import * as React from "react";
	import { AbstractField, HornetBasicFormFieldProps, HornetClickableProps, HornetMediaProps }  from "hornet-js-react-components/src/widget/form/abstract-field";
	import { UploadedFile } from "hornet-js-core/src/data/file";
	/**
	 * Propriétés d'un champ de formulaire de type groupe de boutons radios
	 */
	export interface UploadFileFieldProps extends HornetClickableProps, HornetMediaProps, HornetBasicFormFieldProps {
	    /** Fichier sélectionné accessible en consultation */
	    defaultFile?: UploadedFile;
	    /** Méthode de rendu du composant en lecture seule */
	    renderPreviewFile?: any;
	    /** Texte affiché dans le bouton si aucun fichier n'est sélectionné */
	    buttonLabel?: string;
	    /** Texte affiché si un ou plusieurs fichiers sont sélectionnés */
	    fileSelectedLabel?: string;
	    /** permet de surcharger le css du bouton de suppression */
	    classNameDelete?: string;
	    /** clé i18n pour le label */
	    i18nLabelKey?: string;
	    /** définit si le champs peut être réinitialiser */
	    resettable?: boolean;
	}
	/**
	 * Composant champ de formulaire de type envoi de fichier
	 */
	export class UploadFileField<P extends UploadFileFieldProps> extends AbstractField<UploadFileFieldProps, any> {
	    protected inputFileElement: HTMLElement;
	    readonly props: Readonly<UploadFileFieldProps>;
	    static defaultProps: any;
	    constructor(props?: P, context?: any);
	    setReadOnlyFile(readOnlyFile: boolean, callback?: () => any): this;
	    /**
	     * Gestion du changement de fichier sélectionné
	     * @param e évènement
	     */
	    protected handleChange(e: __React.SyntheticEvent<HTMLElement>): void;
	    /**
	     * @returns {any} les propriétés du fichier en consultation converties en attributs html data
	     */
	    protected getDataFileProps(): any;
	    /**
	     * @override
	     */
	    setCurrentValue(formData: any): this;
	    registerUploadFieldElement(elt: any): void;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     */
	    renderWidget(): JSX.Element;
	    handleDelete(): void;
	    /**
	     * Déclenchement d'un click sur l'input file afin d'ouvrir la boite de dialogue
	     * d'upload de fichier
	     */
	    protected downloadButtonActionHandler(): void;
	    /**
	     * Appel au gestionnaire d'action pour l'ouverture de la boite de dialogue
	     * uniquement sur presse des touches entrée et espace
	     * @param e
	     */
	    protected downloadButtonKeyDownHandler(e: React.KeyboardEvent<HTMLAnchorElement>): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/bread-crumb-item" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { MenuItemConfig }  from "hornet-js-react-components/src/widget/navigation/menu";
	/**
	 * Propriétés d'un item de breadcrumb
	 */
	export interface BreadCrumbItemProps extends HornetComponentProps {
	    data: any;
	}
	/**
	 * Elément du fil d'ariane
	 */
	export class BreadCrumbItem extends HornetComponent<BreadCrumbItemProps, any> {
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Méthode de génaration d'un lien
	     * @param item
	     * @param indice
	     * @returns {ReactElement<{href: any}>}
	     * @protected
	     */
	    protected makeLink(item: MenuItemConfig, indice: number): JSX.Element;
	    /**
	     * Méthode de génération d'une balise de type span
	     * @param labelElement
	     * @param htmlProps
	     * @returns {React.ReactElement<null>}
	     * @protected
	     */
	    protected static makeSpan(labelElement: any, htmlProps: any): JSX.Element;
	    /**
	     * Méthode de génération d'un chevron
	     * @returns {string}
	     * @protected
	     */
	    protected static makeChevron(): JSX.Element;
	    /**
	     * Permet de mettre en gras du texte
	     * @param text
	     * @returns {React.ReactElement<null>}
	     * @protected
	     */
	    protected static makeStrong(text: string): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/bread-crumb" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { MenuItemConfig }  from "hornet-js-react-components/src/widget/navigation/menu";
	/**
	 * Fil d'ariane
	 */
	export class BreadCrumb extends HornetComponent<HornetComponentProps, any> {
	    /**
	     * Construit une instance de BreadCrumb
	     * @param props propriétés
	     * @param context contexte
	     */
	    constructor(props: HornetComponentProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    componentWillUnmount(): void;
	    renderBreadCrumb(): JSX.Element;
	    /**
	     * Rtourne les éléments que constitueront le breadCrumb depuis l'url courante
	     * @param currentPath
	     * @returns {Array}
	     * @protected
	     */
	    protected getItems(currentPath: string): any[];
	    /**
	     * Boucle sur chacun des éléments
	     * @param menuDatas
	     * @param currentPath
	     * @param currentElement
	     * @param currentItemSelected
	     * @returns {Array}
	     * @protected
	     */
	    protected loopElement(menuDatas: MenuItemConfig[], currentPath: string, currentElement: MenuItemConfig, currentItemSelected: any): any[];
	    /**
	     * Rendu d'un élément du breadCrumb
	     * @returns {any}
	     * @protected
	     */
	    protected renderBreadCrumbElement(): any;
	    /**
	     * Méthode exécutée lors du Changement de currentPath
	     * @param ev
	     */
	    handleChangePath(ev: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu-accessibilite" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Menu d'Accessibilité
	 */
	export class MenuAccessibilite extends HornetComponent<HornetComponentProps, any> {
	    /**
	     * Construit une instance de BreadCrumb
	     * @param props propriétés
	     * @param context contexte
	     */
	    constructor(props: HornetComponentProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     *
	     */
	    handleFocus(): void;
	    /**
	     *
	     */
	    handleBlur(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu-info-accessibilite" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { ButtonInfoAccessibilite }  from "hornet-js-react-components/src/widget/button/button-info-accessibilite";
	/**
	 * Propriétés du bouton et de sa modale d'information
	 */
	export interface MenuInfoAccessibiliteProps extends HornetComponentProps {
	}
	/**
	 * Bouton et modale d'information sur l'accessibilité clavier du composant Menu
	 */
	export class MenuInfoAccessibilite extends ButtonInfoAccessibilite<MenuInfoAccessibiliteProps> {
	    constructor(props: MenuInfoAccessibiliteProps, context: any);
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu-infos-complementaires" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Elément de menu InformationsComplémentaires
	 */
	export class MenuInfosComplementaires extends HornetComponent<HornetComponentProps, any> {
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu-link" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { IMenuItem } from "hornet-js-components/src/component/imenu-item";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	export let MENU_LINK_ACTIVATED: HornetEvent<any>;
	export interface MenuLinkProps extends HornetComponentProps {
	    item: IMenuItem;
	    setSubmenuVisibleHandler?: Function;
	    dataPassThru?: boolean;
	    imgFilePath?: string;
	    closeMenu: Function;
	    onClick?: Function;
	    /** indique si le menu doit se fermer lors d'un click sur un lien */
	    closeOnLinkClick?: boolean;
	}
	/**
	 * Lien d"un élément de menu
	 * @type {ComponentClass<MenuLinkProps>}
	 */
	export class MenuLink extends HornetComponent<MenuLinkProps, any> {
	    static defaultProps: {
	        item: {};
	        dataPassThru: boolean;
	    };
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Gestion du clic sur entrer ou espace
	     * @param event
	     */
	    protected handleKeyDown(event: any): void;
	    /**
	     * Méthode appelée lors du click sur le lien
	     */
	    protected activateLink(): void;
	    /**
	     * Méthode appelée pour femer le menu
	     */
	    protected closeMenu(): void;
	    /**
	     * Gestion de l'évènement d'entrée de la souris sur l'élément
	     */
	    protected handleMouseEnter(): void;
	    /**
	     * Evènement lancé lorsque le pointer n'est plus sur le lien
	     * @protected
	     */
	    protected handleMouseLeave(): void;
	    /**
	     * Permet de générer l'image adéquate selon la profondeur
	     * @param item
	     * @param libelle
	     * @param hover
	     * @returns {string}
	     * @protected
	     */
	    protected getImgSubMenu(item: IMenuItem, libelle: string, hover?: boolean): JSX.Element;
	    /**
	     * Méthode renvoyant le chemin absolu de l'image à afficher
	     * @param item
	     * @param hover
	     * @returns {string}
	     * @protected
	     */
	    protected getFilePathImg(item: IMenuItem, hover: boolean): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu-navigation" {
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
	import * as React from "react";
	import { MenuItemConfig }  from "hornet-js-react-components/src/widget/navigation/menu";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import KeyboardEvent = __React.KeyboardEvent;
	/**
	 * Propriétés MenuNavigation
	 */
	export interface MenuNavigationProps extends HornetComponentProps {
	    items: Array<MenuItemConfig>;
	    level?: number;
	    isVisible?: boolean;
	    idParent?: string;
	    infosComplementaires?: React.ReactElement<HornetComponentProps>[];
	    closeMenu: Function;
	    dataPassThru?: boolean;
	    /** indique si le menu doit se fermer lors d'un click sur un lien */
	    closeOnLinkClick?: boolean;
	}
	/**
	 * Propriétés MenuItem
	 */
	export interface MenuItemProps extends HornetComponentProps {
	    item: MenuItemConfig;
	    isSubMenu: boolean;
	    isVisible?: boolean;
	    closeMenu: Function;
	    dataPassThru?: boolean;
	    /** indique si le menu doit se fermer lors d'un click sur un lien */
	    closeOnLinkClick?: boolean;
	}
	/**
	 * Menu Item
	 */
	export class MenuItem extends HornetComponent<MenuItemProps, any> {
	    static defaultProps: {
	        item: {};
	        isSubMenu: boolean;
	        isVisible: boolean;
	    };
	    constructor(props: any, context: any);
	    /**
	     * Calcule la taille du menu en fonction de la taille de l'écran
	     */
	    resizeMenu(): void;
	    /**
	     * Change la taille du menu lorque la taille de l'écran est modifiée
	     */
	    handleResize(): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Fait apparaitre ou disparaitre les sous menus
	     */
	    hideOrShowChildren(): void;
	    /**
	     * teste si le sous menu est visible ou non
	     * @returns {boolean|any} le sous menu est visible
	     */
	    protected isVisible(): boolean;
	    /**
	     * test si le menu parent est visible
	     * @returns {boolean} le menu parent est visible
	     */
	    protected isParentVisible(): boolean;
	    protected getLiId(): string;
	    /**
	     * Ferme le menu contenant le menu item
	     */
	    protected hideMenu(): void;
	    /**
	     * cache un menu et tous ses sous-menus
	     * @param parentId identifiant de la balise li qui doit être cachée
	     */
	    protected hideAllMenu(parentId: any): void;
	    /**
	     * ferme tous les menu parents et va au menu suivant
	     */
	    protected hideAllParentMenu(): void;
	    /**
	     * teste si le menu a des sous menus
	     * @returns {boolean} le menu a des sous menus
	     */
	    protected hasSubMenu(): boolean;
	    /**
	     * Fonction appelée lors d'un appui de touche sur un élément de menu.
	     * @param e évenèment déclencheur
	     * @protected
	     */
	    protected handleKeyDown(event: any): void;
	}
	/**
	 * Groupe d'éléments de menu
	 * @type {ComponentClass<MenuNavigationProps>}
	 */
	export class MenuNavigation extends HornetComponent<MenuNavigationProps, any> {
	    static defaultProps: {
	        items: any[];
	        level: number;
	    };
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * @param id identifiant de l'élément de menu
	     * @return {number} l'index de l'élément parent au niveau de menu zéro (0 pour le premier élément)
	     */
	    protected static getRootParentIndex(id: string): number;
	    /**
	     * @param e évènement clavier
	     * @returns {boolean} true lorsque l'évènement clavier à au moins l'un des modificateurs actifs (tels que Alt, Ctrl, etc...)
	     */
	    protected hasKeyModifier(e: KeyboardEvent<HTMLElement>): boolean;
	    /**
	     * Fonction appelée lors d'un appui de touche sur un élément de menu horizontal.
	     * @param e évenèment déclencheur
	     * @protected
	     */
	    protected onKeyDownHorizontalMenu(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * Fonction appelée lors d'un appui de touche sur un élément de menu vertical
	     * @param e
	     * @protected
	     */
	    protected onKeyDownVerticalMenu(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * Test si un element existe
	     * @param id identifiant de l'élément à vérifier
	     * @returns boolean
	     * @protected
	     */
	    static isElementExists(id: string): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/menu" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés d'un élément de menu
	 */
	export interface MenuItemConfig {
	    /** Identifiant unique au sein du menu */
	    id?: string;
	    /** URL éventuelle à atteindre lors d'un clic sur l'élément */
	    url?: string;
	    /** Clé du libellé dans les messages internationalisés */
	    text: string;
	    /** Clé de message internationalisé du texte dinfobulle affiché pour l'élément dans le plan de l'application */
	    title?: string;
	    /** Niveau de l'élément : 0 pour un élément à la racine d'un menu; 1 pour un élément d'un premier niveau de sous-menu; etc... */
	    level?: number;
	    /** Eléments de sous-menu de cet élément */
	    submenu?: Array<MenuItemConfig>;
	    /** Indique si l'élément doit être visible dans le menu */
	    visibleDansMenu: boolean;
	    /** Indique si l'élément doit être visible dans le plan */
	    visibleDansPlan?: boolean;
	    /** Nom de rôle ou liste de noms de rôles autorisé(s) à accéder à ce menu */
	    rolesAutorises?: string | string[];
	}
	export interface MenuProps extends HornetComponentProps {
	    configMenu?: MenuItemConfig[];
	    /** Affichage du bouton d'accessibilité */
	    showIconInfo?: boolean;
	    /**
	     * Largeur maximale de la zone de travail en pixel
	     * Utilisé par le composant LayoutSwitcher pour agrandir ou rétrécir la
	     * zone de travail
	     */
	    workingZoneWidth?: string;
	    /** indique si le menu doit être affiché verticalement */
	    vertical?: boolean;
	    /** fonction appelée au click sur le toggler**/
	    onToggleClick?: Function;
	    /** Indique si le lien ne passe pas par le routeur */
	    dataPassThru?: boolean;
	    /** indique si le menu doit se fermer lors d'un click sur un lien */
	    closeOnLinkClick?: boolean;
	    /** indique si le menu doit se fermer lors d'un click en dehors de la zone */
	    closeOnClickOutside?: boolean;
	    /** indique si le menu doit se fermer lors d'une tabulation en dehors de la zone */
	    closeOnTabOutside?: boolean;
	}
	export class Menu extends HornetComponent<MenuProps, any> {
	    protected burgerIcon: HTMLElement;
	    static defaultProps: {
	        closeOnLinkClick: boolean;
	        closeOnClickOutside: boolean;
	        closeOnTabOutside: boolean;
	    };
	    constructor(props: MenuProps, context?: any);
	    /**
	     * Change la taille du menu lorque la taille de l'écran est modifiée
	     */
	    handleResize(): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * Gestion du clic clavier
	     * @param event
	     */
	    protected handleKeyDown(event: KeyboardEvent): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Rendu du bouton burger du menu
	     * @returns {any}
	     */
	    protected renderMenuButton(): JSX.Element;
	    /**
	     * Rendu du menu vide (permet de gérer des transition css sur le menu)
	     * @returns {any}
	     */
	    protected renderEmptyNavigationMenu(): JSX.Element;
	    /**
	     * Rendu du menu
	     * @returns {any}
	     */
	    protected renderNavigationMenu(): JSX.Element;
	    /**
	     * Action permettant d'afficher/masquer le menu
	     */
	    handleToggleMenu: () => void;
	    componentDidUpdate(): void;
	    /**
	     *
	     * @param e Event
	     */
	    handleMenuOutsideClick(e: any): boolean;
	    protected handleLayoutExpand(): {
	        currentWorkingZoneWidth: any;
	        classNameExpanded: string;
	    };
	    protected handleMajLink(): void;
	    protected handleUpatePageMenuExpand(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/navigation/plan" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { MenuItemConfig }  from "hornet-js-react-components/src/widget/navigation/menu";
	/**
	 * Propriétés du composant Plan
	 */
	export interface PlanProps extends HornetComponentProps {
	}
	/**
	 * Génère le plan de l'application à partir de la configuration de navigation.
	 */
	export class Plan extends HornetComponent<PlanProps, any> {
	    constructor(props: any, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Génération d'un élément du plan
	     * @param item élément de configuration
	     * @param depth profondeur de l'élément
	     * @returns l'élément rendu
	     */
	    protected generateItem(item: MenuItemConfig, depth: number): JSX.Element;
	    /**
	     * Génération d'un lien
	     * @param item élément de configuration
	     * @param depth profondeur de l'élément
	     * @returns l'élément rendu
	     */
	    protected generateLink(item: MenuItemConfig, depth: number): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/pager/pager" {
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
	import * as React from "react";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { PaginateDataSource } from "hornet-js-core/src/component/datasource/paginate-datasource";
	import KeyboardEvent = React.KeyboardEvent;
	/**
	 * Propriétés de pagination de tableau Hornet
	 */
	export interface PaginationProps {
	    /** Indice de la page courante (1 pour la première page) */
	    pageIndex: number;
	    /** Nombre maximum d'éléments par page */
	    itemsPerPage: number;
	    /** Nombre total d'éléments */
	    totalItems: number;
	}
	/**
	 * Elément de sélection de taille de page
	 */
	export interface PageSizeItem {
	    /** Taille de page */
	    value: number;
	    /** Clé du libellé internationalisé */
	    textKey: string;
	    /** Title du lien */
	    title?: string;
	}
	/**
	 * Propriétés du composant pagination de tableau Hornet
	 */
	export interface PagerProps extends HornetComponentProps {
	    /** Propriétés de pagination courante */
	    dataSource: PaginateDataSource<any>;
	    /** Classe CSS personnalisée */
	    className?: string;
	    /** Messages internationalisés du tableau */
	    message?: MessagesProps;
	    /** Choix de taille de page disponibles */
	    pageSizeSelect?: PageSizeItem[];
	    /** id html */
	    id: string;
	    /** indicateur disabled */
	    disabled?: boolean;
	    nextPageTitle?: string;
	    lastPageTitle?: string;
	    previousPageTitle?: string;
	    firstPageTitle?: string;
	    inputLabelTitle?: string;
	    summary?: string;
	}
	/**
	 * Propriétés des Messages du tableau Hornet
	 */
	export interface MessagesProps {
	    firstPage?: string;
	    prevPage?: string;
	    nextPage?: string;
	    lastPage?: string;
	    displayAll?: string;
	    pageFooter?: string;
	    inputPage?: string;
	}
	/**
	 * Valeur de la propriété de pagination itemsPerPage correspondant à "Afficher tout" les éléments.
	 * Egale à la constante Java Integer.MAX_VALUE (2^32 - 1)
	 */
	export const ITEMS_PER_PAGE_ALL: number;
	/**
	 * Outils de pagination de tableau
	 */
	export class Pager extends HornetComponent<PagerProps, any> {
	    protected tableInputPager: any;
	    static defaultProps: {
	        message: any;
	        className: string;
	        nextPageTitle: string;
	        lastPageTitle: string;
	        previousPageTitle: string;
	        firstPageTitle: string;
	        summary: string;
	        inputLabelTitle: string;
	        dropDownTitle: string;
	    };
	    protected defaultPageSizeSelect: PageSizeItem[];
	    constructor(props: PagerProps, context?: any);
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * met a jour la pagination dans le state et la valeur de la page courante.
	     * @param result (liste des resultats du dataSource)
	     */
	    protected updateOnFetch(result: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Génère la liste déroulante permettant de sélectionner le nombre d'éléments par page.
	     * @returns {ReactElement}
	     */
	    protected renderSelectItemsPerPage(): React.ReactElement<PagerProps>;
	    /**
	     * @param totalItems nombre total d'éléments
	     * @param itemsPerPage nombre d'éléments par page
	     * @return le nombre total de pages
	     */
	    static getTotalPages(totalItems: number, itemsPerPage: number): number;
	    /**
	     * Méthode permettant de générer le code HTML lié aux boutons
	     * @returns {JSX.Element[]}
	     */
	    protected getButtons(): JSX.Element[];
	    /**
	     * Génère le rendu d'un bouton de contrôle de pagination
	     * @param infoTitle complement info title
	     * @param page index de la page sélectionnée par le bouton
	     * @param enabled indique si le bouton est actif
	     * @param key clé de l'élément React
	     * @returns l'élément React correspondant
	     */
	    protected renderButton(infoTitle: string, page: number, enabled: boolean, key: string): JSX.Element;
	    /**
	     * Rendu de l'input de saisie pour aller à une page précise
	     * @param firstPage numéro de la première page
	     * @param lastPage numéro de la dernière page
	     * @returns rendu du composant
	     */
	    protected renderPageInput(firstPage: number, lastPage: number, title: string): JSX.Element;
	    /**
	     * Gestion de la validation clavier pour aller à la page saisie
	     * dans l'input dédié
	     * @param e : event
	     */
	    protected handleInputKeyDown(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * L'index de page étant dans un input mappé par la prop value
	     * React oblige l'utilisation d'un event sur onChange pour valider la modification
	     * @param e
	     */
	    protected handleChangeValue(e: any): void;
	    /**
	     * Méthode déclenchée sur un changement d'état de du formulaire de pagination
	     * @param value
	     * @param pageChanged
	     */
	    protected onFormChange(value: any, pageChanged: any): void;
	    setClassName(className: string, callback?: () => any): this;
	    setMessage(message: (PaginationProps: any) => void, callback?: () => any): this;
	    setPageSizeSelect(pageSizeSelect: PageSizeItem[], callback?: () => any): this;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/count-down" {
	import { HornetComponent } from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Déclaration des prpriétés du CountDown
	 */
	export interface CountDownProps extends HornetComponentProps {
	    secondsRemaining: number;
	    countDownExpiredMesage?: string;
	    countDownNormalMessage?: string;
	}
	/**
	 *
	 */
	export class Countdown extends HornetComponent<CountDownProps, any> {
	    protected interval: any;
	    static defaultProps: {
	        countDownExpiredMesage: string;
	        countDownNormalMessage: string;
	    };
	    constructor(props: any, context?: any);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    /**
	     * Génère le rendu spécifique du champ
	     * @returns {any}
	     * @override
	     */
	    render(): JSX.Element;
	    /**
	     *
	     */
	    tick(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/notification-message-item" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés D'un élément de message
	 */
	export interface MessageItemProps extends HornetComponentProps {
	    field?: string;
	    text: string;
	    anchor?: string;
	    className?: string;
	    id?: string;
	}
	/**
	 * Composant MessageItem
	 */
	export class MessageItem extends HornetComponent<MessageItemProps, any> {
	    setFocus(e: React.MouseEvent<HTMLElement>): void;
	    /**
	     * Rendu Lien
	     * @returns {any}
	     * @protected
	     */
	    protected renderLink(): JSX.Element;
	    /**
	     * Rendu span
	     * @returns {any}
	     * @protected
	     */
	    protected renderSpan(): JSX.Element;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/notification-session-footer" {
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { SessionEvent } from "hornet-js-core/src/services/hornet-superagent";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import { WakeUpNode } from "hornet-js-core/src/services/default/wakeup-node";
	/**
	 * Déclaration des prpriétés du CountDown
	 */
	export interface NotificationSessionFooterProps extends HornetComponentProps {
	    messages?: any;
	    displayDuration?: number;
	    handlClickWakeUp?: any;
	}
	export class NotificationSessionFooter extends HornetComponent<NotificationSessionFooterProps, any> {
	    /**
	     * Service middleware pour le layout
	     */
	    protected wakeUpNodeService: WakeUpNode;
	    static defaultProps: {
	        offset: number;
	        header: string;
	        footer: string;
	        messages: string;
	        displayDuration: number;
	    };
	    constructor(props?: any, context?: any);
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    render(): JSX.Element;
	    /**
	     * Méthode permettant de faire le rendu du bloc de notification
	     * @returns {JSX.Element}
	     */
	    renderNotification(): JSX.Element;
	    handlClickWakeUp(): void;
	    /**
	     * Méthode permettant de formater le message à afficher dans le bloc de notification
	     * @returns {string}
	     */
	    formateMessage(): string;
	    /**
	     * Méthode permettant de formater le state expireIn au format Date
	     * @returns {number}
	     */
	    formateTime(): number;
	    /**
	     * Méthode permettant de réduire la notification
	     */
	    handleToggleNotification(): void;
	    /**
	     * Méthode permettant de rafraichir la notification
	     * @param {HornetEvent<SessionEvent>} ev
	     */
	    handleRefresh(ev?: HornetEvent<SessionEvent>): void;
	    /**
	     * Méthode permettant de rafraichir la notification
	     * @param {HornetEvent<SessionEvent>} ev
	     */
	    handleWillExpireStart(ev: HornetEvent<SessionEvent>): void;
	    /**
	     * Méthode permettant d'avertir d'une fin de session
	     * @param {HornetEvent<SessionEvent>} ev
	     */
	    handleWillExpire(ev: HornetEvent<SessionEvent>): void;
	    /**
	     * Métohde de gestion du scroll à l'écran
	     */
	    protected handleScroll(): void;
	    /**
	     * Calcule si un élément est présent ou non a l'écran
	     * @param {Element} elm - l'élément a rechercher
	     * @return {boolean} true si l'élément est présent
	     */
	    protected checkvisible(elm: any): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/notification-session-idp" {
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés de l'accordion
	 */
	export interface SessionIdpExpireNotificationProps extends HornetComponentProps {
	    notificationMessage?: string;
	    expireIn?: number;
	    expireInDate?: number;
	    reduced?: boolean;
	}
	export class SessionIdpExpireNotification extends HornetComponent<SessionIdpExpireNotificationProps, any> {
	    static defaultProps: SessionIdpExpireNotificationProps;
	    readonly props: Readonly<SessionIdpExpireNotificationProps>;
	    timeoutHandler: any;
	    activeElement: Element;
	    constructor(props?: SessionIdpExpireNotificationProps, context?: any);
	    componentDidMount(): void;
	    render(): JSX.Element;
	    componentWillUnmount(): void;
	    componentDidUpdate(): void;
	    /**
	     * Méthode permettant de faire le rendu du bloc de notification
	     * @returns {JSX.Element}
	     */
	    renderNotification(): JSX.Element;
	    /**
	     * Méthode permettant de réduire la notification
	     */
	    handleToggleNotification(): void;
	    /**
	     * Calcule si un élément est présent ou non a l'écran
	     * @param {Element} elm - l'élément a rechercher
	     * @return {boolean} true si l'élément est présent
	     */
	    protected checkvisible(elm: any): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/notification-session" {
	import { HornetComponent } from "hornet-js-react-components/src/widget/component/hornet-component";
	import { SessionEvent } from "hornet-js-core/src/services/hornet-superagent";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	export class SessionExpireNotification extends HornetComponent<HornetComponentProps, any> {
	    constructor(props?: any, context?: any);
	    handleRefresh(ev: HornetEvent<SessionEvent>): void;
	    handleWillExpireStart(ev: HornetEvent<SessionEvent>): void;
	    handleWillExpire(ev: HornetEvent<SessionEvent>): void;
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/notification/notification" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { BaseError } from "hornet-js-utils/src/exception/base-error";
	/**
	 * Propriétés du composant Notification
	 */
	export interface NotificationProps extends HornetComponentProps {
	    errorsTitle?: string;
	    infosTitle?: string;
	    personnalsTitle?: string;
	    warningsTitle?: string;
	    infos?: any;
	    errors?: any;
	    warnings?: any;
	    exceptions?: Array<BaseError>;
	    id: string;
	    personnals?: any;
	    color?: string;
	    logo?: string;
	}
	export interface NotificationContentState {
	    infos?: any;
	    warnings?: any;
	    errors?: any;
	    exceptions?: Array<BaseError>;
	    personnals?: any;
	    color?: string;
	    logo?: string;
	}
	/**
	 * Propriétés du contenu d'une notification
	 */
	export interface NotificationContentProps extends HornetComponentProps {
	    errorsTitle?: string;
	    warningsTitle?: string;
	    personnalsTitle?: string;
	    infosTitle?: string;
	    infos?: any;
	    warnings?: any;
	    errors?: any;
	    personnals?: any;
	    color?: string;
	    logo?: string;
	    exceptions?: Array<BaseError>;
	    idComponent?: string;
	}
	/**
	 * Type d'erreur
	 */
	export enum notificationType {
	    ERROR = "error",
	    WARNING = "warning",
	    PERSONNALS = "personnal",
	    INFOS = "info",
	    EXCEPTION = "exception"
	}
	/**
	 * Composant Notification
	 */
	export class Notification extends HornetComponent<NotificationProps, any> {
	    static started: boolean;
	    static INSTANCES: {};
	    static ORDER: any[];
	    static defaultProps: {
	        color: string;
	    };
	    constructor(props?: NotificationProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Permet de setter les notifications de type INFO
	     * @param infos
	     */
	    setInfos(infos: any): void;
	    /**
	     * Permet de setter les notifications de type WARNING
	     * @param warnings
	     */
	    setWarnings(warnings: any): void;
	    /**
	     * Permet de setter les notifications de type ERROR
	     * @param errors
	     */
	    setErrors(errors: any): void;
	    /**
	     * Permet de setter les notifications de type EXCEPTION
	     * @param exceptions
	     */
	    setExceptions(exceptions: any): void;
	}
	/**
	 * Composant Contenu de Notification
	 */
	export class NotificationContent extends HornetComponent<NotificationContentProps, any> {
	    static firstRender: boolean;
	    width: any;
	    notif: any;
	    listError: any;
	    btnError: HTMLButtonElement;
	    btnInfo: HTMLButtonElement;
	    constructor(props?: NotificationProps, context?: any);
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
	    /**
	     * Fait défiler la page courante de façon à afficher le bloc de notifications
	     */
	    scrollToNotifications(): void;
	    /**
	     * supprime un message d'information
	     * @param info
	     */
	    protected deleteInfo(info: any): void;
	    /**
	     *
	     * @param exception
	     */
	    protected exceptionStackDev(exception: BaseError): any;
	    /**
	    * Rendu d'un message
	    * @returns {any}
	    */
	    renderMessage(errors: any, notifType: any): JSX.Element;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Affiche le titre de la notification
	     */
	    protected _getTitle(): any;
	    /**
	     * Affiche/Masque les erreurs dans la zone de notification
	     *
	     */
	    handleClickShowError(e: any): void;
	    /**
	     * Suppression de la notification success(info)
	     * @param items
	     */
	    handleClickRemove(items: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/screen/layout-switcher" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	/**
	 * Propriétés User
	 */
	export interface LayoutSwitcherProps extends HornetComponentProps {
	    switchIcon?: string;
	    switchTitle?: string;
	    id?: string;
	}
	export const UPDATE_PAGE_EXPAND: HornetEvent<boolean>;
	export const UPDATE_PAGE_EXPAND_MENU: HornetEvent<boolean>;
	/**
	 * Composant User
	 */
	export class LayoutSwitcher<LayoutSwitcherProps, S> extends HornetComponent<any, any> {
	    static defaultProps: {
	        switchIcon: string;
	    };
	    /**
	     * @class
	     */
	    constructor(props: any, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Modifiaction du state pour rendu et déclenchement de l'évènement UPDATE_PAGE_EXPAND
	     */
	    handleExpandPageToogle(): void;
	    /**
	     * Handler de keydow pour déclencher le click sur la touche entrée et espace
	     * @param {KeyboardEvent} e - évènement clavier déclenché.
	     */
	    protected handleScreenButtonKeyDown(e: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/tab/tab-content" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	export interface TabContentProps extends HornetComponentProps {
	    dataSource?: DataSource<any>;
	}
	export class TabContent<P extends TabContentProps, S> extends HornetComponent<TabContentProps, S> {
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/tab/tab-header" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	export class TabHeader extends HornetComponent<HornetComponentProps, any> {
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/tab/tab" {
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
	import { HornetComponentProps, IHornetComponentAsync } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés d'un onglet
	 */
	export interface TabProps extends HornetComponentProps {
	    /** Titre de l'onglet (affiché dans la barre d'onglets) */
	    title?: string;
	    id?: string;
	    panelId?: string;
	    isVisible?: boolean;
	    forceRender?: boolean;
	    prefixId?: string;
	    index?: number;
	    /** Méthode appelée lorsque l'onglet est sélectionné(flag=true) ou désélectionné()*/
	    onSelect?: Function;
	    onClick?: Function;
	    mount?: boolean;
	    isDeletable?: boolean;
	    deleteButtonTitle?: string;
	    deleteTabFunction?: void | Function;
	    style?: any;
	}
	/**
	 * Composant Onglet
	 */
	export class Tab extends HornetComponent<TabProps, any> implements IHornetComponentAsync {
	    static defaultProps: {
	        id: string;
	        forceRender: boolean;
	        spinner: boolean;
	        mount: boolean;
	    };
	    _status: boolean;
	    constructor(props?: TabProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUpdate(nextProps: TabProps, nextState: any, nextContext: any): void;
	    /**
	    * @inheritDoc
	    */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    displaySpinner(flag: boolean): void;
	    /**
	     * Méthode qui permet d'afficher le spinner du composant plutot que celui de la page.
	     */
	    showSpinnerComponent(): void;
	    /**
	     * Méthode qui permet de cacher le spinner du composant plutot que celui de la page.
	     */
	    hideSpinnerComponent(): void;
	    /**
	     * Méthode permettant d'ajout des attributs permettant de mapper un onglet à un champ
	     * @param node Element HTML
	     */
	    protected trackInputFieldFromChildren(node: any): void;
	    /**
	     * Retourne true si le form contenant le node en paramètre contient le tab courant
	     * @param node Element HTML
	     */
	    protected isFormParentOfTab(node: Element): boolean;
	    /**
	     * Méthode permettant de récupérer l'ID du Panel propre à l'onglet
	     */
	    protected getTabPanelId(): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/tab/tabs" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { Tab }  from "hornet-js-react-components/src/widget/tab/tab";
	import KeyboardEvent = __React.KeyboardEvent;
	import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
	import FocusEventHandler = __React.FocusEventHandler;
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	export const FOCUS_ON_TAB: HornetEvent<string>;
	export const TAB_INDEX_NUMBER_ATTRIBUTE = "tabIndexNumber";
	export interface TabsProps extends HornetComponentProps {
	    id: string;
	    panelId?: string;
	    selectedTabIndex?: number;
	    dataSource?: DataSource<any>;
	    beforeHideTab?: (tabRef?: Tab, index?: number) => void;
	    afterShowTab?: (tabRef?: Tab, index?: number) => void;
	    addTabFunction?: void | Function;
	    addButtonTtitle?: string;
	    deleteTabFunction?: void | Function;
	    deleteButtonTitle?: string;
	}
	export enum TabsButtonScrolling {
	    RIGHT = 0,
	    LEFT = 1
	}
	export enum TabsKeyboardNavigation {
	    PREVIOUS = 0,
	    NEXT = 1,
	    HOME = 2,
	    END = 3
	}
	export interface TabsHeaderTechProps extends HornetComponentProps {
	    index: number;
	    tab: JSX.Element;
	    id?: string;
	    prefixWithId: Function;
	    handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
	    handleFocus: FocusEventHandler<HTMLElement>;
	    castBooleanInNumber: Function;
	    selected: boolean;
	    isVisible?: boolean;
	    isDeletable?: boolean;
	    deleteTabFunction?: void | Function;
	    deleteButtonTitle?: string;
	    style?: any;
	    errors?: number;
	}
	export class TabsHeaderTech extends HornetComponent<TabsHeaderTechProps, any> {
	    constructor(props?: TabsHeaderTechProps, context?: any);
	    protected getTabHeader(children: any): JSX.Element[];
	    render(): JSX.Element;
	    /**
	     * gestion navigation clavier
	     * @param e
	     */
	    protected handleKeyDown(e: any): void;
	    /**
	     * appelle la fonciton de suppression du tab
	     */
	    protected deleteTabFunction(): any;
	}
	export class Tabs<P extends TabsProps> extends HornetComponent<TabsProps, any> {
	    static defaultProps: {
	        panelId: string;
	        selectedTabIndex: number;
	    };
	    /** liste des instances Tab*/
	    protected elementsTab: Array<Tab>;
	    /** liste des JSX elements tab*/
	    protected elementsTabReact: Array<JSX.Element>;
	    /** liste des instances HeaderTech*/
	    protected elementsHeaderTech: Array<TabsHeaderTech>;
	    /** liste des JSX elements headerTech*/
	    protected elementsHeaderReact: Array<JSX.Element>;
	    protected tabRightPicto: any;
	    protected tabLeftPicto: any;
	    protected scrollGap: number;
	    protected tabviewContentList: any;
	    protected tabviewPictoList: any;
	    protected isTouchScreen: boolean;
	    protected resizeListener: EventListenerOrEventListenerObject;
	    protected tabsHeaderIndex: number;
	    protected tabsContentIndex: number;
	    protected errors: number[];
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentWillReceiveProps(nextProps: any, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    componentDidUpdate(prevProps: any, prevState: any, prevContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    focusInputTab(ev: HornetEvent<string>): void;
	    /**
	     * retourne l'id en tant que prefixe
	     */
	    protected prefixWithId(): string;
	    /**
	     * Retourne l'ensemble des onglets de type Tab
	     */
	    getAllTabElements(): Array<Tab>;
	    /**
	     * Retourne l'ensemble des onglets sous leur forme JSX.Element
	     */
	    getAllTabJSXElement(): Array<JSX.Element>;
	    /**
	     * Retourne l'ensemble des headers d'onglet de type TabsHeaderTech
	     */
	    getAllTabsHeaderTech(): Array<TabsHeaderTech>;
	    /**
	     * Retourne l'ensemble des headers d'onglet sous leur forme JSX.element
	     */
	    getAllTabsHeaderJSXEelement(): Array<JSX.Element>;
	    /**
	     * retourne le nombre d'onglet présent dans le tabs
	     * @returns {number}
	     */
	    getTabsNumber(): number;
	    /**
	     * retourne la position de l'onglet dans la liste des onglets
	     * @param {number} index
	     * @returns {number}
	     */
	    getTabPosition(index: number): number;
	    /**
	     * retourne l'index de l'onglet à la position donnée
	     * @param {number} position
	     */
	    getIndexAt(position: number): number;
	    /**
	     * rafraichit les onglets
	     */
	    refresh(): void;
	    /**
	     * Permet d'ajouter des onglets
	     * @param {number} position de l'onglet
	     */
	    addElements(position: number, tab: JSX.Element | JSX.Element[], cb?: any): void;
	    /**
	     * Permet de supprimer des onglets
	     * Attention les index n'ont pas de lien avec l'ordre d'affichage
	     * @param {number[]} indexes : l'indice des onglets
	     */
	    removeElementsByIndex(...indexes: number[]): void;
	    /**
	     * Permet de récup un onglet par son id
	     * @param {number} id : l'id de l'onglets
	     * @return the Tab
	     */
	    getTabById(id: string): Tab;
	    /**
	     * Permet de récup des onglet par son index
	     * @param {number} id : l'id de l'onglets
	     * @return the Tab
	     */
	    getTabByIndex(index: number): Tab;
	    /**
	     * Permet de supprimer des onglets
	     * @param {number[]} id : l'id des onglets
	     */
	    removeElementsById(...ids: string[]): void;
	    /**
	     * Permet de supprimer des onglets et de passer un callback
	     * @param {string | string[]} ids
	     * @param cb
	     */
	    removeElementsByIdWithCb(ids: string | string[], cb?: any): void;
	    /**
	     * @return renvoie l'indice de onglet courant
	     */
	    getCurrentIndexSelected(): any;
	    /**
	     * Permet de supprimer un TabsHeaderTech (instance + JSX.Element)
	     */
	    protected removeHeaderTech(criteria: any): void;
	    /**
	     * Permet de supprimer un Tab (instance + JSX.Element)
	     */
	    protected removeTab(criteria: any): void;
	    /**
	     * Création JSX.Element de TabsHeaderTech
	     */
	    protected createTabsHeader(tab: JSX.Element): JSX.Element;
	    /**
	     * Création d'un JSX.Element de Tab (Wrap)
	     */
	    protected createWrap(tab: JSX.Element): JSX.Element;
	    /**
	     * @inheritDock
	     */
	    render(): JSX.Element;
	    protected handleTouchStart(): void;
	    protected manageScrollButtonStyle(scroll?: TabsButtonScrolling): void;
	    protected setScrollButtonsStyle(element: HTMLElement): void;
	    protected detectScrollRequired(): void;
	    protected scrollElement(scroll: TabsButtonScrolling, element: HTMLElement): void;
	    protected onClickRightPicto(): void;
	    protected onClickLeftPicto(): void;
	    protected getTabs(children: any): any[];
	    protected castBooleanInNumber(bool: boolean): number;
	    /**
	     * change l'onglet actif
	     * @param index index de l'onglet a activé
	     * @param force force même si c'est le même onglet
	     */
	    showPanel(index: any, force?: boolean, cb?: any): void;
	    protected setSelectedIndexByKeyboard(index: any, mode: TabsKeyboardNavigation): number;
	    /**
	     * Gère les évèvenements clavier déclenchés
	     * @param e évènement
	     */
	    protected handleKeyDown(e: KeyboardEvent<HTMLElement>): void;
	    protected handleFocus(e: React.FocusEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected rightArrowKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected leftArrowKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected downArrowKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected upArrowKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected homeKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    protected setSelectedTabIndexAndFocus(mode: TabsKeyboardNavigation): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected endKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected pageUpKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected pageDownKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected enterKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected f2KeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * A surcharger éventuellement
	     * @param e
	     */
	    protected escapeKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    protected tabKeyDownHandler(e: KeyboardEvent<HTMLElement>): void;
	    /**
	     * Gestion du focus sur un tab
	     * @param element l'élément tab sur lequel se trouve le focus
	     */
	    static handleFocusOnTab(element: any): void;
	    /**
	     * Retourne l'id du li de l'élément tab
	     */
	    protected getTabLiId(): string;
	    /**
	     * Méthode permettant de récupérer l'ID du Panel propre à l'onglet
	     */
	    protected getTabPanelId(): string;
	    /**
	     * Gère les notifications en calculant le nombre d'erreurs pour chaque tab
	     * @param {HornetEvent} ev
	     */
	    protected handleNotificationEvent(ev: HornetEvent<any>): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/spinner/spinner-autocomplete" {
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
	import { SpinnerComponent, SpinnerProps }  from "hornet-js-react-components/src/widget/spinner/spinner-component";
	/**
	 * Composant affichant une image sur un champ autocomplete
	 */
	export class SpinnerAutoComplete<P extends SpinnerProps, S extends SpinnerProps> extends SpinnerComponent<P, S> {
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/spinner/spinner-component-input" {
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
	import { SpinnerComponent, SpinnerProps }  from "hornet-js-react-components/src/widget/spinner/spinner-component";
	/**
	 * Composant affichant une image sur un champ type field
	 */
	export class SpinnerComponentInput<P extends SpinnerProps, S extends SpinnerProps> extends SpinnerComponent<P, S> {
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/spinner/spinner-component" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import { RequestEventDetail } from "hornet-js-core/src/event/hornet-event";
	/**
	 * Propriétés du spinner
	 */
	export interface SpinnerProps extends HornetComponentProps {
	    /** Temps d'attente minimal (en ms) avant affichage */
	    minimalShowTimeInMs?: number;
	    /** Titre de la fenêtre modale*/
	    loadingTitle?: string;
	    /** Texte affiché dans la modale */
	    loadingText?: string;
	    /** Image d'attente */
	    imageLoadingUrl?: string;
	    /** visibilité */
	    isVisible?: boolean;
	    /** méthode appelée lors de la fermeture du spinner **/
	    onHideSpinner?: Function;
	}
	/**
	 * Composant affichant une image (par défaut une roue dentée animée) et un texte d'attente
	 * dans une fenêtre modale en attendant la fin d'une action longue.
	 */
	export class SpinnerComponent<P extends SpinnerProps, S extends SpinnerProps> extends HornetComponent<SpinnerProps, SpinnerProps> {
	    /** Décompte le nombre d'évènements en attente de terminaison */
	    protected count: number;
	    /**delay permettant de decaler dans le temps les demandes d'affichage du spinner fixé à 500ms (optimisation)*/
	    protected static defaultProps: {
	        minimalShowTimeInMs: number;
	    };
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    protected asyncRequestEventTreatment(ev: HornetEvent<RequestEventDetail>): void;
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * gestion des compteurs d'affichage/fermeture du spinner
	     */
	    progress(inProgress: boolean): void;
	    /**
	     * Affichage Spinner
	     */
	    openSpinner(): void;
	    /**
	     * Fermeture Spinner
	     */
	    closeSpinner(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Return l'url de l'image spinner
	     * @returns Url image spinner
	     * @protected
	     */
	    protected getSpinnerImage(): string;
	    /**
	     * Extrait le libelle loadingText passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getLoadingText(): string;
	    /**
	     * Extrait le libelle loadingTitle passé dans les propriétés du composant ou indique un libellé par défaut
	     * @returns Titre
	     * @protected
	     */
	    protected getLoadingTitle(): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/spinner/spinner" {
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
	import { SpinnerComponent, SpinnerProps }  from "hornet-js-react-components/src/widget/spinner/spinner-component";
	/**
	 * Composant affichant une image (par défaut une roue dentée animée) et un texte d'attente
	 * dans une fenêtre modale en attendant la fin d'une action longue.
	 */
	export class Spinner<P extends SpinnerProps, S extends SpinnerProps> extends SpinnerComponent<P, S> {
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Methode de rendu du loader
	     */
	    renderLoader(): JSX.Element;
	    /**
	     * gestion des compteurs d'affichage/fermeture du spinner
	     */
	    progress(inProgress: boolean): void;
	    /**
	     * Affichage Spinner
	     */
	    openSpinner(): void;
	    /**
	     * Fermeture Spinner
	     */
	    closeSpinner(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/tool-tip/tool-tip" {
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
	import * as React from "react";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés du ToolTip
	 */
	export interface ToolTipProps extends HornetComponentProps {
	    src?: string;
	    icoToolTip?: string;
	    alt: string;
	    idImg?: string;
	    classImg?: string;
	    idSpan: string;
	    classSpan?: string;
	}
	/**
	 * Composant ToolTip
	 */
	export class ToolTip extends HornetComponent<ToolTipProps, any> {
	    static defaultProps: {
	        classImg: string;
	        classSpan: string;
	        icoToolTip: string;
	    };
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * Gestion des touches du clavier
	     * @param event
	     */
	    protected handleKeyDown(event: any): void;
	    /**
	     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
	     * @param event
	     */
	    protected hideTip(event: React.SyntheticEvent<HTMLElement>): void;
	    protected showTip(event: React.SyntheticEvent<HTMLElement>): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/action-button" {
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
	import * as React from "react";
	import { Button, ButtonProps, ButtonState }  from "hornet-js-react-components/src/widget/button/button";
	/**
	 * Enumeration des types d'action
	 */
	export enum TypeAction {
	    ACTION_MASSE = 1,
	    ACTION_UNITAIRE = 2
	}
	export interface ActionButtonProps extends ButtonProps {
	    srcImg?: JSX.Element | string;
	    classNameImg?: string;
	    typeAction?: TypeAction;
	    messageAlert?: string;
	    titleAlert?: string;
	    action?: Function;
	    showAlert?: Function;
	    priority?: boolean;
	    visible?: Function;
	    selectedItems?: any;
	    items?: any[];
	    onKeyDown?: any;
	    displayedWithoutResult?: boolean;
	}
	export interface ActionButtonState extends ButtonState {
	    visible?: Boolean;
	}
	export class ActionButton<P extends ActionButtonProps, S extends ActionButtonState> extends Button<ActionButtonProps, ActionButtonState> {
	    static defaultProps: {
	        disabled: boolean;
	    } & {
	        displayedWithoutResult: boolean;
	    };
	    state: S;
	    readonly props: Readonly<ActionButtonProps>;
	    constructor(props?: ActionButtonProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Click sur le lien
	     */
	    onClick(e: React.MouseEvent<HTMLElement>): void;
	    /**
	     * action sur la confirmation
	     */
	    onAction(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { AbstractHeaderCell, AbstractHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-header-cell";
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	import { InputTextInLineBodyCell }  from "hornet-js-react-components/src/widget/table/column/cell/input/input-text-in-line-body-cell";
	import { SortData } from "hornet-js-core/src/component/sort-data";
	import { CellCoordinates }  from "hornet-js-react-components/src/widget/table/column/cell/cell-coordinates";
	import { ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	import { CSSProperties } from "react";
	/**
	 * Propriétés d'une colonne d'entête de tableau
	 */
	export interface ColumnProps extends HornetComponentProps {
	    id?: string;
	    /** Nom de la colonne, correspondant au nom de la propriété contenant la valeur d'une cellule */
	    keyColumn: string;
	    /** Titre de la colonne */
	    title?: string | JSX.ElementClass;
	    /** titre de la cellule */
	    titleCell?: string | Function;
	    /** Texte complet lorsque le titre est un acronyme. La propriété lang devrait être valorisée dans ce cas. */
	    abbr?: string;
	    /** Propriétés de tri sur la colonne */
	    sortable?: boolean;
	    /** Propriétés d'edition sur la colonne */
	    editable?: boolean;
	    /** Propriété permettant de rendre éditable une cellule */
	    isEditing?: boolean;
	    /** indicateur de generation d'une cellule header */
	    isHeader?: boolean;
	    /** indique que le header est fixe */
	    headerFixed?: boolean;
	    /** style  des cellules */
	    style?: CSSProperties;
	    /** Titre du bouton de tri par colonne. Lorsque vide table.sortByTitle est utilisé par défaut. */
	    sortByTitle?: string;
	    /** Fonction déclenchée lors d'un clic sur une colonne, déclenchant le tri sur celle-ci */
	    onSort?: (SortData: any) => void;
	    /** Tri en cours sur le tableau */
	    sortData?: SortData;
	    /** fonction appelée par les cellules sur la navigation */
	    navigateFct?: (CellCoordinates: any, NavigateDirection: any) => void;
	    /** Fonction déclenchée lors du click sur la checkbox liée aux actions de masse */
	    toggleSelectLines?: (item: any, all?: boolean) => void;
	    /** gestion des touches clavier */
	    handleChangeKeyboardMode?: any;
	    /** specifie le mode d'accessibilité au clavier */
	    keyboardMode?: number;
	    /** permettre les actions de masse */
	    actionMassEnabled?: boolean;
	    /** nombre de colonne du tableau */
	    nbColumns?: number;
	    coordinates?: CellCoordinates;
	    /** objet representant l'état du tableau */
	    contentState?: ContentState;
	    /** la ligne est selectionnée */
	    isSelected?: boolean;
	    /** détermine si la colonne peut être masquée */
	    hiddenable?: boolean;
	    /** style de la colonne */
	    defaultStyle?: CSSProperties;
	    /** Texte alternatif */
	    alt?: string;
	    headers?: string | string[];
	    /** Méthode de comparaison custom pour le tri de la colonne */
	    compareMethod?: (sortData: SortData, a: any, b: any) => void;
	    className?: string;
	    /** Label de substitution dans le cas d'un tri custom ascendant */
	    orderByLabelUp?: string;
	    /** Label de substitution dans le cas d'un tri custom descendant */
	    orderByLabelDown?: string;
	    /** Valeur de remplacement dans le cas ou la valeur cherchée dans la value depuis le keyColumn ne renvoie rien */
	    replaceUndef?: string;
	}
	/**
	 * Propriétés d'une colonne d'entête de tableau
	 */
	export interface ColumnState extends HornetComponentProps {
	    /** Tri en cours sur le tableau */
	    sortData?: SortData;
	    /** Nom de la colonne correspondant à keyColumn */
	    column: string;
	    /** index de la colonne */
	    coordinates?: number;
	    /** état de la colonne */
	    isVisible?: boolean;
	    /** Propriété permettant de rendre éditable une cellule */
	    isEditing?: boolean;
	}
	/**
	 * Classe abstraite d'une colonne de tableau
	 */
	export class Column<P extends ColumnProps, S extends ColumnState> extends HornetComponent<ColumnProps, ColumnState> {
	    static defaultProps: {
	        sortable: boolean;
	        defaultStyle: {
	            width: string;
	        };
	        hiddenable: boolean;
	    };
	    constructor(props: P, context: any);
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: ColumnProps, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /***
	     * @deprecated
	     * Méthode permettant de récupérer les propriétés d'une cellule
	     * @returns {any} Propriétés d'une cellule
	     */
	    getCellProps(): any;
	    /**
	     * Getter pour le composant générant le entête de colonne
	     * @return Class<HeaderCell<HeaderCellProps, any>>
	     */
	    getHeaderCell(): Class<AbstractHeaderCell<AbstractHeaderCellProps, any>>;
	    /**
	     * Getter pour le composant générant le contenu de colonne
	     * @return Class<BodyCell<BodyCellProps, any>>
	     */
	    getBodyCell(): Class<AbstractBodyCell<AbstractBodyCellProps, any>>;
	    /**
	     * Getter pour le composant générant le entête de colonne
	     * @return Class<HeaderCell<HeaderCellProps, any>>
	     */
	    static getHeaderCell(props: any): Class<AbstractHeaderCell<AbstractHeaderCellProps, any>>;
	    /**
	     * Getter pour le composant générant le contenu de colonne
	     * @return Class<BodyCell<BodyCellProps, any>>
	     */
	    static getBodyCell(props: any): Class<AbstractBodyCell<AbstractBodyCellProps, any>>;
	    /**
	     * @inheritDoc
	     */
	    static getEditableCell(): Class<InputTextInLineBodyCell<AbstractBodyCellProps, any>>;
	    /***
	     * Méthode permettant de récupérer les propriétés d'une cellule
	     * @returns {any} Propriétés d'une cellule
	     */
	    static getCellProps(masterProps: any, isHeader: any): any;
	    static getCellKey(cellProps: any): any;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/columns" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	/**
	 * Propriétés du Columns
	 */
	export interface ColumnsProps extends HornetComponentProps {
	}
	/**
	 * Classe permettant de générer le rendu html des colonnes
	 */
	export class Columns extends HornetComponent<ColumnsProps, any> {
	    constructor(props?: ColumnsProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/content" {
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
	import { SortData } from "hornet-js-core/src/component/sort-data";
	import * as React from "react";
	import { HornetComponent, HornetComponentDatasourceProps }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps, IHornetComponentAsync, IHornetComponentDatasource } from "hornet-js-components/src/component/ihornet-component";
	import { ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { CellCoordinates }  from "hornet-js-react-components/src/widget/table/column/cell/cell-coordinates";
	import { ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	import { NavigateDirection }  from "hornet-js-react-components/src/widget/table/navigation-direction";
	import { HornetEvent } from "hornet-js-core/src/event/hornet-event";
	import { ICustomValidation } from "hornet-js-core/src/validation/data-validator";
	export const UNIT_SIZE = "em";
	export const UPDATE_COLUMN_VISIBILITY: HornetEvent<string | ColumnState>;
	/**
	 * Modes de d'interaction accessible au clavier
	 */
	export enum KeyboardInteractionMode {
	    /** Navigation en lecture seule avec les flèches */
	    NAVIGATION = 0,
	    /** Edition : même si les cellules ne sont pas éditables, des boutons d'édition peuvent être disponibles.
	     * Ils sont accédés via la tabulation */
	    ACTIONABLE = 1
	}
	export interface ContentProps extends HornetComponentProps, HornetComponentDatasourceProps {
	    id?: string;
	    /** Determine si le header du tableau doit etre fixe */
	    headerFixed?: boolean;
	    /** largeur du tabelau  */
	    width?: number;
	    /** fonction pour modifier le css des lignes du tableau */
	    customRowsClass?: Function;
	    /** Fonction déclenchée lors de la soumission du formulaire, lorsque celui-ci est valide */
	    onSubmit?: (data: any, item: any) => void;
	    /** Schema JSON de validation */
	    schema?: any;
	    /** Messages spécifiques à ce formulaire : utilisés pour la génération des messages d'erreur de validation */
	    formMessages?: any;
	    /** Identifiant du groupe de notifications auquel seront rattachées les notifications d'erreurs de validation
	     * du formulaire */
	    notifId?: string;
	    /** Identifiant du formulaire, obligatoire pour les fonctionnalités de submit*/
	    idForm?: string;
	    /**  titre du tableau (utilisé pour le caption lié à l'accessibilité */
	    title?: string;
	    /** gestion des events emit du content State */
	    contentState?: ContentState;
	    /** Détermine si des colonnes sont cachées par défaut */
	    hiddenColumns?: any;
	    withoutForm?: boolean;
	    isContentVisible?: boolean;
	    /** Indique si le header du tableau est visible */
	    headerHidden?: boolean;
	    summary?: string;
	    /** permet de surchager le comportement par défaut d'affichage de la ligne "Aucune information à présenter." */
	    emptyResult?: string | React.Component;
	    /**
	     * Valideurs customisés : permettent d'implémenter et de chaîner des règles de validation difficiles à mettre
	     * en oeuvre simplement avec un schéma json-schema. Ils sont appliqués après la validation basée sur le schéma
	     * de validation, donc les données du formulaire ont déjà éventuellement bénéficié de la coercition de types. */
	    customValidators?: ICustomValidation[];
	}
	/**
	 * Classe permettant de générer le rendu graphique d'uncomposant Tableau
	 */
	export class Content extends HornetComponent<ContentProps, any> implements IHornetComponentAsync, IHornetComponentDatasource {
	    readonly props: Readonly<ContentProps>;
	    protected sortData: SortData[];
	    protected tableTrsRef: any[];
	    protected tBodyRef: HTMLElement;
	    protected thElementToFocus: HTMLElement;
	    /** nombre total de colonnes affichées */
	    protected totalColumns: number;
	    /** colonnes masquées */
	    protected hiddenColumns: any;
	    protected spinnerLoader: any;
	    protected spinnerOverlay: any;
	    /** Collection de colonne avec coordonnées et état */
	    protected columnsWithVisibilityMap: Array<ColumnState>;
	    constructor(props?: ContentProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Calcule le nombre de colonnes à afficher
	     * @returns {number}
	     */
	    getTotalColumnsVisibleFromState(): number;
	    /**
	     * Méthode permettant de mettre à jour le nombre de colonnes
	     * @param hiddenColumns
	     */
	    handleChangeHiddenColumns(hiddenColumns: any): void;
	    /**
	     * Met à jour le colSpan des expandable cells
	     */
	    private updateExpandableCellsColSpan;
	    /**
	     * Met la props isEditing à true lorsque la cellule est en cours d'edition
	     * @param lineIndex
	     */
	    handleEdition(lineIndex: number): void;
	    /**
	     * Méthode qui controle l'affichage et la suppression du spinner
	     * @param flag booléen true pour l'afficher false sinon
	     */
	    displaySpinner(flag: boolean): void;
	    /**
	     * Méthode permettant de setter les data dans le tableau
	     * @param result tableau d'élément
	     */
	    protected setItem(result: any): void;
	    /**
	     * Méthode permettant de setter les data dans le tableau
	     * @param result tableau d'éléments
	     */
	    protected setItemPaginate(result: any): void;
	    /**
	     * Méthode permettant de tri les data
	     * @param result tableau d'éléments
	     * @param {SortData[]} sortData critères de tri.
	     */
	    protected sort(result: any, sortData: SortData[]): void;
	    /**
	     * @inheritDoc
	     */
	    setDataSource(value: any, callback?: () => any): this;
	    /**
	     * Fonction de validation du formulaire
	     * elle rappel la fonction de validation passé dans les props avec l'item qui
	     * etait en cours d'edition mis a jour avec les valeurs saisies
	     * @param data
	     */
	    handleSubmit(data: any): void;
	    /**
	     * Rendu du content
	     * @returns {any}
	     */
	    renderContent(): JSX.Element;
	    /**
	     * Rendu HTML du caption avec notion d'ordre de tri (si tri il y a)
	     * @param columns
	     * @returns {any}
	     */
	    renderCaption(columns: any): JSX.Element;
	    /**
	     * Evènement permettant de déclencher le tri
	     * @param sortData
	     */
	    onSort(sortData: SortData, thElement: any, compareMethod?: Function): void;
	    /**
	     * Rendu du header du tableau HTML
	     * @param columns: colonnes déclarées dans le composant Page
	     * @returns {any}
	     */
	    renderTHeader(columns: any): JSX.Element;
	    /**
	     * Rendu HTML d'un ligne du composant Table
	     * @param columns: colonnes déclaréesisContentVisible dans le composant Page
	     * @returns {any}
	     */
	    renderRowHeader(columns: Array<React.ReactElement<any>>): any[];
	    renderDatatableMessage(content: any): JSX.Element;
	    /**
	     * Crée le body du tableau HTML
	     * @param columns
	     * @returns {any}
	     */
	    renderTBody(columns: any): JSX.Element;
	    /**
	     * Rendu HTML d'une ligne LineAfter
	     * @param item
	     * @param columns
	     * @param lineIndex
	     * @param isBefore
	     * @returns {any}
	     */
	    renderExpandableRow(item: any, columns: Array<React.ReactElement<any>>, lineIndex: number, isBefore?: boolean): JSX.Element;
	    /**
	     * Rendu HTML d'une ligne de tableau
	     * @param item
	     * @param columns
	     * @param lineIndex
	     * @returns {any}
	     */
	    renderRowBody(item: any, columns: Array<React.ReactElement<any>>, lineIndex: number): JSX.Element;
	    /**
	     * Evènement lancé lors d'une déctection de sélection de ligne: ajout/suppression d'une class
	     */
	    handleChangeSelectedItems(selectedItems: any[]): void;
	    /**
	     * Initialisation des colonnes et des propriétés associéesev
	     * @returns {columns}
	     */
	    initColumnsProps(): any[];
	    /***
	     * Méthode permettant de fixer la largeur des colonnes dans le cas d'un header Fixe
	     * @param columns
	     * @returns {any}
	     */
	    fixColumnsWidth(columns: any): any;
	    /**
	     * Modifie le mode d'accessibilité au clavier
	     * @param mode NAVIGATION ou ACTIONABLE
	     */
	    protected handleChangeKeyboardMode(mode: KeyboardInteractionMode): void;
	    /**
	     * Méthode premettant d'afficher le spinner
	     * @returns {Table}
	     */
	    showSpinnerComponent(): this;
	    /**
	     * Méthode premettant de masquer le spinner
	     * @returns {Table}
	     */
	    hideSpinnerComponent(): this;
	    /**
	     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
	     */
	    protected closeAlert(): void;
	    /**
	     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
	     */
	    protected validateAlert(fct?: Function): void;
	    /***
	     * Déclenche l'affichage de la modale de suppression d'un partenaire
	     * @param message
	     * @param title
	     * @param {Function} fct fonction exécutée sur la validation
	     */
	    protected showAlert(message: string, title: string, fct: Function): void;
	    /**
	     *  Méthode permettant de cocher/décocher une(des) ligne(s) du tableau
	     * @param item (l'item selectioonné : deselectioné)
	     * @param selectAll (le teoggle de selection multiple
	     */
	    protected toggleSelectLines(item: any): void;
	    /**
	     * retourne l'intersection de deux liste
	     * @param object
	     * @param other
	     * @returns {any[]}
	     */
	    intersectionWith(object: any[], other: any[]): any[];
	    /**
	     * retourne l'intersection de deux liste
	     * @param object
	     * @param other
	     * @returns {any[]}
	     */
	    static intersectionWith(object: any[], other: any[]): any[];
	    /***
	     *
	     * @param coordinates coordonnées de la cellule qui a déclenché la navigation
	     * @param direction sens de la direction choisie
	     */
	    protected navigateToCell(coordinates: CellCoordinates, direction: NavigateDirection): void;
	    /***
	     * Méthode permettant de récupérer les propriétés d'une cellule
	     * @param columns: colonnes déclarées dans le composant Page
	     * @param columnIndex: Index de colonne
	     * @returns {any} Propriétés d'une cellule
	     */
	    getColProps(columns: any, columnIndex: number): any;
	    /**
	     * permet de supprimer ou d'ajouter l'item dans la liste selectedItems
	     * et de le supprimer dans le dataSource.
	     * @param selectedItems
	     * @param item
	     * @param orPush
	     */
	    protected removeOrPush(selectedItems: any[], item: any, orPush?: boolean): void;
	    /**
	     * Méthode qui met a jour le style css pour la selection des lignes
	     * @param instance
	     * @param isSelected
	     */
	    static updateClasslistSelectedLine(instance: HTMLTableCellElement, isSelected: boolean): void;
	    /**
	     * met à jour la visibilité d'une colonne dans la collection référentielle
	     * Cette méthode est déclenchée par un HornetEvent
	     * @param ev hornetEvent contenant la valeur en booléen sur le visibilité de la colonne
	     */
	    protected updateColumnVisibility(ev: HornetEvent<ColumnState | string>): void;
	    /**
	     * Initilisation des états de visibilité des colonnes
	     * On commence à true car les colonnes masquées par défaut
	     * seront traitées dans le ToggleColumnsButton
	     * et que celles ne pouvant pas être maquées et donc toujours visibles
	     * ne sont pas gérées dans le ToggleColumnsButton
	     */
	    protected initializeColumnVisibilityWithCoord(): void;
	    /**
	     * Propage dans le contentState le columnState de la première column visible
	     *
	     */
	    protected setFirstVisibleColumnState(): void;
	    /**
	     * méthode appelée lors de l'effacement du spinner
	     */
	    protected onHideSpinner(): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/footer" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	/**
	 * Propriétés du composant pagination de tableau Hornet
	 */
	export interface FooterProps extends HornetComponentProps {
	    /** Classe CSS personnalisée */
	    className?: string;
	    /** contentState de gestion des events d'edition */
	    contentState?: ContentState;
	    /** indicateur de disabled */
	    disabled?: boolean;
	}
	/**
	 * Outils de pagination de tableau
	 */
	export class Footer extends HornetComponent<FooterProps, any> {
	    static defaultProps: {
	        className: string;
	    };
	    constructor(props: FooterProps, context?: any);
	    componentWillUnmount(): void;
	    /**
	     * cache le menuActions lorsque la table est en cours d'edition.
	     * @param lineIndex
	     */
	    handleEdition(lineIndex: number): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * ajoute la props disabled au pager.
	     * @returns {Array}
	     */
	    setChildrenDisabled(): Array<any>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/header" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { TableState, ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	import { PaginateDataSource } from "hornet-js-core/src/component/datasource/paginate-datasource";
	/**
	 * Propriétés du composant Header de tableau Hornet
	 */
	export interface HeaderProps extends HornetComponentProps {
	    /**  Identifiant unique */
	    id?: string;
	    /** Identifiant du parent */
	    parentId?: string;
	    /** Titre du Table */
	    title: string;
	    /** message qui affiche le nombre total d'item dans le header */
	    libelleNombreTotalItem?: string;
	    /** Affichage du bouton d'accessibilité */
	    showIconInfo?: boolean;
	    /** Affichage du bouton d'accessibilité et du menu action*/
	    hideMenuactions?: boolean;
	    /** Affichage de l'action permettant de masquer/afficher les colonnes **/
	    toggleColumns?: boolean;
	    /** Informations de colonnes */
	    columns?: any;
	    /** Elements du table */
	    items?: any[];
	    /** Elements sélectionnés du Table */
	    selectedItems?: number[];
	    tableState?: TableState;
	    /** content state */
	    contentState?: ContentState;
	    /** liste des PaginateDataSource de tous les <Content.tsx> du composant table, s'ils exitent */
	    dataSourcesList?: PaginateDataSource<any>[];
	}
	/**
	 * Header de tableau
	 */
	export class Header extends HornetComponent<HeaderProps, any> {
	    protected headerRef: any;
	    protected hiddenColumns: any;
	    constructor(props: HeaderProps, context?: any);
	    componentWillUnmount(): void;
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Méthode permettant de mettre à jour le nombre de colonnes
	     * @param hiddenColumns
	     */
	    handleChangeHiddenColumns(hiddenColumns: any): void;
	    /**
	     * Rendu HTML du menu des actions
	     * @returns {any}
	     */
	    renderMenuActions(): JSX.Element;
	    /**
	     * cache le menuActions lorsque la table est en cours d'edition.
	     * @param lineIndex
	     */
	    handleEdition(lineIndex: number): void;
	    /**
	     *
	     * @param selectedItems
	     * @param items
	     */
	    handleChangeDataTable(selectedItems: any[], items?: any[]): void;
	    /**
	     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
	     */
	    protected closeAlert(): void;
	    /**
	     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
	     */
	    protected validateAlert(fct?: Function): void;
	    /***
	     * Déclenche l'affichage de la modale de suppression d'un partenaire
	     * @param message
	     * @param title
	     * @param {Function} fct fonction exécutée sur la validation
	     */
	    protected showAlert(message: string, title: string, fct: Function): void;
	    /**
	     * fonction qui retourne la liste des items selectionés sur l'ihm lors de la pagination
	     * @returns {any[]}
	     */
	    protected getSelectedItemsForAllContent(): any[];
	    /**
	     * fonction qui retourne la liste des items selectionés
	     * @returns {any[]}
	     */
	    protected getAllSelectedItems(): any[];
	    /**
	     * Retourne la somme totale des items de tous les dataSource de tous les contents
	     * @returns {number}
	     */
	    protected getTotalItemsForAllDataSource(): number;
	    /**
	 * Retourne la somme totale des items de tous les dataSource de tous les contents
	 * @returns {number}
	 */
	    protected getPaginationForFirstDataSource(): {};
	    /**
	     * Retourne la somme totale des items de tous les dataSource de tous les contents
	     * @returns {number}
	     */
	    protected getTotalSelectedItemsForAllDataSource(): number;
	    handlePaginationChange(result: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/line" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	export interface LineProps extends HornetComponentProps {
	    displayed?: boolean;
	    colsPan?: number;
	    visible?: (value: any) => boolean;
	}
	/**
	 * Classe permettant de générer le rendu html d'ajout de ligne après
	 */
	export class Line<P extends LineProps, ColumnState> extends HornetComponent<P, ColumnState> {
	    static defaultProps: {
	        displayed: boolean;
	    };
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/menu-actions" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	/**
	 * Propriétés du MenuActions
	 */
	export interface MenuActionsProps extends HornetComponentProps {
	    id?: string;
	    items?: any;
	    actions?: Array<any>;
	    selectedItems?: Array<any>;
	    showAlert?: Function;
	    showIconInfo?: boolean;
	    toggleColumns?: boolean;
	    columns?: any;
	    toggleColumnsButton?: typeof HornetComponent;
	}
	/**
	 * Classe permettant de générer le rendu html du Menu d'actions d'un tableau
	 */
	export class MenuActions<P extends MenuActionsProps> extends HornetComponent<P, any> {
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * retourne les actions du menu contextuel
	     * @returns {Array}
	     */
	    getMenuActions(): {
	        priorityActions: any[];
	        dropdownItems: any[];
	    };
	    /**
	     * Rendu Html du composant dropDown du Header du menu Table
	     * @param actions
	     * @returns {any}
	     */
	    renderDropDownActions(actions: any): JSX.Element;
	    /**
	     * Rendu Html des actions prioritaires du Header du menu Table
	     * @param actions
	     * @returns {any}
	     */
	    static renderPriorityActions(actions: any): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/navigation-direction" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	/**
	 * Direction de navigation de cellule de tableau
	 */
	export enum NavigateDirection {
	    RIGHT = 0,
	    LEFT = 1,
	    TOP = 2,
	    BOTTOM = 3,
	    HOME_LINE = 4,
	    END_LINE = 5,
	    HOME_COL = 6,
	    END_COL = 7
	}
	
}

declare module "hornet-js-react-components/src/widget/table/spinner-table" {
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
	import { SpinnerComponent, SpinnerProps }  from "hornet-js-react-components/src/widget/spinner/spinner-component";
	export interface SpinnerTableProps extends SpinnerProps {
	    nbColumns?: number;
	    width?: number;
	    height?: number;
	    className?: string;
	}
	/**
	 * Composant représentant un tableau en cours de chargement
	 * dans une fenêtre modale en attendant la fin d'une action longue.
	 */
	export class SpinnerLoader<P extends SpinnerTableProps, S extends SpinnerTableProps> extends SpinnerComponent<P, S> {
	    readonly props: Readonly<SpinnerTableProps>;
	    constructor(props?: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Render spinner
	     */
	    renderLoader(): JSX.Element;
	}
	export class SpinnerOverlay<P extends SpinnerTableProps, S extends SpinnerTableProps> extends SpinnerComponent<P, S> {
	    readonly props: Readonly<SpinnerTableProps>;
	    protected visibilityChange: boolean;
	    constructor(props?: P, context?: any);
	    componentWillUpdate(nextProps: any, nextState: any, nextContext: any): void;
	    componentDidUpdate(nextProps: any, nextState: any, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/table-button-info-accessibilite" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { ButtonInfoAccessibilite, ButtonInfoAccessibiliteProps }  from "hornet-js-react-components/src/widget/button/button-info-accessibilite";
	/**
	 * Bouton et modale d'information sur l'accessibilité clavier du composant Table
	 */
	export class TableButtonInfoAccessibilite extends ButtonInfoAccessibilite<ButtonInfoAccessibiliteProps> {
	    static defaultProps: {
	        message: any;
	        shortcutDescriptions: ({
	            shortcuts: string[];
	            description: any;
	            or: boolean;
	            and?: undefined;
	        } | {
	            shortcuts: string[];
	            and: boolean;
	            description: any;
	            or?: undefined;
	        } | {
	            shortcuts: string[];
	            description: any;
	            or?: undefined;
	            and?: undefined;
	        })[];
	    };
	}
	
}

declare module "hornet-js-react-components/src/widget/table/table-state" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import * as events from "events";
	import { CellCoordinates }  from "hornet-js-react-components/src/widget/table/column/cell/cell-coordinates";
	import { ColumnState } from "hornet-js-react-components/src/widget/table/column";
	export class TableState extends events.EventEmitter {
	    static INDEX_CHANGE_EVENT: string;
	    static RESIZE_EVENT: string;
	    protected contentsState: ContentState[];
	    protected index: number;
	    addContent(contentState: ContentState): void;
	    removeContent(contentState: ContentState): void;
	    removeContents(): void;
	    setIndexAfterItemsChangeEvent(items: any): void;
	    getIndex(): number;
	}
	export class ContentState extends events.EventEmitter {
	    static FOCUS_CHANGE_EVENT: string;
	    static ITEMS_CHANGE_EVENT: string;
	    static RESIZE_EVENT: string;
	    static EDITION_CLIC_EVENT: string;
	    static BLUR_EVENT: string;
	    static TOGGLE_COLUMNS_EVENT: string;
	    static UPDATE_TABLE_DONE: string;
	    protected focusedCell: CellCoordinates;
	    items: any[];
	    itemInEdition: any;
	    hiddenColumns: any;
	    firstVisibleColumnState: ColumnState;
	    protected oldFirstVisibleColumnState: ColumnState;
	    hasCheckColumnMassSelection: boolean;
	    keyColumnMassSelection: string;
	    setFocusOn(focusedCell: CellCoordinates): void;
	    setItemInEdition(itemInEditionValue: any, lineIndex: number): void;
	    setItems(items: any[]): void;
	    setHiddenColumns(hiddenColumns: any): void;
	    setFirstVisibleColumnState(columnState: ColumnState): void;
	    setHasCheckColumnMassSelection(value: boolean): void;
	    setKeycolumnMassSelection(keyColumn: string): void;
	    getFocusedCell(): CellCoordinates;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/table" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { PaginateDataSource } from "hornet-js-core/src/component/datasource/paginate-datasource";
	import { TableState, ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	/**
	 * Propriétés du composant Table
	 */
	export interface TableProps extends HornetComponentProps {
	    /** identifiant unique  */
	    id: string;
	    /** Classe CSS personnalisée */
	    className?: string;
	    width?: number;
	    /** Tableau visible ou non */
	    isVisible?: boolean;
	}
	/**
	 * Component Table
	 */
	export class Table extends HornetComponent<TableProps, any> {
	    protected tableState: TableState;
	    protected contentState: ContentState;
	    static defaultProps: {
	        className: string;
	        isVisible: boolean;
	    };
	    constructor(props: TableProps, context?: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    componentWillUnmount(): void;
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Méthode de redimensionnement du s
	     * @param width
	     */
	    handleResize(width: number): void;
	    /**
	     * rendu du composant table
	     * @returns {any}
	     */
	    protected renderTable(myContents: any): JSX.Element;
	    /**
	     * Méthode permettant de remonter les informations liées aux colonnes
	     * @returns {Array}
	     */
	    protected getColumnsInformation(myContents: any): {};
	    /**
	     * fonction qui retourne la liste des PaginateDataSource de tous les contents du composant table
	     * @returns {PaginateDataSource<any>[]}
	     */
	    protected getContentsDataSources(myContents: any): PaginateDataSource<any>[];
	    /**
	     * Création d'un composant React
	     * @returns {any}
	     */
	    protected renderHeader(myComponent: any, myContents: any): JSX.Element;
	    /**
	     * Création d'un composant React
	     * @returns {any}
	     */
	    protected renderFooter(): JSX.Element;
	    /**
	     * Rendu Html du/des content(s) du Table
	     * @param myHeader
	     * @param myContents
	     * @returns {any}
	     */
	    protected renderContent(myHeader: any, myContents: any): any[] | JSX.Element;
	    /**
	     * Permet de récupérer les colonnes masquées par défaut
	     * @param myHeader
	     * @returns {any}
	     */
	    protected getHiddenColumns(myHeader: any): any;
	    protected hasCheckColumnChildren(): boolean;
	    protected getCheckColumnChildrenDeep(startElement: any, childrenList?: any[]): any[];
	}
	
}

declare module "hornet-js-react-components/src/widget/table/toggle-columns-button" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	export interface ToggleColumnsButtonProps extends HornetComponentProps {
	    /**
	     *
	     */
	    columns?: any;
	    /**
	     * colonnes masquées par défaut
	     */
	    hiddenColumns?: any;
	    /**
	     * Méthode appelée après chaque changement
	     * @param any
	     */
	    onChange?: (any: any) => void;
	    /**
	     * Affiche de l'option de sélection complet
	     */
	    selectAllItem?: boolean;
	    itemTitleDisplay?: string;
	    itemTitleHide?: string;
	}
	/**
	 * Classe permettant de générer le rendu html du bouton permettant d'afficher/masquer les colonnes
	 */
	export class ToggleColumnsButton extends HornetComponent<ToggleColumnsButtonProps, any> {
	    static defaultProps: {
	        selectAllItem: boolean;
	        itemTitleToggle: string;
	    };
	    readonly props: Readonly<ToggleColumnsButtonProps>;
	    constructor(props: ToggleColumnsButtonProps, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Rendu du HTML
	     * @param column
	     * @returns {any}
	     */
	    protected renderDropDownItem(column: any): JSX.Element;
	    /**
	     * méthode permettant de configurer les items de la liste
	     * @returns {Array}
	     */
	    protected configureDropDownItems(): any[];
	    /**
	     * Méthode de sélection/déselection associé au "Sélectionner tout"
	     */
	    protected handleToggleAllColumns(): void;
	    /**
	     * Méthode permettant de masquer/afficher une colonne
	     * @param keyColumn: string
	     */
	    protected handleToggleColumn(keyColumn: string): void;
	    /**
	     * contrôle si l'état de toutes les checkbox afin de gérer l'état de la checkbox "selectAll"
	     */
	    controlSelectAllChecked(): void;
	    /**
	     * Permet de connaître l'état des colonnes sélectionnées
	     * @returns {{}}
	     */
	    protected getColumnsState(): {};
	    /**
	     * Méthode de toggleColumn
	     * @param keyColumn
	     * @param checked
	     */
	    protected toggleColumn(keyColumn: string, checked?: boolean): void;
	    /**
	     * Permet de cocher/décocher une checkbox
	     * @param keyColumn
	     * @param checked
	     */
	    toggleCheckBox(keyColumn: string, checked?: boolean): void;
	    /**
	     * Permet de configurer l'item selectAll
	     * @returns {{label: JSX.Element, action: any, className: string, key: string}}
	     */
	    protected configureSelectAllItem(): any;
	    /**
	     * Méthode permettant de déterminer si toutes les cases sont cochées
	     * @returns {boolean}
	     */
	    protected isAllChecked(): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/user/user" {
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
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { UserInformations } from "hornet-js-utils/src/authentication-utils";
	/**
	 * Propriétés User
	 */
	export interface UserProps extends HornetComponentProps {
	    loginUrl?: string;
	    loginLabel?: string;
	    logoutUrl?: string;
	    logoutLabel?: string;
	    defaultUserLabel?: string;
	    id?: string;
	    title?: string;
	}
	export interface UserComponentInformations {
	    user?: UserInformations;
	    url?: string;
	    text?: string;
	    login?: string;
	    logoutLabel?: string;
	    defaultUserLabel?: string;
	    loginLabel?: string;
	    title?: string;
	}
	/**
	 * Composant User
	 */
	export class User<UserProps, S> extends HornetComponent<any, any> {
	    static defaultProps: {
	        loginUrl: any;
	        logoutUrl: any;
	        expand: boolean;
	        user: boolean;
	    };
	    constructor(props: any, context?: any);
	    /**
	     * @inheritDoc
	     * @param nextProps
	     * @param nextState
	     * @param context
	     */
	    componentDidUpdate(nextProps: any, nextState: any, context: any): void;
	    /**
	     * @inheritDoc
	     * @param nextProps
	     * @param nextState
	     * @param nextContext
	     */
	    componentWillUpdate(nextProps: any, nextState: any, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    componentDidMount(): void;
	    render(): JSX.Element;
	    /**
	     * Display user info
	     * @returns JSX
	     */
	    protected updateUserInfosButton(): UserComponentInformations;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/action-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { ActionBodyCell, ActionBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/action/action-body-cell";
	import { ActionHeaderCell, ActionHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/action/action-header-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	export interface ActionColumnProps extends ColumnProps {
	    /** src de l'image */
	    srcImg?: JSX.Element | string;
	    /** className de l'image */
	    classNameImg?: string;
	    /** Url de l'action à déclencher */
	    url?: string;
	    /** action à déclencher */
	    action?: Function;
	    /** Fonction appelée pour rendre visible on non la cellule */
	    visible?: Function;
	    /** Message de confirmation à afficher sur l'action */
	    messageAlert?: string;
	    /** Titre du message de confirmation à afficher sur l'action */
	    titleAlert?: string;
	    /** chaine de remplacement des valeurs undefined dans le templating */
	    replaceUndef?: string;
	    /** texte alternatif pour les picto/title des images */
	    alt?: string;
	    /** pour valoriser l'indicateur aria-has-popup */
	    hasPopUp?: boolean;
	    disabled?: Function | boolean;
	    label?: string;
	    /** Clé sur laquelle se base la méthode shouldComponentUpdate */
	    keyShouldComponentUpdate?: string;
	}
	export interface ActionColumnState extends ColumnState {
	}
	/**
	 * Classe permettant de gérer les colonnes de type date
	 */
	export class ActionColumn<T extends ActionColumnProps, S extends ActionColumnState> extends Column<ActionColumnProps, ActionColumnState> {
	    static defaultProps: any;
	    readonly props: ActionColumnProps;
	    /**
	     * Getter pour le composant générant le entête de colonne
	     * @return Class<HeaderCell<HeaderCellProps, any>>
	     */
	    static getHeaderCell(): Class<ActionHeaderCell<ActionHeaderCellProps, any>>;
	    /**
	     * Getter pour le composant générant le contenu de colonne
	     * @return Class<BodyCell<BodyCellProps, any>>
	     */
	    static getBodyCell(props: any): Class<ActionBodyCell<ActionBodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/check-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { CheckBodyCell }  from "hornet-js-react-components/src/widget/table/column/cell/check/check-body-cell";
	import { CheckHeaderCell }  from "hornet-js-react-components/src/widget/table/column/cell/check/check-header-cell";
	import { BodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/body-cell";
	import { HeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/header-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	export interface CheckColumnProps extends ColumnProps {
	    altSelect?: string;
	    altUnselect?: string;
	}
	/**
	 * Classe permettant de gérer les colonnes de type CheckBox
	 */
	export class CheckColumn<T extends CheckColumnProps, S extends ColumnState> extends Column<T, S> {
	    static defaultProps: any;
	    readonly props: Readonly<CheckColumnProps>;
	    /**
	     * @inheritDoc
	     */
	    static getBodyCell(props: any): Class<CheckBodyCell<BodyCellProps, any>>;
	    /**
	     * Getter pour le composant générant le entête de colonne
	     * @return Class<HeaderCell<HeaderCellProps, any>>
	     */
	    static getHeaderCell(): Class<CheckHeaderCell<HeaderCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/date-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { DateBodyCell }  from "hornet-js-react-components/src/widget/table/column/cell/date/date-body-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { BodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/body-cell";
	export interface DateColumnProps extends ColumnProps {
	    /** format d'affichage de la valeur */
	    format?: string;
	    /** Format de la valeur en entrée si besoin de parser */
	    inputFormat?: string;
	}
	/**
	 * Classe permettant de gérer les colonnes de type date
	 */
	export class DateColumn<P extends DateColumnProps, S extends ColumnState> extends Column<DateColumnProps, S> {
	    static defaultProps: any;
	    readonly props: Readonly<DateColumnProps>;
	    static getBodyCell(): Class<DateBodyCell<BodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/edition-action-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { EditionActionBodyCell, EditionActionBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/action/edition-action-body-cell";
	import { ActionHeaderCell, ActionHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/action/action-header-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	export interface EditionActionColumnProps extends ColumnProps {
	    /** Fonction appelée pour rendre visible on non la cellule */
	    visible?: Function;
	    /** Message de confirmation à afficher sur l'action */
	    messageAlert?: string;
	    /** Titre du message de confirmation à afficher sur l'action */
	    titleAlert?: string;
	    /** Titre du bouton edition d'une ligne du tableau */
	    titleEdit?: string;
	    /** Titre du bouton enregistrer l'edition d'une ligne du tableau */
	    titleSave?: string;
	    /** Titre du bouton annulation de l'edition d'une ligne du tableau */
	    titleCancel?: string;
	    /** chaine de remplacement des valeurs undefined dans le templating */
	    replaceUndef?: string;
	    /** Fonction exécutée au moment de l'annulation de l'edition d'une ligne */
	    handleCancel?: Function;
	}
	/**
	 * Classe permettant de gérer les colonnes de type edition rapide action
	 */
	export class EditionActionColumn<T extends EditionActionColumnProps, S extends ColumnState> extends Column<T, S> {
	    static defaultProps: any;
	    readonly props: Readonly<EditionActionColumnProps>;
	    /**
	 * Getter pour le composant générant le entête de colonne
	 * @return Class<HeaderCell<HeaderCellProps, any>>
	 */
	    static getHeaderCell(): Class<ActionHeaderCell<ActionHeaderCellProps, any>>;
	    /**
	     * @inheritDoc
	     */
	    static getBodyCell(props: any): Class<EditionActionBodyCell<EditionActionBodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/input-text-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	import { InputTextBodyCell, InputTextBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/input/input-text-body-cell";
	export interface InputTextColumnProps extends ColumnProps {
	    /** format d'affichage de la valeur */
	    format?: string;
	    /** Format de la valeur en entrée si besoin de parser */
	    inputFormat?: string;
	}
	/**
	 * Classe permettant de gérer les colonnes de type input
	 */
	export class InputTextColumn<P extends InputTextColumnProps, S extends ColumnState> extends Column<P, S> {
	    static defaultProps: any;
	    /**
	     * @inheritDoc
	     */
	    static getBodyCell(props: any): Class<InputTextBodyCell<InputTextBodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/more-info-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { ActionColumn, ActionColumnProps }  from "hornet-js-react-components/src/widget/table/column/action-column";
	import { ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { MoreInfoBodyCell }  from "hornet-js-react-components/src/widget/table/column/cell/more-info/more-info-body-cell";
	import { BodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/body-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	/**
	 * Classe permettant de gérer les colonnes de type CheckBox
	 */
	export class MoreInfoColumn<T extends ActionColumnProps, S extends ColumnState> extends ActionColumn<T, S> {
	    static defaultProps: any;
	    constructor(props: T, context: any);
	    /**
	 * @inheritDoc
	 */
	    static getBodyCell(props: any): Class<MoreInfoBodyCell<BodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/yesno-column" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	import { Column, ColumnProps, ColumnState }  from "hornet-js-react-components/src/widget/table/column";
	import { YesNoBodyCell }  from "hornet-js-react-components/src/widget/table/column/cell/yesno/yesno-body-cell";
	import { BodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/body-cell";
	import { Class } from "hornet-js-utils/src/typescript-utils";
	/**
	 * Classe permettant de gérer les colonnes de type date
	 */
	export class YesNoColumn<T extends ColumnProps, S extends ColumnState> extends Column<T, S> {
	    static defaultProps: any;
	    /**
	     * @inheritDoc
	     */
	    static getBodyCell(props: any): Class<YesNoBodyCell<BodyCellProps, any>>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/line/line-after" {
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
	import { Line, LineProps }  from "hornet-js-react-components/src/widget/table/line";
	/**
	 * Classe permettant de générer le rendu html d'ajout de ligne après
	 */
	export class LineAfter<T extends LineProps, S extends LineProps> extends Line<LineProps, S> {
	    readonly props: Readonly<LineProps>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/line/line-before" {
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
	import { Line, LineProps }  from "hornet-js-react-components/src/widget/table/line";
	/**
	 * Classe permettant de générer le rendu html d'ajout de ligne après
	 */
	export class LineBefore<T extends LineProps, S extends LineProps> extends Line<LineProps, S> {
	    readonly props: Readonly<LineProps>;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell" {
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
	import { AbstractCell, AbstractCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-cell";
	export interface AbstractBodyCellProps extends AbstractCellProps {
	    /** chaine de remplacement des valeurs undefined dans le templating */
	    replaceUndef?: string;
	}
	/**
	 * Classe permettant de générer le rendu html d'un cellule du corps d'un tableau
	 */
	export class AbstractBodyCell<P extends AbstractBodyCellProps, S> extends AbstractCell<P, S> {
	    protected defaultClassName: string;
	    protected focus: boolean;
	    constructor(props: P, context?: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    componentDidUpdate(nextProps: any, nextState: any, nextContext: any): void;
	    componentWillReceiveProps(nextProps: P, nextContext: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * Retourne la value de la cellule du tableau grâce au mapping du keyColumn
	     * // WARNING: keyColumn, value et replaceUndef sont obligatoire
	     * @param props
	     */
	    static getTemplatedValue(props: any): any;
	    /**
	     * Retourne le title de la cellule du tableau grâce au mapping du keyColumn
	     * // WARNING: keyColumn, value et replaceUndef sont obligatoire
	     * @param props
	     */
	    static getTemplatedTitleCell(props: any): any;
	    renderCell(): any;
	    /**
	     * gestion de l'event on hover
	     */
	    getCellTitle(): string;
	    /**
	     * Return l'indicateur Disabled
	     * @returns {boolean}
	     */
	    setDisabled(): boolean;
	    /***
	     * Retourne les propriétés par défaut d'un élément de type Td
	     * @returns {{ref: ((instance:HTMLTableCellElement)=>undefined), className: string, onKeyDown: any, tabIndex: number, aria-selected: (((props:any)=>boolean)|any), onFocus: any, style: any}}
	     */
	    getDefaultTdProps(): {
	        ref: (instance: HTMLTableCellElement) => void;
	        className: string;
	        onKeyDown: any;
	        tabIndex: number;
	        "aria-selected": any;
	        onFocus: (e: any) => void;
	        disabled: boolean;
	        style: P["style"];
	        key: string;
	        id: string;
	        title: any;
	    };
	    /**
	     *
	     * @param e
	     */
	    moveCaretAtEnd(e: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/abstract-cell" {
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
	import { HornetComponent }  from "hornet-js-react-components/src/widget/component/hornet-component";
	import { HornetComponentProps } from "hornet-js-components/src/component/ihornet-component";
	import { CellCoordinates }  from "hornet-js-react-components/src/widget/table/column/cell/cell-coordinates";
	import { ContentState }  from "hornet-js-react-components/src/widget/table/table-state";
	import { DataSource } from "hornet-js-core/src/component/datasource/datasource";
	export interface AbstractCellProps extends HornetComponentProps {
	    id?: string;
	    isSelected?: boolean;
	    isEditing?: boolean;
	    style?: any;
	    value?: any;
	    coordinates?: CellCoordinates;
	    isFocused?: boolean;
	    toggleSelectLines?: (item: any, selectAll?: boolean) => void;
	    handleChangeKeyboardMode?: any;
	    keyboardMode?: number;
	    contentState?: ContentState;
	    dataSource?: DataSource<any>;
	    keyColumn?: string;
	    handleKeyDown?: () => void;
	    isHeader?: boolean;
	    navigateFct?: (CellCoordinates: any, NavigateDirection: any) => void;
	    className?: string;
	}
	/**
	 * Classe abstraite d'une cellule de tableau
	 */
	export abstract class AbstractCell<P extends AbstractCellProps, S> extends HornetComponent<P, any> {
	    /** Référence vers l'élémeent du DOM HTML correspondant à la cellule */
	    tableCellRef: HTMLTableCellElement;
	    constructor(props: P, context: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    componentWillUnmount(): void;
	    /**
	     * Gère les évènements clavier déclenchés par les cellules
	     * @param e évènement
	     */
	    protected handleKeyDown(e: KeyboardEvent): void;
	    /**
	     * Gère les évènements clavier déclenchés par les cellules permettant de sélectionner des cellules de tableau
	     * @param e évènement clavier
	     */
	    protected handleKeyDownWithModifier(e: KeyboardEvent): void;
	    /**
	     * Méthode permettant de récupérer la valeur d'un champ input
	     * @param node
	     * @returns {string}
	     */
	    getInputValue(node: any): string;
	    /**
	     * met a true la props isEditing a true lorsque la cellule est en cours d'edition
	     * @param lineIndex
	     */
	    handleEdition(lineIndex: number): void;
	    /**
	     * Action exécutée sur un click de la checkbox
	     * @param e
	     */
	    handleBlur: (oldCell: CellCoordinates) => void;
	    /**
	     * Méthode encapsulant le traitement qui permet de gerer la perte de focus sur une cellule
	     * cette méthode à vocation à permettre la surcharge
	     * @param oldCell
	     */
	    protected blurActions(tableCellRef: any): void;
	    /**
	     * Mise à jour de l'index de tabulation et positionnement facultatif du focus
	     * pour la cellule du tableau
	     * @param tableCellRef cellule à atteindre
	     * @param value valeur pour tabIndex de la cellule
	     * @param isFocus indicateur si le focus doit aussi être appliqué
	     */
	    static setCellTabIndex(tableCellRef: any, value: number, isFocus?: boolean): void;
	    /**
	     * methode qui permet de mettre le focus sur une cellule
	     * @param oldCell cellule à vérifier pour un départ
	     * @param newCell cellule à vérifier pour l'arrivée
	     */
	    handleFocus: (oldCell: CellCoordinates, newCell: CellCoordinates) => void;
	    /**
	     * Permet de mettre le focus sur l'AbstractBodyCell
	     * Si le contenu de la cellule est de type HTMLElement (button ou input text etc), on place le focus sur cet element
	     * sinon on met le focus sur toute la cellule
	     */
	    handleCellFocus(tableCellRef: any): any;
	    /**
	     * Permet de sélectionner la valeur dans la cellule
	     */
	    handleDoubleClick(tableCellRef: any): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    /**
	     * @returns {boolean} la valeur de l'attribut HTML tabIndex à attribuer à la cellule
	     */
	    protected getTabIndex(): number;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/abstract-header-cell" {
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
	import { SortData } from "hornet-js-core/src/component/sort-data";
	import { AbstractCell, AbstractCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-cell";
	import { ColumnState } from "hornet-js-react-components/src/widget/table/column";
	export interface SortTitleInformations {
	    ariasort: "none" | "ascending" | "descending" | "other";
	    title: string;
	}
	export interface AbstractHeaderCellProps extends AbstractCellProps {
	    /** Nom de la colonne, correspondant au nom de la propriété contenant la valeur d'une cellule */
	    keyColumn: string;
	    /** Fonction déclenchée lors d'un clic sur une colonne, déclenchant le tri sur celle-ci */
	    onSort?: (SortData: any) => void;
	    /** Tri en cours sur le tableau */
	    sortData?: SortData;
	    /** Texte complet lorsque le titre est un acronyme. La propriété lang devrait être valorisée dans ce cas. */
	    abbr?: string;
	    /** Propriétés de tri sur la colonne */
	    sort?: boolean;
	    /** indique que le header est fixe */
	    headerFixed: boolean;
	    /** Titre de la colonne */
	    title?: string | JSX.ElementClass;
	    sortable?: boolean;
	    sortByTitle?: boolean;
	    className?: string;
	    compareMethod?: (sortData: SortData, a: any, b: any) => void;
	    /** Label de substitution dans le cas d'un tri custom ascendant */
	    orderByLabelUp?: string;
	    /** Label de substitution dans le cas d'un tri custom descendant */
	    orderByLabelDown?: string;
	}
	/**
	 * Classe permettant de générer le rendu html d'un cellule du header d'un tableau
	 */
	export class AbstractHeaderCell<P extends AbstractHeaderCellProps, S> extends AbstractCell<P, S> {
	    constructor(props: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: AbstractHeaderCellProps, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    render(): JSX.Element;
	    renderCell(): any;
	    /***
	     * Retourne les propriétés par défaut d'un élément de type Td
	     * @returns {{ref: ((instance:HTMLTableCellElement)=>undefined), className: string, onKeyDown: any, tabIndex: number, aria-selected: (((props:any)=>boolean)|any), onFocus: any, style: any}}
	     */
	    getDefaultThProps(lineIndex: number): {
	        ref: (instance: HTMLTableCellElement) => void;
	        className: string;
	        onFocus: any;
	        onBlur: any;
	        onKeyDown: any;
	        style: P["style"];
	        key: string;
	        id: string;
	        scope: string;
	    };
	    protected handleSortTitle(isTriActifSurColonne: boolean, ariasort: "none" | "ascending" | "descending" | "other"): SortTitleInformations;
	    /**
	     * Génère le texte du bouton de tri par colonne
	     * @param columnTitle titre de la colonne
	     * @param sortDirection description de la direction du tri
	     */
	    protected getSortByTitle(columnTitle: string | JSX.ElementClass, sortDirection: string, isTriActifSurColonne: any): string;
	    /**
	     * Test si une column est trié
	     * @param column colonne de tableau
	     * @param sort données de tri courant du tableau
	     * @return true lorsque le tri du tableau est actif sur la colonne indiquée
	     */
	    isSortedColumn(sort: SortData): boolean;
	    /**
	     * Retourne le tabIndex pour les éléments du tableau
	     * Si la colonne est la première on autorise la tabulation
	     * @returns valeur pour l'index de tabulation
	     */
	    protected getTabIndexFullKind(): number;
	    /**
	     * Gestion des tabulations pour la première colonne visible
	     */
	    protected handleChangeHiddenColumns(hiddenColumns: any, firstVisibleColumnState: ColumnState, oldFirstiVisibleColumnState: ColumnState): void;
	    /**
	     * Prise en compte de la sortie du mode edition
	     * @param lineIndex
	     */
	    handleEditionQuit(lineIndex: number): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface BodyCellProps extends AbstractBodyCellProps {
	    /** Nom de la colonne, correspondant au nom de la propriété contenant la valeur d'une cellule */
	    keyColumn: string;
	}
	/**
	 * Classe permettant de générer le rendu html d'un cellule du corps d'un tableau
	 */
	export class BodyCell<P extends BodyCellProps, S> extends AbstractBodyCell<P, S> {
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/cell-coordinates" {
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
	 * @version v5.2.3
	 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
	 * @license CECILL-2.1
	 */
	/**
	 * Coordonnées de cellule de tableau
	 */
	export class CellCoordinates {
	    column: number;
	    row: number;
	    constructor(column: number, row: number);
	    isSame(coord: CellCoordinates): boolean;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/header-cell" {
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
	import { AbstractHeaderCell, AbstractHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-header-cell";
	export interface HeaderCellProps extends AbstractHeaderCellProps {
	}
	/**
	 * Classe Permettant de générer le rendu html d'un cellule d'entête de tableau
	 */
	export class HeaderCell<P extends HeaderCellProps, S> extends AbstractHeaderCell<P, any> {
	    constructor(props: P, context?: any);
	    static defaultProps: {
	        sort: boolean;
	    };
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: HeaderCellProps, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * Rendu HTML d'une entête de colonne de tableau
	     */
	    protected getColumnTriComponent(): JSX.Element | JSX.ElementClass;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/action/action-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	import * as React from "react";
	export interface ActionBodyCellProps extends AbstractBodyCellProps {
	    /** src de l'image */
	    srcImg?: JSX.Element | string;
	    /** className de l'image */
	    classNameImg?: string;
	    /** Url de l'action à déclencher */
	    url?: string;
	    /** action à déclencher */
	    action?: Function;
	    /** Fonction appelée pour rendre visible on non la cellule */
	    visible?: Function;
	    /** fonction appelée si une confirmation est demandée */
	    showAlert?: Function;
	    /** Message de confirmation à afficher sur l'action */
	    messageAlert?: string;
	    /** Titre du message de confirmation à afficher sur l'action */
	    titleAlert?: string;
	    /** Indicateur d'ouverture d'un popup suite à clic sur bouton */
	    hasPopUp?: string;
	    label?: string;
	    /** Clé sur laquelle se base la méthode shouldComponentUpdate */
	    keyShouldComponentUpdate?: string;
	}
	export class ActionBodyCell<P extends ActionBodyCellProps, S> extends AbstractBodyCell<P, S> {
	    protected title: string;
	    private inferedAlertMessage;
	    private inferedAlertTitle;
	    static defaultProps: {
	        keyShouldComponentUpdate: string;
	    };
	    constructor(props: P, context: any);
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    isVisible(): any;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * Gestion de la touche espace et entre
	     * @param e
	     */
	    handleKeyDownButton(e: React.KeyboardEvent<HTMLElement>): void;
	    /**
	     * @inheritDoc
	     */
	    getCellTitleWithProps(props: any): any;
	    /**
	     * Click sur le lien
	     */
	    onClick(e: any): void;
	    /**
	     * action sur la confirmation
	     */
	    onAction(): void;
	    /**
	     * met a true la props isEditing a true lorsque la cellule est en cours d'edition
	     * @param lineIndex
	     */
	    handleEdition(lineIndex: number): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/action/action-header-cell" {
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
	import { AbstractHeaderCell, AbstractHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-header-cell";
	export interface ActionHeaderCellProps extends AbstractHeaderCellProps {
	    /** Titre de la colonne */
	    title?: string;
	}
	/**
	 * Classe Permettant de générer le rendu html d'un cellule d'entête de tableau
	 */
	export class ActionHeaderCell<P extends ActionHeaderCellProps, S> extends AbstractHeaderCell<P, any> {
	    /**
	     * @class
	     */
	    constructor(props: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/action/edition-action-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface EditionActionBodyCellProps extends AbstractBodyCellProps {
	    /** Fonction appelée pour rendre visible on non la cellule */
	    visible?: Function;
	    /** Titre du bouton edition d'une ligne du tableau */
	    titleEdit?: string;
	    /** Titre du bouton enregistrer l'edition d'une ligne du tableau */
	    titleSave?: string;
	    /** Titre du bouton annulation de l'edition d'une ligne du tableau */
	    titleCancel?: string;
	    /** Message de confirmation à afficher sur l'action */
	    messageAlert?: string;
	    /** Titre du message de confirmation à afficher sur l'action */
	    titleAlert?: string;
	    /** fonction appelée si une confirmation est demandée */
	    showAlert?: Function;
	    /** chaine de remplacement des valeurs undefined dans le templating */
	    replaceUndef?: string;
	    /** Fonction exécutée au moment de l'annulation de l'edition d'une ligne */
	    handleCancel?: Function;
	}
	export class EditionActionBodyCell<P extends EditionActionBodyCellProps, S> extends AbstractBodyCell<P, S> {
	    protected buttonsRef: Array<any>;
	    constructor(props: P, context: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * @inheritDoc
	     */
	    getCellTitle(): string;
	    /**
	     * clic sur l'icone d'edition
	     * @param e
	     */
	    onClick: (e: any) => void;
	    /**
	     * Permet de stocker l'item du tableau qui est en cours d'edition
	     */
	    setItemInEdition(): void;
	    /**
	     *
	     * @param classes
	     * @returns {any}
	     */
	    renderEditionBoutton(classes: ClassDictionary): JSX.Element;
	    /**
	     * Rendu des boutons save et cancel
	     * @param classes
	     * @returns {any}
	     */
	    renderSaveCancelBoutton(classes: ClassDictionary): JSX.Element;
	    /**
	     * permet de stocker les references des boutons de la cellule
	     * @param ref
	     */
	    protected setButtonsRef(ref: any): void;
	    /**
	     * Permet de switcher le focus entre les deux boutons de la cellule
	     * @param e
	     */
	    protected switchFocus(e: any): void;
	    /**
	     * Méthode permettant de mettre le focus sur le bouton
	     * @inheritDoc
	     */
	    handleCellFocus(tableCellRef: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/check/check-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	import * as React from "react";
	export interface CheckBodyCellProps extends AbstractBodyCellProps {
	    toggleSelectLine?: (lineIndex?: number) => void;
	    altSelect?: string;
	    altUnselect?: string;
	}
	export class CheckBodyCell<P extends CheckBodyCellProps, S> extends AbstractBodyCell<P, any> {
	    protected checkBoxBodyRef: any;
	    constructor(props: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    shouldComponentUpdate(nextProps: CheckBodyCellProps, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillReceiveProps(nextProps: CheckBodyCellProps): void;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * Action exécutée sur un click de la checkbox
	     * @param e
	     */
	    handleToggleCheckBox: (e: React.MouseEvent<HTMLElement>) => void;
	    /**
	     * @inheritDoc
	     */
	    setDisabled(): boolean;
	    /**
	     * @inheritDoc
	     */
	    getCellTitle(): string;
	    /**
	     * Override de la méthode blurAction d'AbstractCell
	     * retire la tabulation à une cellule que l'on vient de quitter
	     * par navigation clavier
	     * @param tableCellRef cellule perdant le focus
	     */
	    protected blurActions(tableCellRef: any): void;
	    /**+
	     * @inheritDoc
	     */
	    handleCellFocus(tableCellRef: any): void;
	    /**
	     * mise a jour du state apres selection de la check box
	     * @param selectedItems
	     */
	    handleChange: (selectedItems: any[]) => void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/check/check-header-cell" {
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
	import { AbstractHeaderCell, AbstractHeaderCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-header-cell";
	export interface CheckHeaderCellProps extends AbstractHeaderCellProps {
	}
	export class CheckHeaderCell<P extends CheckHeaderCellProps, S> extends AbstractHeaderCell<P, any> {
	    protected checkBoxRef: any;
	    constructor(props: P, context?: any);
	    /**
	     * @inheritDoc
	     */
	    componentWillUnmount(): void;
	    /**
	     * @inheritDoc
	     */
	    componentWillReceiveProps(nextProps: CheckHeaderCellProps): void;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * Override de la méthode blurAction d'AbstractCell
	     * retire la tabulation à une cellule que l'on vient de quitter
	     * par navigation clavier
	     * @param tableCellRef
	     */
	    protected blurActions(tableCellRef: any): void;
	    /**+
	     * @inheritDoc
	     */
	    handleCellFocus(tableCellRef: any): void;
	    /***
	     * Evènement exécuté sur la sélection des cases à cocher
	     * @param selectedItems
	     * @param all
	     */
	    handleChange(selectedItems: any[], all: boolean): void;
	    /**
	     * Retourne le tabIndex pour les éléments du tableau
	     * Si la colonne est la première on autorise la tabulation
	     * exception faite des check column qui ne doivent pas être tabulable
	     * au premier container
	     * @returns valeur d'index pour tabulation
	     */
	    protected getTabIndexFullKind(): number;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/date/date-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface DateBodyCellProps extends AbstractBodyCellProps {
	    /** format d'affichage de la valeur */
	    format?: string;
	    /** Format de la valeur en entrée si besoin de parser */
	    inputFormat?: moment.MomentFormatSpecification;
	}
	export class DateBodyCell<P extends DateBodyCellProps, S> extends AbstractBodyCell<P, any> {
	    constructor(props: P, context?: any);
	    componentWillReceiveProps(nextProps: P, nextContext: any): void;
	    static getDateValue(props: any): any;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): string;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/input/input-text-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface InputTextBodyCellProps extends AbstractBodyCellProps {
	}
	export class InputTextBodyCell<P extends InputTextBodyCellProps, S> extends AbstractBodyCell<P, any> {
	    constructor(props: P, context?: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): any;
	    /**
	     * @inheritDoc
	     */
	    getCellTitle(): any;
	    /**
	     * @inheritDoc
	     */
	    handleCellFocus(tableCellRef: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/input/input-text-in-line-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface InputTextInLineBodyCellProps extends AbstractBodyCellProps {
	}
	export class InputTextInLineBodyCell<P extends InputTextInLineBodyCellProps, S> extends AbstractBodyCell<P, any> {
	    constructor(props: P, context?: any);
	    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): any;
	    /**
	     * @inheritDoc
	     */
	    getCellTitle(): any;
	    /**
	     * @inheritDoc
	     */
	    handleCellFocus(tableCellRef: any): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/more-info/more-info-body-cell" {
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
	import { ActionBodyCell, ActionBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/action/action-body-cell";
	export interface MoreInfoBodyCellProps extends ActionBodyCellProps {
	    /** Clé sur laquelle se base la méthode shouldComponentUpdate */
	    keyShouldComponentUpdate?: string;
	}
	export class MoreInfoBodyCell<P extends MoreInfoBodyCellProps, S> extends ActionBodyCell<P, any> {
	    static defaultProps: {
	        srcImg: string;
	        keyShouldComponentUpdate: string;
	    };
	    constructor(props: P, context: any);
	    /**
	     * @inheritDoc
	     */
	    componentWillReceiveProps(nextProps: MoreInfoBodyCellProps, context: any): void;
	    /**
	     * @inheritDoc
	     */
	    renderCell(): JSX.Element;
	    /**
	     * Click sur le lien
	     */
	    onClick(e: any): void;
	    /**
	     * Permet de masquer/afficher  une ligne de tableau
	     * @param before
	     */
	    expandLine(before?: boolean): void;
	}
	
}

declare module "hornet-js-react-components/src/widget/table/column/cell/yesno/yesno-body-cell" {
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
	import { AbstractBodyCell, AbstractBodyCellProps }  from "hornet-js-react-components/src/widget/table/column/cell/abstract-body-cell";
	export interface YesNoBodyCellProps extends AbstractBodyCellProps {
	    /** Nom de la colonne, correspondant au nom de la propriété contenant la valeur d'une cellule */
	    format?: string;
	}
	export class YesNoBodyCell<P extends YesNoBodyCellProps, S> extends AbstractBodyCell<P, any> {
	    /**
	     * @inheritDoc
	     */
	    renderCell(): any;
	}
	
}
