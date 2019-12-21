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


// HEADER INSERTION
let headerScript = document.createElement('script');
headerScript.setAttribute('src', './doms/header.js');

// MAIN INSERTION
let mainScript = document.createElement('script');
mainScript.setAttribute('src', './doms/main-script.js');

// FOOTER INSERTION
let footerScript = document.createElement('script');
footerScript.setAttribute('src', './doms/footer.js');

//APPENDIX HEAD
document.head.appendChild(mainStyle);
document.head.appendChild(responsiveStyle);
document.head.appendChild(fontAwesome);

//APPENDIX BODY
document.body.appendChild(headerScript);
document.body.appendChild(mainScript);
document.body.appendChild(footerScript);