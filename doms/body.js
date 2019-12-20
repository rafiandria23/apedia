// HEADER
let header = document.createElement('header');


// HEADER LOGO & TOP NAVIGATION BAR
let logo = document.createElement('a');
logo.setAttribute('class', 'top-menu-link');
logo.setAttribute('id', 'header-logo');
logo.setAttribute('href', '#home');
logo.innerHTML = 'apedia';
header.appendChild(logo);

let topMenuLinkDiv = document.createElement('div');
topMenuLinkDiv.setAttribute('class', 'header-right');
header.appendChild(topMenuLinkDiv);

let home = document.createElement('a')
home.setAttribute('class', 'top-menu-link');
home.setAttribute('href', '#home');
home.innerHTML = 'Home';
topMenuLinkDiv.appendChild(home);

let categories = document.createElement('a')
categories.setAttribute('class', 'top-menu-link');
categories.setAttribute('href', '#');
categories.innerHTML = 'Categories';
topMenuLinkDiv.appendChild(categories);


let aboutMe = document.createElement('a')
aboutMe.setAttribute('class', 'top-menu-link');
aboutMe.setAttribute('href', '#');
aboutMe.innerHTML = 'About Me';
topMenuLinkDiv.appendChild(aboutMe);

// FOOTER
let footer = document.createElement('footer');

// FOOTER LOGO & MENU
let footerLogo = document.createElement('a');
footerLogo.setAttribute('class', 'footer-logo');
footerLogo.setAttribute('href', '#');
footer.appendChild(footerLogo);

let footerMenuLinkDiv = document.createElement('div');
footerMenuLinkDiv.setAttribute('class', 'footer-menu-link-div');
footer.appendChild(footerMenuLinkDiv);

let aboutMeFooter = document.createElement('a');
aboutMeFooter.setAttribute('class', 'footer-menu-link');
aboutMeFooter.setAttribute('href', '#');
aboutMeFooter.innerHTML = 'About Me';
footerMenuLinkDiv.appendChild(aboutMeFooter);

// SOCIAL ICONS
let socialIconsDiv = document.createElement('div');
socialIconsDiv.setAttribute('class', 'social-icons-div');
footer.appendChild(socialIconsDiv);

let githubAnchor = document.createElement('a');
let githubIcon = document.createElement('i');
githubIcon.setAttribute('class', 'fab fa-github');
githubIcon.setAttribute('id', 'github-footer-icon');


// APPENDIX
document.body.appendChild(header);
document.body.appendChild(footer);