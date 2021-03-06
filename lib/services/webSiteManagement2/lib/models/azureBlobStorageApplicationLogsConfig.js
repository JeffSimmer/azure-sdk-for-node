/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AzureBlobStorageApplicationLogsConfig class.
 * @constructor
 * Application logs azure blob storage configuration
 * @member {string} [level] Log level. Possible values include: 'Off',
 * 'Verbose', 'Information', 'Warning', 'Error'
 * 
 * @member {string} [sasUrl] SAS url to a azure blob container with
 * read/write/list/delete permissions
 * 
 * @member {number} [retentionInDays] Retention in days.
 * Remove blobs older than X days.
 * 0 or lower means no retention.
 * 
 */
function AzureBlobStorageApplicationLogsConfig() {
}

/**
 * Defines the metadata of AzureBlobStorageApplicationLogsConfig
 *
 * @returns {object} metadata of AzureBlobStorageApplicationLogsConfig
 *
 */
AzureBlobStorageApplicationLogsConfig.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AzureBlobStorageApplicationLogsConfig',
    type: {
      name: 'Composite',
      className: 'AzureBlobStorageApplicationLogsConfig',
      modelProperties: {
        level: {
          required: false,
          serializedName: 'level',
          type: {
            name: 'Enum',
            allowedValues: [ 'Off', 'Verbose', 'Information', 'Warning', 'Error' ]
          }
        },
        sasUrl: {
          required: false,
          serializedName: 'sasUrl',
          type: {
            name: 'String'
          }
        },
        retentionInDays: {
          required: false,
          serializedName: 'retentionInDays',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = AzureBlobStorageApplicationLogsConfig;
