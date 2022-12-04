// store the elements from the DOM
let myBtn = document.querySelector(".rendom"),
    hexa = document.querySelector("#text"),
    paint = document.querySelector(".colorBox");
// the first event for random color
myBtn.onclick =()=>{
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    hexa.value=`#${parseInt(r).toString(16)}${parseInt(g).toString(16)}${parseInt(b).toString(16)}`
    paint.style.backgroundColor=`#${parseInt(r).toString(16)}${parseInt(g).toString(16)}${parseInt(b).toString(16)}`
}

// the second event for input color 
    hexa.addEventListener('keyup',()=>{
        paint.style.backgroundColor=hexa.value;
    })