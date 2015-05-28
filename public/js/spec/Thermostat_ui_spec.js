describe('Thermostat UI', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.erb');
    // $.holdReady(false);
  });

  it ("has a default temperature value", function(){
    expect('#degrees').toContainText('20');
  });

});