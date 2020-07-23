/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { CoffeeContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('CoffeeContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new CoffeeContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"coffee 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"coffee 1002 value"}'));
    });

    describe('#coffeeExists', () => {

        it('should return true for a coffee', async () => {
            await contract.coffeeExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a coffee that does not exist', async () => {
            await contract.coffeeExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createCoffee', () => {

        it('should create a coffee', async () => {
            await contract.createCoffee(ctx, '1003', 'coffee 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"coffee 1003 value"}'));
        });

        it('should throw an error for a coffee that already exists', async () => {
            await contract.createCoffee(ctx, '1001', 'myvalue').should.be.rejectedWith(/The coffee 1001 already exists/);
        });

    });

    describe('#readCoffee', () => {

        it('should return a coffee', async () => {
            await contract.readCoffee(ctx, '1001').should.eventually.deep.equal({ value: 'coffee 1001 value' });
        });

        it('should throw an error for a coffee that does not exist', async () => {
            await contract.readCoffee(ctx, '1003').should.be.rejectedWith(/The coffee 1003 does not exist/);
        });

    });

    describe('#updateCoffee', () => {

        it('should update a coffee', async () => {
            await contract.updateCoffee(ctx, '1001', 'coffee 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"coffee 1001 new value"}'));
        });

        it('should throw an error for a coffee that does not exist', async () => {
            await contract.updateCoffee(ctx, '1003', 'coffee 1003 new value').should.be.rejectedWith(/The coffee 1003 does not exist/);
        });

    });

    describe('#deleteCoffee', () => {

        it('should delete a coffee', async () => {
            await contract.deleteCoffee(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a coffee that does not exist', async () => {
            await contract.deleteCoffee(ctx, '1003').should.be.rejectedWith(/The coffee 1003 does not exist/);
        });

    });

});