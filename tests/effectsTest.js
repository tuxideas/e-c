/**
 * ECE.Effects
 */

var expect = require("chai").expect,
    ECE = ECE || {};

ECE.Effects = function(
  // Properties and Methods to evaluate Mario :D
){};

describe("ECE Effects", function(){
  it('expect ECE.Effects to exist and to not be undefined', function(){
    expect(ECE).to.exist;
    expect(ECE).to.not.be.undefined;
  });
});
