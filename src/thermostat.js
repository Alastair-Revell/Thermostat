function Thermostat() {
  DEFAULT_TEMPERATURE = 20
  this.powersaving = true
  this.temperature = DEFAULT_TEMPERATURE
}

Thermostat.prototype.hotter = function(degrees = 1) {
  if (this.powersaving =  true){
  if (this.temperature = 25){
    throw("tooooo hot");
  } else {
    return this.temperature += degrees;
  }
} else {
  if (this.temperature = 32){
    throw("toooo hot");
  } else {
    return this.temperature += degrees;
  }
}
  }


Thermostat.prototype.cooler = function(degrees = 1) {
  if (this.temperature <11) {
    throw "Tooooo Cold"
  }
  return this.temperature -= degrees
}
