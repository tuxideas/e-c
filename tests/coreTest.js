/**
 * Test ECE.Core
 */

var expect = require("chai").expect,
    ECE = ECE || {};

describe('ECE Class', function(){
  it('expect ECE to exist and to not be undefined', function(){
    expect(ECE).to.exist;
    expect(ECE).to.not.be.undefined;
  })
  it('expect to be a class', function(){
    expect(ECE).to.be.a('object');
  });
  it('expect to not be empty', function(){
    expect(ECE).to.not.be.empty;
  })
});
