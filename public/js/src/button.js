var thermostat = new Thermostat();

$(document).ready( function() {
  $('#down').on('click', function(){
    thermostat.lowerTemp();
    $('#temperature').html(thermostat.degrees);

    if (thermostat.degrees < 18) {
        $('html').removeClass("yellow");
        $('html').addClass("green");
    } else if (thermostat.degrees >= 18 && thermostat.degrees <= 25) {
        $('html').removeClass("green");
        $('html').removeClass("red");
        $('html').addClass("yellow");
    } else {
        $('html').removeClass("yellow");
        $('html').addClass("red");    }
  });

  $('#up').on('click', function(){
    thermostat.raiseTemp();
    $('#temperature').html(thermostat.degrees);
    if (thermostat.degrees < 18) {
        $('html').removeClass("yellow");
        $('html').addClass("green");
    } else if (thermostat.degrees >= 18 && thermostat.degrees <= 25) {
        $('html').removeClass("green");
        $('html').removeClass("red");
        $('html').addClass("yellow");
    } else {
        $('html').removeClass("yellow");
        $('html').addClass("red");    }
  });
});
