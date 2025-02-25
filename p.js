// -------lenis------ //
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
// -----lenis------- //

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ repeat: -1, ease: "none" });

tl.to(".landing-page",{
     height:0,
    scrollTrigger:{
      pin:true, start:"top% 20%" , end :"50% 50%", scrub:1
    }
})
// tl.to(".boy-img",{
//      opacity:0.,
//     scrollTrigger:{
//       pin:true, start:"top% 50%" , end :"50% 50%", scrub:1
//     }
// })

tl.from(".ab-left>h2", {
  
  y: 100, // More noticeable movement
  duration: 1.5,
  
  scrollTrigger: {
    trigger: ".ab-left",
    start: "0%% 90%",  // Adjust if needed
    end: "0% 80%", 
    scrub: true,  // Smooth effect on scroll
    scroller: "body", // Ensure this is correct
     tagger:.3,
  }
});

tl.from(".ab-right", {
  opacity: 0, 
  y: 30, // More noticeable movement
  duration: 1.5,
  scrollTrigger: {
    trigger: ".ab-right",
    start: "0% 80%",  // Adjust if needed
    end: "0% 70%",
    scrub: true,  // Smooth effect on scroll
    scroller: "body", // Ensure this is correct 
  }
});


tl.from(".upper-text",{
  height:0,x:50,y:200,duration:2,
  scrollTrigger:{
    scrub:2, pin:true, start:"20% 80%",end:"24% 62%",scroller:"body"
  }
})

tl.to(".upper-text>p",{
    x:-700, scrollTrigger:{
     scrub:2, pin:true,  start:"20% 70%",end:"25% 45%", scroller:"body"
    }
})

tl.from(".text-anim",{
   height:0,x:50,y:200,duartion:2,
   scrollTrigger:{
    scrub:1,scroller:"body", pin:true, start:"44% 85%", end:"46% 75%"
   }
})
tl.from(".color-box",{
  width:100, opacity:0, 
  scrollTrigger:{
    scroller:"body", pin:true,  start:"50% 95%", end:"50% 76%",scrub:2
  }
})
tl.from(".sec-color1",{
   width:0,opacity:0, scrollTrigger:{
    scrub:2, scroller:"body", start:"58% 85%",end:"60% 65%",pin:true
   }
})

tl.from(".last",{
  width:450,opacity:0,scrollTrigger:{
    scrub:2, pin:true, start:"67% 75%",end:"69% 66%"
  }
})

let catchme = document.querySelector(".last");
let catchup = document.querySelector(".catch-img");
catchme.addEventListener("mouseenter",function(){
  catchup.style.opacity=1
  gsap.from(catchup,{
    duration:2.5,
    ease: "slow(0.7,0.7,false)",
    y: -250
  })
})
catchme.addEventListener("mousemove",function(dets){
  gsap.to(catchup,{
    duration:2.5,
    ease: "elastic.out(1,0.3)",
   x:dets.x - catchup.getBoundingClientRect().x-500,
    y:dets.y - catchup.getBoundingClientRect().y-50
  })
})
catchme.addEventListener("mouseleave",function(){
  catchup.style.opacity=0
})