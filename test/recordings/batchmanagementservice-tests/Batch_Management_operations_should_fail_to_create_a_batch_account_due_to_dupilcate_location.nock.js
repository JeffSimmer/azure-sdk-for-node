// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2015-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/16e659c6-db46-45bc-a6f1-6e0bacda029d?api-version=2015-12-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'request-id': '16e659c6-db46-45bc-a6f1-6e0bacda029d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  'x-ms-correlation-request-id': 'bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  'x-ms-routing-request-id': 'WESTUS:20160310T234939Z:bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  date: 'Thu, 10 Mar 2016 23:49:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2015-12-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/16e659c6-db46-45bc-a6f1-6e0bacda029d?api-version=2015-12-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'request-id': '16e659c6-db46-45bc-a6f1-6e0bacda029d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  'x-ms-correlation-request-id': 'bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  'x-ms-routing-request-id': 'WESTUS:20160310T234939Z:bd6c6937-ae6b-4d99-b28a-1f7b1785f206',
  date: 'Thu, 10 Mar 2016 23:49:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/16e659c6-db46-45bc-a6f1-6e0bacda029d?api-version=2015-12-01')
  .reply(409, "{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional account quota for the specified subscription has been reached.\\nRequestId:3165c1c6-32d5-4228-83dd-70153c017c82\\nTime:2016-03-10T23:50:11.0490695Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '3165c1c6-32d5-4228-83dd-70153c017c82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  'x-ms-correlation-request-id': '0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235011Z:0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  date: 'Thu, 10 Mar 2016 23:50:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/16e659c6-db46-45bc-a6f1-6e0bacda029d?api-version=2015-12-01')
  .reply(409, "{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional account quota for the specified subscription has been reached.\\nRequestId:3165c1c6-32d5-4228-83dd-70153c017c82\\nTime:2016-03-10T23:50:11.0490695Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '3165c1c6-32d5-4228-83dd-70153c017c82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': '0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  'x-ms-correlation-request-id': '0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  'x-ms-routing-request-id': 'CENTRALUS:20160310T235011Z:0af52f5c-cb3e-4c6d-aaf4-b16a16950a17',
  date: 'Thu, 10 Mar 2016 23:50:10 GMT',
  connection: 'close' });
 return result; }]];