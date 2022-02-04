// Timer

// windows.setTimeout-execute callback function after certain time
// window.setInterval - execute callback function at a certain time interval

// callback function: 事件驱动的时候，定义好了业务流程，不是主动调用它，
// 而是某一个时间主动发生了以后，系统调用。函数的本质是内存的地址，
// 当定时周期到来的时候，定PRINT TIME
// 闹钟，5点打开灯，打开灯是函数
// 浇水，时机到来了以后另外触发的。

// window.setTimeout(function () {
//     console.log('now is ', new Date().getSeconds())
//     // 2000ms = 2s, perform the task after 2 sec.
// }, 2000)
//
// Window.setInterval(function () {
//     console.log('now is ', new Date().getSeconds())
//     // 2000ms = 2s, perform the task after 2 sec.
// }, 1000)

// const printTime = function () {
//     console.log('now is ', new Date().getSeconds())
// }
//
// setInterval(printTime,1000)
// obtain nodes
const eleStart = document.getElementById('start')
const eleStop = document.getElementById('stop')
const eleBody = document.getElementById('container')

// Timer variable
let timerId = null

// define event handlers
// create element function
const createP = function () {
    let eleP = document.createElement('p')
    let eleBtn = document.createElement('button')
    let eleInput = document.createElement('input')
    eleP.innerHTML = 'JC'
    eleBody.appendChild(eleP)
    eleBody.appendChild(eleBtn)
    eleBody.appendChild(eleInput)
}

// set interval function
const startPrint = function () {
    timerId = setInterval(createP, 2000)
    eleStart.removeEventListener('click',startPrint)
}
// stop the timer
const stopTimer = function () {
    clearInterval(timerId)
    eleStart.addEventListener('click',startPrint)
}

eleStart.addEventListener('click', startPrint)
eleStop.addEventListener('click',stopTimer)