ADCS



ADCS;

 Fits just install CAManagementeTools;

 THEN SELECT CERT AUTH,

 THEN COMMON NAME: ROOTCA-VTB-CA;

 DOWN>CN=ROOTCA-VTB-CA

 20 YEARS,

 DONE.

PUBLISHING ISSUING CA:

{

SELECT IIS,

INSTALL.

AFTERDONE, CREATE FOLDER ON C/inetup, wwwrot, called CertData,


}

then go to CARoot;

cert auth, go to rick click, properties, extensions, CDP and AIA

SETUP CRL AND AIA

Location: http://issuingca-vtb-vincenttechblog.com/CertData/<CaName><CRLNameSuffix><DeltaCRLAllowed>.CertData
ok, and the select include CRLS.

go to system32/certsrv/certEnroll, copy both certs.

then go caconsole, view certs, and export to DER, STORE ON CertEnroll, callit rootca_Certificate.certs


the go over to webrrot>


create certdata on wwwrot,




ComputerName
IsssuingCAN-VTB=

var issuingCA;
CA Authority;
CA WebvEnrollment;

vara commonName>
same as server


then on root CA,

SUBMIT NEW REQ,

Detailsm, copy to file, P7B, INCLUDE ALL CERTS;

THEN, on issuingCA, CA, paste 2 files on c inetub, wwwrot,certdata, right click on issuingCA,
the right click, install cert, select auth from CA Root, the start service, and now should be running

after that they should be on intermediate cert auth, the 3 CERTS



* Common name same at end *(Issued to,  Issued by).
