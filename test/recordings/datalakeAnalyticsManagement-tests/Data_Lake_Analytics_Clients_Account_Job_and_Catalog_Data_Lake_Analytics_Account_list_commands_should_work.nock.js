// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '9e27f119-6647-4be0-b030-48305d62af27',
  'client-request-id': 'a3a093e4-38d0-42cf-b4de-7a8ab274a492',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_387',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:03 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '9e27f119-6647-4be0-b030-48305d62af27',
  'client-request-id': 'a3a093e4-38d0-42cf-b4de-7a8ab274a492',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_387',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:03 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744584\",\"not_before\":\"1460740684\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg0LCJuYmYiOjE0NjA3NDA2ODQsImV4cCI6MTQ2MDc0NDU4NCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Novn3bozNnYJmVz8g6rYA1kRBf8VzZqSJE363cmIxBZ0lzOgfkZlE1EfERcBCmkh4mj1VjutCQIcpsioyQ-Sq11Yv249-8fqcSD6kGkVg6IZKN4tCqQWshu8qquTLAUNQ3Ed_rajeDCgs_ScCy-7q_bGDhko_7UVp90FA0GbyaRgU92WMwFDGsEQ4jc6JSIS3I2ouXNYUSTZ_wSU2zAO8DD3CimeUagWSZj_kCNQMLeZqC54IBwxhKwFDPI8Q60019_KsbG6pcgdlsVhvTjFzFerMduLhT0gVW--JoAJZ-JtMNyp94DUMKmthHOzkaplrlk7b5UZoy6pAFC6OxRZYA\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLci9I4ZAjHD_vwz2egSB5-VUHCt-3fxV1yu1o3N4DOgOKzzIZo3oXB4qVh3ZDbEYKmdbrKRhuIpJX_vbH822OAZLQYA7FVPfChngpPO9cdlKC4h7adNW97tQF8tvpcfpiLvyxXqNzWLOwGUh8323WGnNkZreTCGz7bSkatsggqW4as9w1JB2dAa0f3aV6CNp2GLZSegMdMGA0n-KPUKK-v3WmX63_NG16uJ8lZCybI7o2R5BFoi7_SSEXBhSXmUZNa_PJwI1Tk7BZ_VlPjbMW8lXT3QYyFfLyomEmTXc_pCbM5bsKldaYZjsAVVE_2Z6iFbYFX-3JgBL93ejdoA7BgmYkT-9DA24afnFwphfNcMgWLzdD_zUl4Y5hO_Tor6HyuCG1UqCkHqm5V6enR93yygJwvJt_zfjHhYSsqTUUFWLim66uoUHt7kDadWWdyJ9w0s9BYZ586WuuIGG-x957odHy7MqEFPkcSTeK5wQd7YthFVgF6Y6RECn0uTPvSWo3sV7e_VXfkallXEvYyWsg1Fq1cMkxKwnRtP650d22Y3CjQbb7QuEHfnYpB0BEm-QI4g7CMtl3NMeBAz_DA9FzK1XJMk629uWoL63qWeyDFUF_m3fhUNEunP7dalSU1l211MX5_M70LcXJ41dplSiI0mrhr1aXTQ000sOJko7hgGlo8rxFbEd7VlXwJCE4uD09x7_vqPObzzpNztBr1t6QvQgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg0LCJuYmYiOjE0NjA3NDA2ODQsImV4cCI6MTQ2MDc0NDU4NCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3989662f-2d6b-442d-a769-b1c248bfe9b1',
  'client-request-id': 'a3a093e4-38d0-42cf-b4de-7a8ab274a492',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_319',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:04 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744584\",\"not_before\":\"1460740684\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg0LCJuYmYiOjE0NjA3NDA2ODQsImV4cCI6MTQ2MDc0NDU4NCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Novn3bozNnYJmVz8g6rYA1kRBf8VzZqSJE363cmIxBZ0lzOgfkZlE1EfERcBCmkh4mj1VjutCQIcpsioyQ-Sq11Yv249-8fqcSD6kGkVg6IZKN4tCqQWshu8qquTLAUNQ3Ed_rajeDCgs_ScCy-7q_bGDhko_7UVp90FA0GbyaRgU92WMwFDGsEQ4jc6JSIS3I2ouXNYUSTZ_wSU2zAO8DD3CimeUagWSZj_kCNQMLeZqC54IBwxhKwFDPI8Q60019_KsbG6pcgdlsVhvTjFzFerMduLhT0gVW--JoAJZ-JtMNyp94DUMKmthHOzkaplrlk7b5UZoy6pAFC6OxRZYA\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLci9I4ZAjHD_vwz2egSB5-VUHCt-3fxV1yu1o3N4DOgOKzzIZo3oXB4qVh3ZDbEYKmdbrKRhuIpJX_vbH822OAZLQYA7FVPfChngpPO9cdlKC4h7adNW97tQF8tvpcfpiLvyxXqNzWLOwGUh8323WGnNkZreTCGz7bSkatsggqW4as9w1JB2dAa0f3aV6CNp2GLZSegMdMGA0n-KPUKK-v3WmX63_NG16uJ8lZCybI7o2R5BFoi7_SSEXBhSXmUZNa_PJwI1Tk7BZ_VlPjbMW8lXT3QYyFfLyomEmTXc_pCbM5bsKldaYZjsAVVE_2Z6iFbYFX-3JgBL93ejdoA7BgmYkT-9DA24afnFwphfNcMgWLzdD_zUl4Y5hO_Tor6HyuCG1UqCkHqm5V6enR93yygJwvJt_zfjHhYSsqTUUFWLim66uoUHt7kDadWWdyJ9w0s9BYZ586WuuIGG-x957odHy7MqEFPkcSTeK5wQd7YthFVgF6Y6RECn0uTPvSWo3sV7e_VXfkallXEvYyWsg1Fq1cMkxKwnRtP650d22Y3CjQbb7QuEHfnYpB0BEm-QI4g7CMtl3NMeBAz_DA9FzK1XJMk629uWoL63qWeyDFUF_m3fhUNEunP7dalSU1l211MX5_M70LcXJ41dplSiI0mrhr1aXTQ000sOJko7hgGlo8rxFbEd7VlXwJCE4uD09x7_vqPObzzpNztBr1t6QvQgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg0LCJuYmYiOjE0NjA3NDA2ODQsImV4cCI6MTQ2MDc0NDU4NCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3989662f-2d6b-442d-a769-b1c248bfe9b1',
  'client-request-id': 'a3a093e4-38d0-42cf-b4de-7a8ab274a492',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_319',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:04 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla531.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:22:29.9409774Z\",\"lastModifiedTime\":\"2016-04-15T17:22:29.9409774Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531\",\"name\":\"xplattestadla531\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9170.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:19:52.945473Z\",\"lastModifiedTime\":\"2016-04-15T17:19:52.945473Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9170\",\"name\":\"xplattestadla9170\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '723ccbc9-d1b4-452a-8cbb-0c7d757bcb0b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ed92dfd0-82e8-4ad8-baa6-823e225b7f91',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T172305Z:ed92dfd0-82e8-4ad8-baa6-823e225b7f91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla531.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:22:29.9409774Z\",\"lastModifiedTime\":\"2016-04-15T17:22:29.9409774Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531\",\"name\":\"xplattestadla531\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9170.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:19:52.945473Z\",\"lastModifiedTime\":\"2016-04-15T17:19:52.945473Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9170\",\"name\":\"xplattestadla9170\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '723ccbc9-d1b4-452a-8cbb-0c7d757bcb0b',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'ed92dfd0-82e8-4ad8-baa6-823e225b7f91',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T172305Z:ed92dfd0-82e8-4ad8-baa6-823e225b7f91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'aba8535b-d445-4782-ac5a-9f288b1fe6fa',
  'client-request-id': '21389bc1-c3c9-4a71-9a44-900e0f182a62',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_253',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:05 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'aba8535b-d445-4782-ac5a-9f288b1fe6fa',
  'client-request-id': '21389bc1-c3c9-4a71-9a44-900e0f182a62',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_253',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:05 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744585\",\"not_before\":\"1460740685\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg1LCJuYmYiOjE0NjA3NDA2ODUsImV4cCI6MTQ2MDc0NDU4NSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.HWJSD2BX4WHWz9sdVXdvqtyMMTumEfTLxUMlOWcxC4gJflNr_C27VJBwZPdtE4qTxn1hYY6ymINJenujecf6KBzOUMpyTqfeLkHEMuY3LJCYXWZiv9yZIhS7zzGcQzKbD0K49R_-Y_8ENnp0tyoEQTMp-CMoV7TCeZkuJEEvkOvgWHPpavs7Yn6tOG_9HXdO0bVejBlIIP-mW1gGymrcLM7t761csQzm0TtnbnwlwtekBZfDl6OMxI6TR9hy10CNX3VynNSe5SnVnBKSL39-M05fy1vkNwpBLjvlrZexeBYpeud-l4D_FSF9iJEL2V67DqejSEpAcUM_xd0QXo8Zog\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQZZblcAVWJgrovZj2zKsWFptxoxZ2HriC0bg0ibHZE1BdZiT4o36pMAI3G1NYEPbY6H08McrkjlG4QH8GnFagnz9wY6oQuI2jZSnnIjfJskgdv3Yh6wGhXwbdsM_6HyqgGaB0I3fsJNnHR2jI8w64gp96Lq7TAMKL4o3WgCRywTxTi7dp7NtPkvAThn5FbqXZLulJENOphNKVpV1rvCTRbOrmPusHMXbeUh2hQkpDoj3Apqm4tyxZ_-n8CNWVKeUkLWmxr_jSrb-0TcZxfWW0qwYc8Y1OC3aYytHLIuaIwRZEwOSVvwwDHVLjXo6jdd0HR4mb9MzzRDy5xWjrDDjqno1yuVaBrabf9witCZ2YLfJFoLjQ4WGN_HsC5es4SkOnBtWNAYKudT3LBkFoj1Hjvx2QBKg-L_j-IUV047bwTCWr8SN6_7fsSCzgc0ePJz1CNjDmxfP5wmaJjbvgIwsFsKex82l4zOTXwwIrtFuJGjqHMYk_FPO5sw5jK3VHpQljP41zFFFJQOBrPMMf7YVV7k25-OW_P0E5l9WZUbFBdCvRRf_1yhkb3hVfZ2bYPpUuEStS5uTcdP94O9sEObLyakasX6NcOu27s55GyVrwYn0FMuJ-1YR3hTtmAXS0RAamMxLsJ9BWjP1LqwTtqqsnUPs57mLIhwdSUqMJrJ0W7JCii2_Eim3pGFO8QbI4robXEQwhoZ2TJgIzUy1PorkfcgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg1LCJuYmYiOjE0NjA3NDA2ODUsImV4cCI6MTQ2MDc0NDU4NSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3b025c5c-d48c-4a90-a116-6e2ca0c4fb56',
  'client-request-id': '21389bc1-c3c9-4a71-9a44-900e0f182a62',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_89',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:05 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744585\",\"not_before\":\"1460740685\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg1LCJuYmYiOjE0NjA3NDA2ODUsImV4cCI6MTQ2MDc0NDU4NSwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.HWJSD2BX4WHWz9sdVXdvqtyMMTumEfTLxUMlOWcxC4gJflNr_C27VJBwZPdtE4qTxn1hYY6ymINJenujecf6KBzOUMpyTqfeLkHEMuY3LJCYXWZiv9yZIhS7zzGcQzKbD0K49R_-Y_8ENnp0tyoEQTMp-CMoV7TCeZkuJEEvkOvgWHPpavs7Yn6tOG_9HXdO0bVejBlIIP-mW1gGymrcLM7t761csQzm0TtnbnwlwtekBZfDl6OMxI6TR9hy10CNX3VynNSe5SnVnBKSL39-M05fy1vkNwpBLjvlrZexeBYpeud-l4D_FSF9iJEL2V67DqejSEpAcUM_xd0QXo8Zog\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQZZblcAVWJgrovZj2zKsWFptxoxZ2HriC0bg0ibHZE1BdZiT4o36pMAI3G1NYEPbY6H08McrkjlG4QH8GnFagnz9wY6oQuI2jZSnnIjfJskgdv3Yh6wGhXwbdsM_6HyqgGaB0I3fsJNnHR2jI8w64gp96Lq7TAMKL4o3WgCRywTxTi7dp7NtPkvAThn5FbqXZLulJENOphNKVpV1rvCTRbOrmPusHMXbeUh2hQkpDoj3Apqm4tyxZ_-n8CNWVKeUkLWmxr_jSrb-0TcZxfWW0qwYc8Y1OC3aYytHLIuaIwRZEwOSVvwwDHVLjXo6jdd0HR4mb9MzzRDy5xWjrDDjqno1yuVaBrabf9witCZ2YLfJFoLjQ4WGN_HsC5es4SkOnBtWNAYKudT3LBkFoj1Hjvx2QBKg-L_j-IUV047bwTCWr8SN6_7fsSCzgc0ePJz1CNjDmxfP5wmaJjbvgIwsFsKex82l4zOTXwwIrtFuJGjqHMYk_FPO5sw5jK3VHpQljP41zFFFJQOBrPMMf7YVV7k25-OW_P0E5l9WZUbFBdCvRRf_1yhkb3hVfZ2bYPpUuEStS5uTcdP94O9sEObLyakasX6NcOu27s55GyVrwYn0FMuJ-1YR3hTtmAXS0RAamMxLsJ9BWjP1LqwTtqqsnUPs57mLIhwdSUqMJrJ0W7JCii2_Eim3pGFO8QbI4robXEQwhoZ2TJgIzUy1PorkfcgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjg1LCJuYmYiOjE0NjA3NDA2ODUsImV4cCI6MTQ2MDc0NDU4NSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3b025c5c-d48c-4a90-a116-6e2ca0c4fb56',
  'client-request-id': '21389bc1-c3c9-4a71-9a44-900e0f182a62',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_89',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:05 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla531.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:22:29.9409774Z\",\"lastModifiedTime\":\"2016-04-15T17:22:29.9409774Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531\",\"name\":\"xplattestadla531\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9170.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:19:52.945473Z\",\"lastModifiedTime\":\"2016-04-15T17:19:52.945473Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9170\",\"name\":\"xplattestadla9170\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd124ee2a-0fb7-45f7-9f60-69473d92cc12',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4610cf83-d7b7-4f88-8c32-a52258423a87',
  'x-ms-routing-request-id': 'WESTUS:20160415T172309Z:4610cf83-d7b7-4f88-8c32-a52258423a87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla531.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:22:29.9409774Z\",\"lastModifiedTime\":\"2016-04-15T17:22:29.9409774Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531\",\"name\":\"xplattestadla531\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla9170.azuredatalakeanalytics.net\",\"creationTime\":\"2016-04-15T17:19:52.945473Z\",\"lastModifiedTime\":\"2016-04-15T17:19:52.945473Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla9170\",\"name\":\"xplattestadla9170\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1017',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd124ee2a-0fb7-45f7-9f60-69473d92cc12',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '4610cf83-d7b7-4f88-8c32-a52258423a87',
  'x-ms-routing-request-id': 'WESTUS:20160415T172309Z:4610cf83-d7b7-4f88-8c32-a52258423a87',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:08 GMT',
  connection: 'close' });
 return result; }]];