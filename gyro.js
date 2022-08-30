console.log("Hello world")
let axis = document.querySelectorAll('.axis')

    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }

window.addEventListener("devicemotion", e => {
    axis[0].innerHTML = e.rotationRate.beta
    axis[1].innerHTML = e.rotationRate.gamma
    axis[2].innerHTML = e.rotationRate.alpha
});


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
    


  
