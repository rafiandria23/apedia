// TITLE
document.title = "adam's encyclopedia";

//STYLE INSERTION
let mainStyle = document.createElement('link');
mainStyle.setAttribute('rel', 'stylesheet');
mainStyle.setAttribute('href', './styles/style.css');

let responsiveStyle = document.createElement('link');
responsiveStyle.setAttribute('rel', 'stylesheet');
responsiveStyle.setAttribute('href', './styles/style-responsive.css');

// FONT AWESOME
let fontAwesome = document.createElement('script');
fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/c12db2a1ab.js');
fontAwesome.setAttribute('crossorigin', 'anonymous');

//APPENDIX
document.head.appendChild(mainStyle);
document.head.appendChild(responsiveStyle);
document.head.appendChild(fontAwesome);