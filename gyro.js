window.addEventListener('DOMContentLoaded', function() {
console.log("Hello world")
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);
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
    xG = e.rotationRate.beta
    yG = e.rotationRate.gamma
    zG = e.rotationRate.alpha
    drawChart()
}

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log("Pressed")
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
    

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['x','y'],
      [ 0, yG],
     
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }


})