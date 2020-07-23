/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class CoffeeContract extends Contract {

    async coffeeExists(ctx, coffeeId) {
        const buffer = await ctx.stub.getState(coffeeId);
        return (!!buffer && buffer.length > 0);
    }

    async createCoffee(ctx, coffeeId, value) {
        const exists = await this.coffeeExists(ctx, coffeeId);
        if (exists) {
            throw new Error(`The coffee ${coffeeId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(coffeeId, buffer);
    }

    async readCoffee(ctx, coffeeId) {
        const exists = await this.coffeeExists(ctx, coffeeId);
        if (!exists) {
            throw new Error(`The coffee ${coffeeId} does not exist`);
        }
        const buffer = await ctx.stub.getState(coffeeId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateCoffee(ctx, coffeeId, newValue) {
        const exists = await this.coffeeExists(ctx, coffeeId);
        if (!exists) {
            throw new Error(`The coffee ${coffeeId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(coffeeId, buffer);
    }

    async deleteCoffee(ctx, coffeeId) {
        const exists = await this.coffeeExists(ctx, coffeeId);
        if (!exists) {
            throw new Error(`The coffee ${coffeeId} does not exist`);
        }
        await ctx.stub.deleteState(coffeeId);
    }

}

module.exports = CoffeeContract;
