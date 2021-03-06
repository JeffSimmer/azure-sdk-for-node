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
 * Initializes a new instance of the PoolUsageMetrics class.
 * @constructor
 * Usage metrics for a pool across an aggregation interval.
 * @member {string} poolId Gets or sets the id of the pool whose metrics are
 * being aggregated.
 * 
 * @member {date} startTime Gets or sets the start time of the aggregation
 * interval.
 * 
 * @member {date} endTime Gets or sets the end time of the aggregation
 * interval.
 * 
 * @member {string} vmSize Gets or sets the size of virtual machines in the
 * pool.  All VMs in a pool are the same size.
 * 
 * @member {number} totalCoreHours Gets or sets the total core hours used in
 * the pool during this aggregation interval.
 * 
 * @member {number} dataIngressGiB Gets or sets the cross data center network
 * ingress in GiB to the pool during this interval.
 * 
 * @member {number} dataEgressGiB Gets or sets the cross data center network
 * egress in GiB from the pool during this interval.
 * 
 */
function PoolUsageMetrics() {
}

/**
 * Defines the metadata of PoolUsageMetrics
 *
 * @returns {object} metadata of PoolUsageMetrics
 *
 */
PoolUsageMetrics.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolUsageMetrics',
    type: {
      name: 'Composite',
      className: 'PoolUsageMetrics',
      modelProperties: {
        poolId: {
          required: true,
          serializedName: 'poolId',
          type: {
            name: 'String'
          }
        },
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        endTime: {
          required: true,
          serializedName: 'endTime',
          type: {
            name: 'DateTime'
          }
        },
        vmSize: {
          required: true,
          serializedName: 'vmSize',
          type: {
            name: 'String'
          }
        },
        totalCoreHours: {
          required: true,
          serializedName: 'totalCoreHours',
          type: {
            name: 'Number'
          }
        },
        dataIngressGiB: {
          required: true,
          serializedName: 'dataIngressGiB',
          type: {
            name: 'Number'
          }
        },
        dataEgressGiB: {
          required: true,
          serializedName: 'dataEgressGiB',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = PoolUsageMetrics;
