var tl = gsap.timeline()

tl.from("nav li",{
    y: -50,
    duration: 0.4,
    delay: 0.4,
    opacity: 0,
stagger: 0.3,

})
tl.from("button",{
    duration: 0.6,
    delay: 0.4,
    opacity: 0,
    scale: 0,
})
tl.from(".cycle",{
    x:80,
    opacity:0,
duration:0.5,

})
tl.from(".box1, .box2",{
    x:80,
    opacity:0,
duration:0.5,
})