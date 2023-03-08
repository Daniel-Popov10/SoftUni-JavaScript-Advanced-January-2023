function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };


    document.getElementById('daysBtn').addEventListener('click', conversion);
    document.getElementById('hoursBtn').addEventListener('click', conversion);
    document.getElementById('minutesBtn').addEventListener('click', conversion);
    document.getElementById('secondsBtn').addEventListener('click', conversion);

    function conversion(event) {
        let input = event.target.parentElement.querySelector(`:nth-child(2)`);
        let time = convert(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;

    };

    function convert(value, id) {
        let days = value / units[id];

        return {
            days: days,
            hours: days * units.hours,
            minutes: days * units.minutes,
            seconds: days * units.seconds,

        };

    }
}