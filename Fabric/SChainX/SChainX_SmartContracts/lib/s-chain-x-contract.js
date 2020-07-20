/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class SChainXContract extends Contract {

    async sChainXExists(ctx, sChainXId) {
        const buffer = await ctx.stub.getState(sChainXId);
        return (!!buffer && buffer.length > 0);
    }

    async createSChainX(ctx, sChainXId, value) {
        const exists = await this.sChainXExists(ctx, sChainXId);
        if (exists) {
            throw new Error(`The s chain x ${sChainXId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(sChainXId, buffer);
    }

    async readSChainX(ctx, sChainXId) {
        const exists = await this.sChainXExists(ctx, sChainXId);
        if (!exists) {
            throw new Error(`The s chain x ${sChainXId} does not exist`);
        }
        const buffer = await ctx.stub.getState(sChainXId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateSChainX(ctx, sChainXId, newValue) {
        const exists = await this.sChainXExists(ctx, sChainXId);
        if (!exists) {
            throw new Error(`The s chain x ${sChainXId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(sChainXId, buffer);
    }

    async deleteSChainX(ctx, sChainXId) {
        const exists = await this.sChainXExists(ctx, sChainXId);
        if (!exists) {
            throw new Error(`The s chain x ${sChainXId} does not exist`);
        }
        await ctx.stub.deleteState(sChainXId);
    }

}

module.exports = SChainXContract;
