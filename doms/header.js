// HEADER
let header = document.createElement('header');
document.body.appendChild(header);

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