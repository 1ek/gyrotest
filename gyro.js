console.log("Hello world")
// const axis = document.querySelectorAll('.axis')
const btn = document.querySelector('.starter')
let isRunning = false 

function ifNotNull(id, value, amount = 5) {
    if (value != null) {
        document.getElementById(id).innerHTML = value.toFixed(amount)
    }
}

function motionHandler(e) {
    ifNotNull('x', e.rotationRate.beta)
    ifNotNull('y', e.rotationRate.gamma)
    ifNotNull('z', e.rotationRate.alpha)
    // axis[0].innerHTML = e.rotationRate.beta.toFixed(5)
    // axis[1].innerHTML = e.rotationRate.gamma.toFixed(5)
    // axis[2].innerHTML = e.rotationRate.alpha.toFixed(5)
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
    





// function handleOrientation(event) {
//     updateFieldIfNotNull('Orientation_a', event.alpha);
//     updateFieldIfNotNull('Orientation_b', event.beta);
//     updateFieldIfNotNull('Orientation_g', event.gamma);
//     incrementEventCount();
//   }
  
//   function incrementEventCount(){
//     let counterElement = document.getElementById("num-observed-events")
//     let eventCount = parseInt(counterElement.innerHTML)
//     counterElement.innerHTML = eventCount + 1;
//   }
  
//   function updateFieldIfNotNull(fieldName, value, precision=10){
//     if (value != null)
//       document.getElementById(fieldName).innerHTML = value.toFixed(precision);
//   }
  
//   function handleMotion(event) {
//     updateFieldIfNotNull('Gyroscope_z', event.rotationRate.alpha);
//     updateFieldIfNotNull('Gyroscope_x', event.rotationRate.beta);
//     updateFieldIfNotNull('Gyroscope_y', event.rotationRate.gamma);
//     incrementEventCount();
//   }
  
//   let is_running = false;
//   let demo_button = document.getElementById("start_demo");
//   demo_button.onclick = function(e) {
//     e.preventDefault();
    
//     // Request permission for iOS 13+ devices
//     if (
//       DeviceMotionEvent &&
//       typeof DeviceMotionEvent.requestPermission === "function"
//     ) {
//       DeviceMotionEvent.requestPermission();
//     }
    


  
