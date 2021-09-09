const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates usage of Utils.calculateNumber', () => {
    const calcNumSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(calcNumSpy.calledWith('SUM', 100, 20)).to.be.true;
    calcNumSpy.restore();
  });
});
