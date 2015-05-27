describe('Thermostat', function(){
  var thermostat;
  it('has a degree property when initialised', function(){
      thermostat = new Thermostat();
      expect(thermostat.degrees).toEqual(20);
  });
});