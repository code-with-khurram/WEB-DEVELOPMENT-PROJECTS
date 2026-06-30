let rgc = document.querySelector("h3");
let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener('click',function (){
    let colors = getRandomColors();
    rgc.innerText = colors;
    div.style.backgroundColor = colors;
})

function getRandomColors(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    return colors = `rgb(${red},${green},${blue})`;
}
