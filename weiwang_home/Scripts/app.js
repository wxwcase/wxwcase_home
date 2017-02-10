$(function () {
    // DOM loaded

    /* Does your browser support geolocation? */
    if ("geolocation" in navigator) {

        /* Where in the world are you? */
        navigator.geolocation.getCurrentPosition(function (position) {
            loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
        });
    }
});


function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function (weather) {
            $("#weather").html("");
            var html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + " (" + weather.alt.temp + "&deg;C)" + '</h2>';
            html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
            html += '<li class="currently">' + weather.currently + '</li>';

            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}