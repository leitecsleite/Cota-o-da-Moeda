/* Relogio */

setInterval(() => {
    const data = new Date();

    const hora = data.getHours();
    const min = data.getMinutes();
    let seg = data.getSeconds();


    const valueSeconds = parseInt(seconds.textContent);
    const valueMinutes = parseInt(minute.textContent);
    const valueHour = parseInt(hours.textContent)

    if (valueSeconds < 9 || valueSeconds == 59) {
        seconds.innerHTML = `0${seg}`;

    } else {
        seconds.innerHTML = seg
    }

    if (valueMinutes < 9 || valueMinutes == 56) {
        minute.innerHTML = `0${min}`;
    } else {
        minute.innerHTML = min;
    }

    if (valueHour < 9 || valueHour == 23) {
        hours.innerHTML = `0${hora}`;
    } else {
        hours.innerHTML = hora;
    }

}, 1000)