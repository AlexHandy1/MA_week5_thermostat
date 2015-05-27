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
    for (var i = 0; i < 10; i++) {
      thermostat.lowerTemp();
    };
    expect(function(){
      thermostat.lowerTemp();}).toThrow("Minimum temperature reached");
  });

  it('has a default power saving status of true', function(){
    expect(thermostat.powerSaving).toBe(true);
  });

  it('cannot go above 25 degress when power saving status is true', function(){
    for (var i = 0; i < 5; i++) {
      thermostat.raiseTemp();
    }
    expect(function(){
      thermostat.raiseTemp();}).toThrow("Maximum temperature reached");
  });

  it('can have power saving mode turned off', function(){
    thermostat.turnPowerOff();
    expect(thermostat.powerSaving).toBe(false);
  });

  it('cannot go above 32 degrees when power saving status is false', function(){
    thermostat.turnPowerOff();
    for (var i = 0; i < 12; i++) {
      thermostat.raiseTemp();
    }
    expect(function(){
      thermostat.raiseTemp();}).toThrow("Maximum temperature reached");
  });
});