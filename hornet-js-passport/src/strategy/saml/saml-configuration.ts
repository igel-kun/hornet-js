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
 * hornet-js-passport - Gestion d'authentification
 *
 * @author
 * @version v5.2.4
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license
 */

/**
 *
 */
export class SamlConfiguration {

    /* Page d'identification */
    appLoginPath: string;
    /* Page de déconnexion */
    appLogoutPath: string;
    /* Hôte retour par défaut */
    hostUrlReturnTo: string;
    /* Url assurant la mécanique Service Provider -> Identity Provider */
    availableIdp: IdentityProviderProps[];
    /* Clé d'identification applicatif défini dans le metadata SP */
    issuer: string;
    /* separateur des profils saml */
    profilSeparator: string;
    /* Format d'identifiant */
    identifierFormat: string;
    /* Description clé privée Service Provider */
    decryptionPvk: string;
    /* Clé privée Service Provider */
    privateCert: string;
    /* Clé publique Identity Provider pour la signature */
    certSignature: string;
    /* Clé publique Identity Provider pour le chiffrement */
    certChiffrement: string;
    /* Fonction de retour permettant de traiter l'objet de réponse SAML */
    verifyFunction: Function;
    /* Certificat applicatif à fournir à l'idp */
    appCert: string;
    entryPoint: string;
    idp: IdentityProviderProps;
    validateInResponseTo: boolean;
    disableRequestedAuthnContext: boolean;
    signatureAlgorithm: string;
    acceptedClockSkewMs: number;
    passReqToCallback: boolean;
    authnRequestBinding: string;
    connexionComponent: any;
    isMetadataAccessible: boolean;

    /**
     *
     * @param appLoginPath path relatif de l'application déclenchant le process de connexion
     * @param appLogoutPath path relatif de l'application déclenchant le process de déconnexion
     * @param hostUrlReturnTo
     * @param certSignature
     * @param privateCert
     * @param availableIdp
     */
    constructor(appLoginPath: string, appLogoutPath: string, hostUrlReturnTo: string, issuer: string, certSignature: string, privateCert: string, availableIdp: IdentityProviderProps[], isMetadataAccessible?: boolean, verifyFunction?: Function) {

        this.appLoginPath = appLoginPath;
        this.appLogoutPath = appLogoutPath;
        this.hostUrlReturnTo = hostUrlReturnTo;
        this.issuer = issuer;
        this.appCert = certSignature;
        this.privateCert = this.decryptionPvk = privateCert;
        this.availableIdp = availableIdp;
        this.verifyFunction = verifyFunction;
        this.isMetadataAccessible = isMetadataAccessible || true;

        this.identifierFormat = this.identifierFormat || null;
        this.validateInResponseTo = this.validateInResponseTo || false;
        this.disableRequestedAuthnContext = this.disableRequestedAuthnContext || true;
        this.signatureAlgorithm = this.signatureAlgorithm || "sha1";
        this.acceptedClockSkewMs = this.acceptedClockSkewMs || -1;

        if (Array.isArray(this.availableIdp) && this.availableIdp.length === 1) {
            this.idp = this.availableIdp[ 0 ];
        }
    }
}

/**
 * Interface IDP
 */
export interface IdentityProviderProps {
    name: string;
    shibbolethUrl?: string;
    entryPoint?: string;
    logoutUrl?: string;
    httpsCert?: string;
    certSignature?: string;
    certChiffrement?: string;
}
