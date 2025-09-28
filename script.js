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

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBt = document.getElementById("closeBt");
const viewSiteBtn = document.getElementById("viewSiteBtn");
const buttons = document.querySelectorAll(".card button");

let currentLink = ""; 

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.getAttribute("data-img");
    const siteLink = btn.getAttribute("data-link");

    modalImg.src = imgSrc;
    currentLink = siteLink; 

    modal.classList.add("show");
  });
});

closeBt.addEventListener("click", () => {
  modal.classList.remove("show");
  modalImg.src = "";
  currentLink = "";
});


viewSiteBtn.addEventListener("click", () => {
  if (currentLink) {
    window.open(currentLink, "_blank"); 
  }
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modalImg.src = "";
    currentLink = "";
  }
});

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
