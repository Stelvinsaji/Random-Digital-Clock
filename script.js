function digitalClock() {
    var date = new Date()
    // console.log(date)

    var hours = date.getHours() + '';
    // console.log(hours)

    var minutes = date.getMinutes() + '';
    // console.log(minutes)

    var seconds = date.getSeconds() + '';
    // console.log(seconds)

    var day = date.getDay()
    // console.log(day)

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds
    }

    var weekDays = ['Sun:', 'Mon:', 'Tue:', 'Wed:', 'Thu:', 'Fri:', 'Sat:']

    var clock = weekDays[day] + hours + ':' + minutes + ':' + seconds;
    // console.log(clock)

    document.getElementById('clock').innerHTML = clock;

}

digitalClock();
setInterval(digitalClock, 1000);