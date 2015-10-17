$(document).ready(function() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp;
      html += ' <small>'+weather.city+'</small></h2>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
