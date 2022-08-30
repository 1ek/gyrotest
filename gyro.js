console.log("Hello world")
const axis = document.querySelectorAll('.axis')
let gyroscope = new Gyroscope({frequency: 60});

gyroscope.addEventListener('reading', e => {
    console.log("Ang vel X = " + gyroscope.x)
    console.log("Ang vel Y = " + gyroscope.y)
    console.log("Ang vel Z = " + gyroscope.z)
    axis[0].textContent = gyroscope.x
    axis[1].textContent = gyroscope.y
    axis[2].textContent = gyroscope.z
});

gyroscope.start();