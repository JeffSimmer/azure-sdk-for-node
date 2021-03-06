/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EndpointCreateParameters class.
 * @constructor
 * Endpoint properties required for new endpoint creation.
 * @member {string} location Endpoint location
 * 
 * @member {object} [tags] Endpoint tags
 * 
 * @member {string} [originHostHeader] The host header CDN provider will send
 * along with content requests to origins. The default value is the host name
 * of the origin.
 * 
 * @member {string} [originPath] The path used for origin requests.
 * 
 * @member {array} [contentTypesToCompress] List of content types on which
 * compression will be applied. The value for the elements should be a valid
 * MIME type.
 * 
 * @member {boolean} [isCompressionEnabled] Indicates whether content
 * compression is enabled. Default value is false. If compression is enabled,
 * the content transferred from the CDN endpoint to the end user will be
 * compressed. The requested content must be larger than 1 byte and smaller
 * than 1 MB.
 * 
 * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is allowed
 * on the endpoint. Default value is true. At least one protocol (HTTP or
 * HTTPS) must be allowed.
 * 
 * @member {boolean} [isHttpsAllowed] Indicates whether https traffic is
 * allowed on the endpoint. Default value is true. At least one protocol
 * (HTTP or HTTPS) must be allowed.
 * 
 * @member {string} [queryStringCachingBehavior] Defines the query string
 * caching behavior. Possible values for this property include:
 * 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet'.
 * 
 * @member {array} origins The set of origins for the CDN endpoint. When
 * multiple origins exist, the first origin will be used as primary and rest
 * will be used as failover options.
 * 
 */
function EndpointCreateParameters() {
  EndpointCreateParameters['super_'].call(this);
}

util.inherits(EndpointCreateParameters, models['BaseResource']);

/**
 * Defines the metadata of EndpointCreateParameters
 *
 * @returns {object} metadata of EndpointCreateParameters
 *
 */
EndpointCreateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EndpointCreateParameters',
    type: {
      name: 'Composite',
      className: 'EndpointCreateParameters',
      modelProperties: {
        location: {
          required: true,
          serializedName: 'location',
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
        originHostHeader: {
          required: false,
          serializedName: 'properties.originHostHeader',
          type: {
            name: 'String'
          }
        },
        originPath: {
          required: false,
          serializedName: 'properties.originPath',
          type: {
            name: 'String'
          }
        },
        contentTypesToCompress: {
          required: false,
          serializedName: 'properties.contentTypesToCompress',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        isCompressionEnabled: {
          required: false,
          serializedName: 'properties.isCompressionEnabled',
          type: {
            name: 'Boolean'
          }
        },
        isHttpAllowed: {
          required: false,
          serializedName: 'properties.isHttpAllowed',
          type: {
            name: 'Boolean'
          }
        },
        isHttpsAllowed: {
          required: false,
          serializedName: 'properties.isHttpsAllowed',
          type: {
            name: 'Boolean'
          }
        },
        queryStringCachingBehavior: {
          required: false,
          serializedName: 'properties.queryStringCachingBehavior',
          type: {
            name: 'Enum',
            allowedValues: [ 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet' ]
          }
        },
        origins: {
          required: true,
          serializedName: 'properties.origins',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DeepCreatedOriginElementType',
                type: {
                  name: 'Composite',
                  className: 'DeepCreatedOrigin'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = EndpointCreateParameters;
