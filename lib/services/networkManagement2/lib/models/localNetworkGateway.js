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
 * Initializes a new instance of the LocalNetworkGateway class.
 * @constructor
 * A common class for general resource information
 * @member {object} [localNetworkAddressSpace] Local network site Address space
 * 
 * @member {array} [localNetworkAddressSpace.addressPrefixes] Gets or sets
 * List of address blocks reserved for this virtual network in CIDR notation
 * 
 * @member {string} [gatewayIpAddress] IP address of local network gateway.
 * 
 * @member {object} [bgpSettings] Local network gateway's BGP speaker settings
 * 
 * @member {number} [bgpSettings.asn] Gets or sets this BGP speaker's ASN
 * 
 * @member {string} [bgpSettings.bgpPeeringAddress] Gets or sets the BGP
 * peering address and BGP identifier of this BGP speaker
 * 
 * @member {number} [bgpSettings.peerWeight] Gets or sets the weight added to
 * routes learned from this BGP speaker
 * 
 * @member {string} [resourceGuid] Gets or sets resource guid property of the
 * LocalNetworkGateway resource
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * LocalNetworkGateway resource Updating/Deleting/Failed
 * 
 * @member {string} [etag] Gets a unique read-only string that changes
 * whenever the resource is updated
 * 
 */
function LocalNetworkGateway() {
  LocalNetworkGateway['super_'].call(this);
}

util.inherits(LocalNetworkGateway, models['Resource']);

/**
 * Defines the metadata of LocalNetworkGateway
 *
 * @returns {object} metadata of LocalNetworkGateway
 *
 */
LocalNetworkGateway.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LocalNetworkGateway',
    type: {
      name: 'Composite',
      className: 'LocalNetworkGateway',
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
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: false,
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
        localNetworkAddressSpace: {
          required: false,
          serializedName: 'properties.localNetworkAddressSpace',
          type: {
            name: 'Composite',
            className: 'AddressSpace'
          }
        },
        gatewayIpAddress: {
          required: false,
          serializedName: 'properties.gatewayIpAddress',
          type: {
            name: 'String'
          }
        },
        bgpSettings: {
          required: false,
          serializedName: 'properties.bgpSettings',
          type: {
            name: 'Composite',
            className: 'BgpSettings'
          }
        },
        resourceGuid: {
          required: false,
          serializedName: 'properties.resourceGuid',
          type: {
            name: 'String'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = LocalNetworkGateway;
