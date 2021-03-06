/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the WinRMListener class.
 * @constructor
 * Describes Protocol and thumbprint of Windows Remote Management listener
 * @member {string} [protocol] Gets or sets the Protocol used by WinRM
 * listener. Currently only Http and Https are supported. Possible values
 * include: 'Http', 'Https'
 * 
 * @member {string} [certificateUrl] Gets or sets the Certificate URL in KMS
 * for Https listeners. Should be null for Http listeners.
 * 
 */
function WinRMListener() {
}

/**
 * Defines the metadata of WinRMListener
 *
 * @returns {object} metadata of WinRMListener
 *
 */
WinRMListener.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WinRMListener',
    type: {
      name: 'Composite',
      className: 'WinRMListener',
      modelProperties: {
        protocol: {
          required: false,
          serializedName: 'protocol',
          type: {
            name: 'Enum',
            allowedValues: [ 'Http', 'Https' ]
          }
        },
        certificateUrl: {
          required: false,
          serializedName: 'certificateUrl',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = WinRMListener;
