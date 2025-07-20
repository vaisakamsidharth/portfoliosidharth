//toggle-button

const hamburger = document.getElementById("hamburger");
const navMenu =   document.getElementById("nav-menu");
const navLink =   document.querySelectorAll(".nav-link");
const closeIcon =   document.getElementById("nav-close");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    });
});

closeIcon.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })

hamburger.addEventListener("click", () => {
        navMenu.classList.remove("hidden")
    })


// dark light theme
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode")== "dark"){
    darkMode();
}else{
    lightMode();
}

themeBtn.addEventListener("click",(e)=> {
    if(localStorage.getItem("mode")=="light"){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}

// tabs 

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator")

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";
const all = document.querySelectorAll(".work_card");
const devolops = document.querySelectorAll(".devolop");
const dashboards = document.querySelectorAll(".dashboard");
const apps = document.querySelectorAll(".app");


tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        tabs.forEach(t => t.classList.remove("text-whiteColor"));
        tab.classList.add("text-whiteColor");

        const tabval = tab.getAttribute("data-tabs");

        all.forEach(item => {
            item.style.display = "none";
        });

        if (tabval == "devolop") {
            devolops.forEach(item => {
                item.style.display = "block";
            });
        } else if (tabval == "dashboard") {
            dashboards.forEach(item => {
                item.style.display = "block";
            });
        } else if (tabval == "app") {
            apps.forEach(item => {
                item.style.display = "block";
            });
        } else {
            all.forEach(item => {
                item.style.display = "block";
            });
        }
    });
});

// change baground color 

const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTag = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");
    const logo = document.getElementById("logo");
    const whiteLogo = document.getElementById("white-logo-dark");


    if(this.scrollY >= 200){
        navbar.classList.add("bg-primaryColor")
        aTag.forEach((item) => {
            item.classList.add("text-whiteColor")
        })

        themeToggle.classList.add("text-whiteColor")
        hamburger.classList.add("text-whiteColor")

    }else{
        navbar.classList.remove("bg-primaryColor")
        aTag.forEach((item) => {
            item.classList.remove("text-whiteColor")
        })

        themeToggle.classList.remove("text-whiteColor")
        hamburger.classList.remove("text-whiteColor")
    }
}

window.addEventListener("scroll",scrollHeader)


// show scroll up 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll_up");
    
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
};

window.addEventListener("scroll",scrollUp)



// SCROLL SECTION ACTIVE LINK 

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current ="hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        
    if(this.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
    }
    });
    navLinks.forEach(item => {
        item.classList.remove('active');
        if(item.href.includes(current)){
            item.classList.add('active');
        }
    })
}
window.addEventListener("scroll",activeLink)



