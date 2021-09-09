const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates usage of Utils.calculateNumber', () => {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(calcNumStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    calcNumStub.restore();
    consoleSpy.restore();
  });
});
