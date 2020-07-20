/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { SChainXContract } = require('..');
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

describe('SChainXContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new SChainXContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"s chain x 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"s chain x 1002 value"}'));
    });

    describe('#sChainXExists', () => {

        it('should return true for a s chain x', async () => {
            await contract.sChainXExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a s chain x that does not exist', async () => {
            await contract.sChainXExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createSChainX', () => {

        it('should create a s chain x', async () => {
            await contract.createSChainX(ctx, '1003', 's chain x 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"s chain x 1003 value"}'));
        });

        it('should throw an error for a s chain x that already exists', async () => {
            await contract.createSChainX(ctx, '1001', 'myvalue').should.be.rejectedWith(/The s chain x 1001 already exists/);
        });

    });

    describe('#readSChainX', () => {

        it('should return a s chain x', async () => {
            await contract.readSChainX(ctx, '1001').should.eventually.deep.equal({ value: 's chain x 1001 value' });
        });

        it('should throw an error for a s chain x that does not exist', async () => {
            await contract.readSChainX(ctx, '1003').should.be.rejectedWith(/The s chain x 1003 does not exist/);
        });

    });

    describe('#updateSChainX', () => {

        it('should update a s chain x', async () => {
            await contract.updateSChainX(ctx, '1001', 's chain x 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"s chain x 1001 new value"}'));
        });

        it('should throw an error for a s chain x that does not exist', async () => {
            await contract.updateSChainX(ctx, '1003', 's chain x 1003 new value').should.be.rejectedWith(/The s chain x 1003 does not exist/);
        });

    });

    describe('#deleteSChainX', () => {

        it('should delete a s chain x', async () => {
            await contract.deleteSChainX(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a s chain x that does not exist', async () => {
            await contract.deleteSChainX(ctx, '1003').should.be.rejectedWith(/The s chain x 1003 does not exist/);
        });

    });

});