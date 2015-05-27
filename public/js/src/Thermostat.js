function Thermostat(){
  this.degrees = 20;
  this.powerSaving = true;
};

Thermostat.prototype.raiseTemp = function() {
  if (this.powerSaving == false && this.degrees >= 32) throw "Maximum temperature reached";
  if (this.powerSaving && this.degrees >= 25) throw "Maximum temperature reached";
  this.degrees += 1;
};

Thermostat.prototype.lowerTemp = function() {
  if (this.degrees <= 10) throw "Minimum temperature reached";
  this.degrees -= 1;
};

Thermostat.prototype.turnPowerOff = function() {
  this.powerSaving = false;
};

Thermostat.prototype.turnPowerOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype.defaultTemp = function() {
  this.degrees = 20;
};

