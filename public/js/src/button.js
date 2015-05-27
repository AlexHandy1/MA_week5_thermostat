var thermostat = new Thermostat();

$(document).ready( function() {
  $('#down').on('click', function(){
  thermostat.lowerTemp();
    $('#temperature').html(thermostat.degrees);
 });
});

$(document).ready( function() {
  $('#up').on('click', function (){
    thermostat.raiseTemp();
      $('#temperature').html(thermostat.degrees);
  });
});