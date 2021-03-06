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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459817455\",\"not_before\":\"1459813555\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTU1LCJuYmYiOjE0NTk4MTM1NTUsImV4cCI6MTQ1OTgxNzQ1NSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.GeXG8UwOKlcjqMFyBGisxGjgqi7okT-D1AqVtc2_OD6C5MmPDSMzqxjEkdlyP5WKdm_aqArhTIS4HmEMdwZnVyKsAzQAjRSUWmeKD6oxLRF1D5xH1V2PD30sIxwqI_geQbAbAn4PSwDN5mKrF4JAT4Y4LitT9RcxUrtLfhDZvozjmIGgGZk1tPa6HPuT5_T0xZdtAfK-yDYpbzQW6NpuquUuNUX7xfvbcwUluQWkTELJ60slztrp72FKwuPJ7BW8gi5njbS6UhONzaBRvUDYX6wBIKb6tnQIztxhlIN_TtUKTv1Ua48ZOyKuTcZV7TGKr_Di1_UAvMkMkMri-OrRuA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7db49a9d-b375-4551-a08d-8640eca83b80',
  'client-request-id': '51fdc194-a33b-4588-b3cc-ca11562c2564',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_171',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:54 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459817455\",\"not_before\":\"1459813555\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODEzNTU1LCJuYmYiOjE0NTk4MTM1NTUsImV4cCI6MTQ1OTgxNzQ1NSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.GeXG8UwOKlcjqMFyBGisxGjgqi7okT-D1AqVtc2_OD6C5MmPDSMzqxjEkdlyP5WKdm_aqArhTIS4HmEMdwZnVyKsAzQAjRSUWmeKD6oxLRF1D5xH1V2PD30sIxwqI_geQbAbAn4PSwDN5mKrF4JAT4Y4LitT9RcxUrtLfhDZvozjmIGgGZk1tPa6HPuT5_T0xZdtAfK-yDYpbzQW6NpuquUuNUX7xfvbcwUluQWkTELJ60slztrp72FKwuPJ7BW8gi5njbS6UhONzaBRvUDYX6wBIKb6tnQIztxhlIN_TtUKTv1Ua48ZOyKuTcZV7TGKr_Di1_UAvMkMkMri-OrRuA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7db49a9d-b375-4551-a08d-8640eca83b80',
  'client-request-id': '51fdc194-a33b-4588-b3cc-ca11562c2564',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_171',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 23:50:54 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint807\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint807.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '800',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '427b628c-d375-43c9-a427-1bfebaf3e15a',
  'x-ms-client-request-id': '57e502c2-057e-42b7-9645-3665701430e7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '83cc56ce-c149-42a3-9ee6-d0d3bbc9e391',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T235056Z:83cc56ce-c149-42a3-9ee6-d0d3bbc9e391',
  date: 'Mon, 04 Apr 2016 23:50:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint807\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup4424/providers/Microsoft.Cdn/profiles/cdnTestProfile7413/endpoints/cdnTestEndpoint807\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint807.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '800',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '427b628c-d375-43c9-a427-1bfebaf3e15a',
  'x-ms-client-request-id': '57e502c2-057e-42b7-9645-3665701430e7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '83cc56ce-c149-42a3-9ee6-d0d3bbc9e391',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T235056Z:83cc56ce-c149-42a3-9ee6-d0d3bbc9e391',
  date: 'Mon, 04 Apr 2016 23:50:55 GMT',
  connection: 'close' });
 return result; }]];