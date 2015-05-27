function Thermostat(){
  this.degrees = 20;
};

Thermostat.prototype.raiseTemp = function() {
  this.degrees += 1;
};

Thermostat.prototype.lowerTemp = function() {
  this.degrees -= 1;
};

