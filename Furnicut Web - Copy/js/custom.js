// wow js
new WOW().init();

//javaScript Mouse hover start
const mouseEnter = document.querySelectorAll('.box')
const mouseEnterLeave = document.querySelectorAll('.box1')

mouseEnter.forEach((e) =>{
    e.addEventListener('mouseenter', () =>{
        e.classList.add('animate__animated', 'animate__bounce')
    })
    e.addEventListener('mouseout', () =>{
        e.classList.toggle('animate__animated')
        e.classList.toggle('animate__bounce')
    })
})

mouseEnterLeave.forEach((e) =>{
    e.addEventListener('mouseenter', () =>{
        e.classList.add('animate__animated', 'animate__fadeInDown')
    })
    e.addEventListener('mouseout', () =>{
        e.classList.toggle('animate__animated')
        e.classList.toggle('animate__fadeInDown')
    })
})
//javaScript Mouse hover start
