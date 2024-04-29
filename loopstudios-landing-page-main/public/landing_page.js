document.addEventListener("DOMContentLoaded", function() {

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
  
    if (navbarToggle && navbarNav) {
      navbarToggle.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
      });
    }
  
  
    const scrollLinks = document.querySelectorAll('.navbar-nav a');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  

    const navbarLogoAltText = "Logo";
    const navbarSloganText = "IMMERSIVE EXPERIENCES THAT DELIVER";
    const navbarLinksText = {
      about: "About",
      careers: "Careers",
      events: "Events",
      products: "Products",
      support: "Support"
    };
  
    const vrContentTitle = "Immersive experiences that deliver The leader in interactive VR";
    const vrContentParagraph = "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.";
  
    const creationsTitle = "Our creations";
    const creationsButton = "SEE ALL";
  
    const galleryOverlayText = {
      deepEarth: "DEEP EARTH",
      nightArcade: "NIGHT ARCADE",
      soccerTeam: "SOCCER TEAM",
      grid: "GRID",
      fromAbove: "FROM ABOVE",
      pocketBorealis: "POCKET BOREALIS",
      curiosity: "CURIOSITY",
      fisheye: "FISHEYE"
    };
  
    const footerLogoAltText = "Footer Logo";
    const footerNavLinksText = {
      about: "About",
      careers: "Careers",
      events: "Events",
      products: "Products",
      support: "Support"
    };
    const footerSocialIconsAltText = {
      facebook: "Facebook",
      twitter: "Twitter",
      pinterest: "Pinterest",
      instagram: "Instagram"
    };
    const footerCopyrightText = "© 2021 Loopstudios. All rights reserved.";
  
   
    document.getElementById("navbar-logo").alt = navbarLogoAltText;
    document.querySelector(".nav-slogan h1").innerText = navbarSloganText;
  
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link, index) => {
      const keys = Object.keys(navbarLinksText);
      link.innerText = navbarLinksText[keys[index]];
    });
  
    document.querySelector(".vr-cont h1").innerText = vrContentTitle;
    document.querySelector(".vr-cont p").innerText = vrContentParagraph;
  
    document.querySelector(".creations h1").innerText = creationsTitle;
    document.querySelector(".creations .btn").innerText = creationsButton;
  
    const galleryOverlayElements = document.querySelectorAll(".gallery .overlay");
    galleryOverlayElements.forEach((overlay, index) => {
      const keys = Object.keys(galleryOverlayText);
      overlay.innerText = galleryOverlayText[keys[index]];
    });
  
    document.querySelector(".footer-left img").alt = footerLogoAltText;
  
    document.querySelectorAll(".footer-nav li a").forEach((link, index) => {
      const keys = Object.keys(footerNavLinksText);
      link.innerText = footerNavLinksText[keys[index]];
    });
  
    document.querySelectorAll(".footer-right img").forEach((icon, index) => {
      const keys = Object.keys(footerSocialIconsAltText);
      icon.alt = footerSocialIconsAltText[keys[index]];
    });
  
    document.querySelector(".copyright").innerText = footerCopyrightText;
  });
  