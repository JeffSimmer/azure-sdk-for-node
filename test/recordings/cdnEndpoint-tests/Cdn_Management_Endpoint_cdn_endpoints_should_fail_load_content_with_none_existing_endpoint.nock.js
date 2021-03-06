// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819038\",\"not_before\":\"1459815138\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM4LCJuYmYiOjE0NTk4MTUxMzgsImV4cCI6MTQ1OTgxOTAzOCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.JjljcOW9sBIcKPBWUOVgd4e3Yb7_8fBYmx3CIVMCC2wZ4kXB5_Wk6IA5sMd5_S4IuS0_tLNseVk9XrJ5pRiIPJh_8zJ3yhs4syqPbryvn0YjahKOR5Oqip9ykyZWM7yKwRCSMBMB06oICXVlrnG3mcRVKXIgM6yvfXsbDmmKMKYlCnmes1uFBh9enqpNuRUf8rnAh75n8JXyTbcb1P2kd2SpL__nodkIPlIfpHrJ8-Q2KP5jCOp6o68Gb1mo3uGKooYT72GpQ8vVYRMJAe6lgA1I5Q4D41gY63f8PKt3EP1mk97K9E0STASdiE6tNXWfM5Re2C7gBgb2v4638ijOTQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '1a4715fa-64b7-4c15-b860-78921742ecaf',
  'client-request-id': '352310c2-4671-4f09-bca8-05e3a23c758d',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_97',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:18 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459819038\",\"not_before\":\"1459815138\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1MTM4LCJuYmYiOjE0NTk4MTUxMzgsImV4cCI6MTQ1OTgxOTAzOCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.JjljcOW9sBIcKPBWUOVgd4e3Yb7_8fBYmx3CIVMCC2wZ4kXB5_Wk6IA5sMd5_S4IuS0_tLNseVk9XrJ5pRiIPJh_8zJ3yhs4syqPbryvn0YjahKOR5Oqip9ykyZWM7yKwRCSMBMB06oICXVlrnG3mcRVKXIgM6yvfXsbDmmKMKYlCnmes1uFBh9enqpNuRUf8rnAh75n8JXyTbcb1P2kd2SpL__nodkIPlIfpHrJ8-Q2KP5jCOp6o68Gb1mo3uGKooYT72GpQ8vVYRMJAe6lgA1I5Q4D41gY63f8PKt3EP1mk97K9E0STASdiE6tNXWfM5Re2C7gBgb2v4638ijOTQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '1a4715fa-64b7-4c15-b860-78921742ecaf',
  'client-request-id': '352310c2-4671-4f09-bca8-05e3a23c758d',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_97',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:17:18 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint/load?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup4424' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'x-ms-correlation-request-id': 'a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001719Z:a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 05 Apr 2016 00:17:18 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint/load?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup4424' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'x-ms-correlation-request-id': 'a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160405T001719Z:a2bcf488-4d0c-4db7-8583-1a5b1a739cd2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 05 Apr 2016 00:17:18 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; }]];