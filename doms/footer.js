// FOOTER
let footer = document.createElement('footer');
footer.setAttribute('class', 'col-1');
document.body.appendChild(footer);

// FOOTER LOGO & MENU
let footerLogo = document.createElement('a');
footerLogo.setAttribute('class', 'footer-logo');
footerLogo.setAttribute('href', '#');
footerLogo.innerHTML = "apedia";
footer.appendChild(footerLogo);

let footerMenuLinkDiv = document.createElement('div');
footerMenuLinkDiv.setAttribute('class', 'footer-menu-link-div');
footer.appendChild(footerMenuLinkDiv);

let aboutMeFooter = document.createElement('a');
aboutMeFooter.setAttribute('class', 'footer-menu-link');
aboutMeFooter.setAttribute('href', 'https://www.linkedin.com/in/adam-rafiandri-b51b69187/');
aboutMeFooter.innerHTML = 'About Me';
footerMenuLinkDiv.appendChild(aboutMeFooter);

// SOCIAL ICONS
let socialIconsDiv = document.createElement('div');
socialIconsDiv.setAttribute('class', 'social-icons-div');
footer.appendChild(socialIconsDiv);

//GITHUB SOCIAL ICON
let githubAnchor = document.createElement('a');
githubAnchor.setAttribute('class', 'footer-icon');
githubAnchor.setAttribute('href', 'https://github.com/rafiandria23');

let githubIcon = document.createElement('i');
githubIcon.setAttribute('class', 'fab fa-github fa-2x');
githubAnchor.appendChild(githubIcon);
socialIconsDiv.appendChild(githubAnchor);