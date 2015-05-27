describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a degree property when initialised', function(){
      expect(thermostat.degrees).toEqual(20);
  });

  it('can have its degrees increased', function(){
      thermostat.raiseTemp();
      expect(thermostat.degrees).toEqual(21);
  });

  it('can have its degrees decreased', function(){
    thermostat.lowerTemp();
    expect(thermostat.degrees).toEqual(19);
  });

  it('cannot go below 10 degrees', function(){
    for (var i = 0, i = 10, i ++) {
      thermostat.lowerTemp();
    };
    expect(function(){
      thermostat.lowerTemp();} ).toThrow(new Error("Minimum temperature reached"));
  });
});