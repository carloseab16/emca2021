const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lista');
    const close = document.querySelector('.times');
    
    burger.addEventListener('click',()=>{
        nav.classList.remove("nav-inactive");
        nav.classList.toggle("nav-active");
      
    });
    close.addEventListener('click',()=>{
        nav.classList.remove("nav-active");
        nav.classList.toggle("nav-inactive");
        
    });

}


navSlide();