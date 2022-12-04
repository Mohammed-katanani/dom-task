// store the elements from the DOM
let myBtn = document.querySelector(".rendom"),
    hexa = document.querySelector("#text"),
    paint = document.querySelector(".colorBox");

const randomColor = ()=>{
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    let hexaColor=`#${parseInt(r).toString(16)}${parseInt(g).toString(16)}${parseInt(b).toString(16)}`
    hexa.value=hexaColor
    paint.style.backgroundColor=hexaColor
}
// the first event for random color
myBtn.addEventListener('click',randomColor)

// the second event for input color 
hexa.addEventListener('keyup',()=>{
        paint.style.backgroundColor=hexa.value;
    })
// the optional part 
    var colorint;
paint.addEventListener('mouseover',()=>{
    colorint=setInterval(randomColor,500)}
)
paint.addEventListener('mouseout',()=>{
    clearInterval(colorint)
})