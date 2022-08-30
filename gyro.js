
console.log("Hello world")
// const Chart = require('chart.js');
// const axis = document.querySelectorAll('.axis')
const btn = document.querySelector('.starter')
let isRunning = false 

function ifNotNull(id, value, amount = 5) {
    if (value != null) {
        document.getElementById(id).innerHTML = value.toFixed(amount)
    }
}

let xG = 0
let yG = 0
let zG = 0

function motionHandler(e) {
    ifNotNull('x', e.rotationRate.beta)
    ifNotNull('y', e.rotationRate.gamma)
    ifNotNull('z', e.rotationRate.alpha)
    xG = +e.rotationRate.beta
    yG = +e.rotationRate.gamma
    zG = +e.rotationRate.alpha
    
}

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log("Pressed")

    Plotly.newPlot('chartX', [{
        y:[getX()],
        type: 'line'
    }], {yaxis: {range: [-0.03, 0.03]}})

    Plotly.newPlot('chartY', [{
        y:[getY()],
        type: 'line'
    }], {yaxis: {range: [-0.03, 0.03]}})

    
    
    if (isRunning) {
        btn.innerText = "START"
        isRunning = false
        window.removeEventListener("devicemotion", motionHandler)
    } else {
        isRunning = true
        btn.innerText = "STOP"
        window.addEventListener("devicemotion", motionHandler)
    }

    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission();
    }
})


function getData() {
    return Math.random()
}

function getX() {
    return xG
}
function getY() {
    return yG
}
function getZ() {
    return zG
}


setInterval(function() {
    Plotly.extendTraces('chartX', {y:[[getX()]]}, [0])
    Plotly.extendTraces('chartY', {y:[[getY()]]}, [0])
   
}, 100)
