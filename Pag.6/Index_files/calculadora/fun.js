function updateClock() {
    const gmtTime = new Date().toUTCString();
    const cetTime = new Date().toLocaleString('nl-NL', {timeZone: 'Europe/Berlin'});
    const estTime = new Date().toLocaleString('nl-NL', {timeZone: 'America/New_York'});

    document.getElementById('gmt').innerHTML = gmtTime;
    document.getElementById('cet').innerHTML = cetTime;
    document.getElementById('est').innerHTML = estTime;
}

setInterval(updateClock, 1000);