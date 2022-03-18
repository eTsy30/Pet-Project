const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.getElementsByClassName('reset')
const secunda = document.querySelector('.second')
const minute = document.querySelector('.minute')
let interval
let sec = 0
let min = 0

function startTimer() {

    clearInterval(interval)
    interval = setInterval(() => {
        sec++

        if (sec <= 9) {
            secunda.textContent = '0' + sec
        } else { secunda.textContent = sec }

        if (min <= 9) {
            minute.textContent = '0' + min
        } else { minute.textContent = min }
        if (sec == 60) {
            min++
            sec = 0
        }


    }, 10)
}
function stopInterval() {
    console.log(2);
    clearInterval(interval)
}
function resetInterval() {
    console.log(3);
    clearInterval(interval)
    sec = 0
    min = 0
    secunda.innerText = '00'
    minute.innerText = '00'
}