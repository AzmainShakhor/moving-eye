

let ball = document.getElementsByClassName("ball")  
document.onmousemove = function(event){
    var x =event.clientX*100/window.innerWidth + "%";
    var y= event.clientX*70/window.innerHeight + "%";

    for(var i=0; i<2; i++){
        ball[i].style.left = x/2;
        ball[i].style.top = y/2;
        ball[i].style.transform = "translate("+x+" , "+y+")";

    }
}







// document.querySelector('body').addEventListener("mousemove", eyeball)

// function eyeball(event){
//     const eye = document.querySelectorAll(".ball")
//     eye.forEach(function (eye){
//         let x = eye.getBoundingClientRect().left +eye.clientWidth / 2 ;
//         let y = eye.getBoundingClientRect().top +eye.clientHeight / 2;
//         let radian = Math.atan2(event.pageX -x, event.pageY -y);
//         let rotation = radian * (180 / Math.PI)* -1 + 270;
//         eye.style.transform = "rotate("+rotation+"deg)"

//     })
// }