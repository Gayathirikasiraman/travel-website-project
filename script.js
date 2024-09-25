const menu = document.querySelector('.home2');
    const menuList = document.querySelector('.home3');
    menu.addEventListener('click',()=>{
          menuList.classList.toggle('showmenu');
    });


// Select all navigation links
const navLinks = document.querySelectorAll('.home3 a');

// Add click event to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Get target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



const h=document.getElementById('h');
        h.addEventListener('mouseover',()=>
        {
            console.log('mouseover');
            h.style.background='#c95762';       
        });
        h.addEventListener('mouseout',()=>
        {
            console.log('mouseout');
            h.style.background='#e86471';
        });


        const h1=document.getElementById('h1');
        h1.addEventListener('mouseover',()=>
        {
            console.log('mouseover');
            h1.style.background='#c95762';      
        });
        h1.addEventListener('mouseout',()=>
        {
            console.log('mouseout');
            h1.style.background='#e86471';
        });

        const h2=document.getElementById('h2');
        h2.addEventListener('mouseover',()=>
        {
            console.log('mouseover');
            h2.style.background='#c95762';      
        });
        h2.addEventListener('mouseout',()=>
        {
            console.log('mouseout');
            h2.style.background='#e86471';
        });

        const hoverArea = document.getElementById('hover-area');

        hoverArea.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         hoverArea.style.background = '#c95762';
         hoverArea.style.transform = 'scale(1.2)';
        });
        hoverArea.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            hoverArea.style.background='#e86471';
            hoverArea.style.transform = 'scale(1)';
        });


        const hover = document.getElementById('hover');
        hover.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         hover.style.background = '#c95762';
         hover.style.transform = 'scale(1.2)';
        });
        hover.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            hover.style.background='#e86471';
            hover.style.transform = 'scale(1)';
        });


    document.getElementById('hover-area').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#c95762';
    });

    document.getElementById('hover-area').addEventListener('mouseout', function() {
        this.style.backgroundColor = '#e86471';
    });

    document.getElementById('hover').addEventListener('click', function() {
        alert('Explore hidden gems and popular attractions!'); 
    });

    const swiper=new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween:20,
    });

    const f1 = document.getElementById('f1');

        f1.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         f1.style.background = '#c95762';
         f1.style.border='transparent';
        });
        f1.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            f1.style.background='#e86471';
        });


        const f2 = document.getElementById('f2');

        f2.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         f2.style.background = '#c95762';
         f2.style.border='transparent';
        });
        f2.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            f2.style.background='#e86471';
        });


     const f3 = document.getElementById('f3');

        f3.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         f3.style.background = '#c95762';
         f3.style.border='transparent';
        });
        f3.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            f3.style.background='#e86471';
        });

        const a1 = document.getElementById('a1');

        a1.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         a1.style.color = '#c95762';
         a1.style.border='transparent';
        });
        a1.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            a1.style.color='#e86471';
        });

        const a2 = document.getElementById('a2');

        a2.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         a2.style.color = '#c95762';
         a2.style.border='transparent';
        });
        a2.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            a2.style.color='#e86471';
        });

        const a3 = document.getElementById('a3');

        a3.addEventListener('mouseover', () => {
        console.log("Mouse over!");
         a3.style.color = '#c95762';
         a3.style.border='transparent';
        });
        a3.addEventListener('mouseout',()=>{
            console.log("Mouse out!");
            a3.style.color='#e86471';
        });



          const smoothScrollLinks = document.querySelectorAll('.footer4 a');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });