INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1);
INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (2, 'user', '12dea96fec20593566ab75692c9949596833adc9', 1);
INSERT INTO UTILISATEUR (ID_UTILISATEUR, UTI_LOGIN, UTI_PASSWORD, UTI_ENABLED) VALUES (3, 'userdb', '62c76a220118c16919dc3b6beda5434c3987c1e9', 1);

INSERT INTO ROLE (ID_ROLE, ROL_NOM) VALUES (1, 'APPLI_TUTO_ADMIN');
INSERT INTO ROLE (ID_ROLE, ROL_NOM) VALUES (2, 'APPLI_TUTO_USER');

INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (1, 1);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (1, 2);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (2, 2);
INSERT INTO ROLE_UTILISATEUR (ID_UTILISATEUR, ID_ROLE) VALUES (3, 2);
