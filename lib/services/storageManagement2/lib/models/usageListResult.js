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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The List Usages operation response.
 * @member {array} [value] Gets or sets the list Storage Resource Usages.
 * 
 */
function UsageListResult() {
}

/**
 * Defines the metadata of UsageListResult
 *
 * @returns {object} metadata of UsageListResult
 *
 */
UsageListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UsageListResult',
    type: {
      name: 'Composite',
      className: 'UsageListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UsageElementType',
                type: {
                  name: 'Composite',
                  className: 'Usage'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = UsageListResult;
