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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the SiteSourceControl class.
 * @constructor
 * Describes the source control configuration for web app
 * @member {string} [repoUrl] Repository or source control url
 * 
 * @member {string} [branch] Name of branch to use for deployment
 * 
 * @member {boolean} [isManualIntegration] Whether to manual or continuous
 * integration
 * 
 * @member {boolean} [deploymentRollbackEnabled] Whether to manual or
 * continuous integration
 * 
 * @member {boolean} [isMercurial] Mercurial or Git repository type
 * 
 */
function SiteSourceControl() {
  SiteSourceControl['super_'].call(this);
}

util.inherits(SiteSourceControl, models['Resource']);

/**
 * Defines the metadata of SiteSourceControl
 *
 * @returns {object} metadata of SiteSourceControl
 *
 */
SiteSourceControl.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SiteSourceControl',
    type: {
      name: 'Composite',
      className: 'SiteSourceControl',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        repoUrl: {
          required: false,
          serializedName: 'properties.repoUrl',
          type: {
            name: 'String'
          }
        },
        branch: {
          required: false,
          serializedName: 'properties.branch',
          type: {
            name: 'String'
          }
        },
        isManualIntegration: {
          required: false,
          serializedName: 'properties.isManualIntegration',
          type: {
            name: 'Boolean'
          }
        },
        deploymentRollbackEnabled: {
          required: false,
          serializedName: 'properties.deploymentRollbackEnabled',
          type: {
            name: 'Boolean'
          }
        },
        isMercurial: {
          required: false,
          serializedName: 'properties.isMercurial',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = SiteSourceControl;
