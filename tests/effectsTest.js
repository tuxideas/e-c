/**
 * ECE.Effects
 */

var expect = require("chai").expect,
    ECE = ECE || {};

ECE.Effects = function(
    duration: duration,
    selector: selector
){};

describe("ECE Effects", function(){
  it('expect ECE.Effects to exist and to not be undefined', function(){
    expect(ECE.Effects).to.exist;
    expect(ECE.Effects).to.not.be.undefined;
  });
  it('')
});
