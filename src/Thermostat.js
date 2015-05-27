function Thermostat(){
  this.degrees = 20;
};

Thermostat.prototype.raiseTemp = function() {
  this.degrees += 1;
};

Thermostat.prototype.lowerTemp = function() {
  if (this.degree <= 10) throw "Minimum temperature reached";
  this.degrees -= 1;
};

