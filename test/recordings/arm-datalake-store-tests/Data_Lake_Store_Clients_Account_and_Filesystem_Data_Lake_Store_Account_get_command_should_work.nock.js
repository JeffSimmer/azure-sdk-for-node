// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '61a5bd51-ad61-479a-915b-dab4e62fda90',
  'client-request-id': 'd70a851c-c532-4f56-8db5-e4221bde101f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_165',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:50 GMT',
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
  'x-ms-request-id': '61a5bd51-ad61-479a-915b-dab4e62fda90',
  'client-request-id': 'd70a851c-c532-4f56-8db5-e4221bde101f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_165',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:50 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667410\",\"not_before\":\"1460663510\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEwLCJuYmYiOjE0NjA2NjM1MTAsImV4cCI6MTQ2MDY2NzQxMCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Ffm3hom3pwqCtSEc6OFqzrY_qs9FFOlA72GUtNAaOzplLsgNzQmcc5V0ND79A02LmGzY-CGv9QYpUfi77uV21_qywCNxR4nHctyPQh1u495q9jzOFSnOUgvfVglN1H-ZlN7NCHo6apI5igCXHQgWxD3EdGpAWWCfo3OXTJoZqOE25aTJ-7W8cbxNlOHn6ssS6CoVsJLa6seweFJ9g7oadqys6GDjGaSnhKhDtILtOQqwhurCtl5NQoyH1wsf5bbgcd9EmtNvu00v9pzBpkbWEtvoHzJwskkkcHubzNKNnERrDN1A1VFViA4v34Dj2_iLBSwW_3psJo5GahxSuC7qLw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLbSih8-2n9zDL8UjUd_WuC1YU5VFOHsJSNWtSeqLRyWTnnI7O1nlI1YY_YS7oL7xbDZw1xgPH3OXzojWjn-YiFoZrnsr9hrmDVJ83g2Fj8vHRI92PbShJxdSPjQ1ik7sXMzQYSYE4yoFUP7Djn7bbhTHQZwW8Qirdus-C12J-6pn_RmC9FHUwPMAPjyxZBzvbXYO8PEqzA37C8szrTeIVA12AGFTNbKDnewLO0TugPEkxJN2QADtCGDQDWkFkmysxpXgPSEddfZ-XNRz1IOBz1Tj-AzhEhcCoZD-2BEJA3Pw-erS1auYjSbTxLiIhA4PsPRFxJ2ZzqGS5IPnbt1EXYjGP-alK2pRqkYBBL-IwfFCMWsKCaVFK1xrG8648WVhn7Qf3J44GYiKnH-oz2rz3_uzjNW1zJp3taGc9hC9Fd25kR1glVkTMJQqA6OjX1JaGiAxVL8PBrPe3FfkxwXFMlmtSmJnFie8tTOHBLdu_LYE2fg8rZlfRL45d_6R2vwetnFfcQZNdeUnxRdiDZcRDzEK9Bq7ATegTkfd0Zcw6M5EVR4P8-9_qlQd0u6PM5BanX-b5uiEdDPL1TbeVVfIpVlUHV1Dsoq4YO-h_iS5TFWzex3KxHHiHzfO_EYH3TPictDTASAVznnpIIOLzFaSgBdqAeTgCyLGEDkjJmysJ0nJbfSKW0du1Y3uWdTDxT_IDjEL7fADHftJG9HK0SvjQrYgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEwLCJuYmYiOjE0NjA2NjM1MTAsImV4cCI6MTQ2MDY2NzQxMCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7943a19c-5bf9-49df-b6c6-5e0f1c76ef70',
  'client-request-id': 'd70a851c-c532-4f56-8db5-e4221bde101f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_400',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:50 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460667410\",\"not_before\":\"1460663510\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEwLCJuYmYiOjE0NjA2NjM1MTAsImV4cCI6MTQ2MDY2NzQxMCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.Ffm3hom3pwqCtSEc6OFqzrY_qs9FFOlA72GUtNAaOzplLsgNzQmcc5V0ND79A02LmGzY-CGv9QYpUfi77uV21_qywCNxR4nHctyPQh1u495q9jzOFSnOUgvfVglN1H-ZlN7NCHo6apI5igCXHQgWxD3EdGpAWWCfo3OXTJoZqOE25aTJ-7W8cbxNlOHn6ssS6CoVsJLa6seweFJ9g7oadqys6GDjGaSnhKhDtILtOQqwhurCtl5NQoyH1wsf5bbgcd9EmtNvu00v9pzBpkbWEtvoHzJwskkkcHubzNKNnERrDN1A1VFViA4v34Dj2_iLBSwW_3psJo5GahxSuC7qLw\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLbSih8-2n9zDL8UjUd_WuC1YU5VFOHsJSNWtSeqLRyWTnnI7O1nlI1YY_YS7oL7xbDZw1xgPH3OXzojWjn-YiFoZrnsr9hrmDVJ83g2Fj8vHRI92PbShJxdSPjQ1ik7sXMzQYSYE4yoFUP7Djn7bbhTHQZwW8Qirdus-C12J-6pn_RmC9FHUwPMAPjyxZBzvbXYO8PEqzA37C8szrTeIVA12AGFTNbKDnewLO0TugPEkxJN2QADtCGDQDWkFkmysxpXgPSEddfZ-XNRz1IOBz1Tj-AzhEhcCoZD-2BEJA3Pw-erS1auYjSbTxLiIhA4PsPRFxJ2ZzqGS5IPnbt1EXYjGP-alK2pRqkYBBL-IwfFCMWsKCaVFK1xrG8648WVhn7Qf3J44GYiKnH-oz2rz3_uzjNW1zJp3taGc9hC9Fd25kR1glVkTMJQqA6OjX1JaGiAxVL8PBrPe3FfkxwXFMlmtSmJnFie8tTOHBLdu_LYE2fg8rZlfRL45d_6R2vwetnFfcQZNdeUnxRdiDZcRDzEK9Bq7ATegTkfd0Zcw6M5EVR4P8-9_qlQd0u6PM5BanX-b5uiEdDPL1TbeVVfIpVlUHV1Dsoq4YO-h_iS5TFWzex3KxHHiHzfO_EYH3TPictDTASAVznnpIIOLzFaSgBdqAeTgCyLGEDkjJmysJ0nJbfSKW0du1Y3uWdTDxT_IDjEL7fADHftJG9HK0SvjQrYgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNjYzNTEwLCJuYmYiOjE0NjA2NjM1MTAsImV4cCI6MTQ2MDY2NzQxMCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7943a19c-5bf9-49df-b6c6-5e0f1c76ef70',
  'client-request-id': 'd70a851c-c532-4f56-8db5-e4221bde101f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_400',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 14 Apr 2016 19:56:50 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '516',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'aa785a9a-67fa-4ecd-93c2-e2dd72e379a0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7e1677f1-9c96-46b4-a61d-97cb63649af4',
  'x-ms-routing-request-id': 'WESTUS:20160414T195651Z:7e1677f1-9c96-46b4-a61d-97cb63649af4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls3680.azuredatalakestore.net\",\"creationTime\":\"2016-04-14T19:55:37.8128012Z\",\"lastModifiedTime\":\"2016-04-14T19:55:37.8128012Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls3680\",\"name\":\"xplattestadls3680\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '516',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'aa785a9a-67fa-4ecd-93c2-e2dd72e379a0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7e1677f1-9c96-46b4-a61d-97cb63649af4',
  'x-ms-routing-request-id': 'WESTUS:20160414T195651Z:7e1677f1-9c96-46b4-a61d-97cb63649af4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 14 Apr 2016 19:56:51 GMT',
  connection: 'close' });
 return result; }]];