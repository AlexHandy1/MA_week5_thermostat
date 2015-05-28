var thermostat = new Thermostat();

$(document).ready( function() {
  $('#down').on('click', function(){
    thermostat.lowerTemp();
    $.post('/temperature/change', { temperature: thermostat.degrees});
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
    $.post('/temperature/change', { temperature: thermostat.degrees});
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

// not working
  $('#show').on('click'), function(event){
    event.preventDefault();
    $.get('/temperature/change', function(data) {
      $('#showPrevious').text(data.temperatures[0]);
      console.log(data.temperatures[0])
    });
  }

  $('#reset').on('click', function(){
    thermostat.defaultTemp();
    $('#temperature').html(thermostat.degrees);
  });

  // ordering issue?
 $('#powerOn').on('click', function(){
    thermostat.turnPowerOn();
  });

  $('#powerOff').on('click', function(){
    thermostat.turnPowerOff();
  });
});
