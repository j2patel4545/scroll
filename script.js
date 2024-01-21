var active =3;

var mincircle = document.querySelectorAll(".mincircle");

gsap.to(mincircle[active-1],{
        opacity: 1
})

gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 8.5
})

mincircle.forEach(function(val,index){
    val.addEventListener("click",function(){
            gsap.to("#circle",{
                rotate: (3-(index+1))*10,
                ease : Expo.easeInOut,
                duration : 1
            })
    })
    greyout();
    gsap.to(this,{
        opacity:1
    })
}) 

function greyout(){
    gsap.to(mincircle,{
        opacity:0.5

    })
}


        // page loader
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector("#wap").style.display = "none";
    }, 3200); // 3000 milliseconds = 3 seconds
  });