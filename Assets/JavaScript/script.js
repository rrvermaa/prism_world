const body=document.body;
let lastscroll=0
window.addEventListener('scroll',()=>{
    const currentscroll = window.pageYOffset
    if(currentscroll<=0){
        body.classList.remove('scroll-up')
    }
    if(currentscroll>lastscroll && !body.classList.contains("scroll-down")){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if(currentscroll<lastscroll && body.classList.contains("scroll-down")){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }
    lastscroll=currentscroll
})