const menuToggle = document.getElementById('menus');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const secondsidebar = document.getElementById('secondsidebar');
const menuLinks = sidebar.querySelectorAll('ul li a');

menuToggle.addEventListener('click', () => {
    secondsidebar.classList.add('active');

   
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        sidebar.classList.add('active');
    }, 600); 
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');

    setTimeout(() => {
        secondsidebar.classList.remove('active');

        
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
    }, 400);
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href'); 

        sidebar.classList.remove('active');
        setTimeout(() => {
            secondsidebar.classList.remove('active');

           
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";

      
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 400);
    });
});


