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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968006\",\"not_before\":\"1459964106\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MTA2LCJuYmYiOjE0NTk5NjQxMDYsImV4cCI6MTQ1OTk2ODAwNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DzJHDZ7FDudbE-aIB5bc6LEyuio4UpND1npnFjbEkFhLyKBZugUnumzHpLvtySGJA-LyXS7X2f_T3ET64zInVyqPz4L5IqRSNl0Gvoq3wMUm-owQcGoXr0Bi46y_WW1HxNgKjBE1x65EF_fPsvj4_mJ77pbOVK-UREHN9N0_ru1sY7CZASLD4FVJIIOLZ0rHoc08q2IJmPllnOmcCUnE82rMBuigalyQmhiwhnauZCfkihztTwJCTeYoar7HsYwGkun3jW3jk0uL2zkZj73vLye1ijRm8Wkfrv4VBc3K4oejC3wuJIJByVvIgW8zJ0FgXC835Cmvu3ddkszZDoRwjQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '56fcc402-175b-4661-8048-ace70c14510c',
  'client-request-id': 'b7af1219-e6ba-446d-ac74-cd046a6af63f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_423',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:40:06 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968006\",\"not_before\":\"1459964106\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MTA2LCJuYmYiOjE0NTk5NjQxMDYsImV4cCI6MTQ1OTk2ODAwNiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DzJHDZ7FDudbE-aIB5bc6LEyuio4UpND1npnFjbEkFhLyKBZugUnumzHpLvtySGJA-LyXS7X2f_T3ET64zInVyqPz4L5IqRSNl0Gvoq3wMUm-owQcGoXr0Bi46y_WW1HxNgKjBE1x65EF_fPsvj4_mJ77pbOVK-UREHN9N0_ru1sY7CZASLD4FVJIIOLZ0rHoc08q2IJmPllnOmcCUnE82rMBuigalyQmhiwhnauZCfkihztTwJCTeYoar7HsYwGkun3jW3jk0uL2zkZj73vLye1ijRm8Wkfrv4VBc3K4oejC3wuJIJByVvIgW8zJ0FgXC835Cmvu3ddkszZDoRwjQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '56fcc402-175b-4661-8048-ace70c14510c',
  'client-request-id': 'b7af1219-e6ba-446d-ac74-cd046a6af63f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_423',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:40:06 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile5878\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles/cdnTestProfile5878\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '8f43adcd-dba9-4a20-aafe-e735e25a6632',
  'x-ms-client-request-id': '1b3fe2f6-a3a3-4345-9c5a-79b0adefeeb9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '61275d65-9835-426c-bade-1f947b3a4353',
  'x-ms-routing-request-id': 'WESTUS:20160406T174007Z:61275d65-9835-426c-bade-1f947b3a4353',
  date: 'Wed, 06 Apr 2016 17:40:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestProfile5878\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6098/providers/Microsoft.Cdn/profiles/cdnTestProfile5878\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n        \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n          \"name\":\"Standard\"\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '8f43adcd-dba9-4a20-aafe-e735e25a6632',
  'x-ms-client-request-id': '1b3fe2f6-a3a3-4345-9c5a-79b0adefeeb9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '61275d65-9835-426c-bade-1f947b3a4353',
  'x-ms-routing-request-id': 'WESTUS:20160406T174007Z:61275d65-9835-426c-bade-1f947b3a4353',
  date: 'Wed, 06 Apr 2016 17:40:06 GMT',
  connection: 'close' });
 return result; }]];