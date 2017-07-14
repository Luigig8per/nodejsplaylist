[Version]
Signature="$Windows NT$"

[PolicyStatementExtension]
Policies=InternalPolicy

[InternalPolicy]
OID= 1.3.6.1.4.1.20820.1.2
URL=http://web3Jotas.com/AC/3JotasCPS.html

[Certsrv_Server]
RenewalKeyLength=4096
RenewalValidityPeriod=Years
RenewalValidityPeriodUnits=20
CRLPeriod=weeks
CRLPeriodUnits=1
LoadDefaultTemplates=0
AlternateSignatureAlgorithm=1

[CRLDistributionPoint]
Empty=True

[AuthorityInformationAccess]
Empty=True
