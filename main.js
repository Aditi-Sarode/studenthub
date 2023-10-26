// change navbar style on scroll//
window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

// show/hide faqs//
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',( )=>{
        faq.classList.toggle('open');

        //change icon//
        const icon= faq.querySelector('.faq_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className="uil uil-minus";
         } else{
            icon.className="uil uil-plus";
         }
    })
})

// show/hide nav menu//
const menu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector("#open-menu-btn"); // Use a unique ID
const closeMenuBtn = document.querySelector("#close-menu-btn"); // Use a unique ID

openMenuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});

// Close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
}

closeMenuBtn.addEventListener('click', closeNav);


