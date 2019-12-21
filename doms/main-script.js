// MAIN SECTION
let main = document.createElement('main');
document.body.appendChild(main);

// SEARCH BAR
let searchBar = document.createElement('input');
searchBar.setAttribute('class', 'search-bar');
searchBar.setAttribute('id', 'main-search-bar');
searchBar.setAttribute('type', 'text');
searchBar.setAttribute('onkeyup', 'searchFunc()');
searchBar.setAttribute('placeholder', 'What do you want to learn?');
searchBar.setAttribute('title', 'Type anything');

main.appendChild(searchBar);

const searchFunc = function () {
    // Declare variables
    let input = document.getElementsByClassName('search-bar');
    let filter = input[0].value.toLowerCase().split(' ');
    let articleDiv = document.getElementsByClassName('article-div');

    // Loop through all titles and hide those that don't match the search query
    for (let i = 0; i < articleDiv.length; i++) {
        let check = 0;
        let titleSearch = articleDiv[i].getElementsByClassName('article-title')[0].innerHTML.toLowerCase().split(' ');
        let contentSearch = articleDiv[i].getElementsByClassName('article-content')[0].innerHTML.toLowerCase().split(' ');

        for (let j = 0; j < titleSearch.length; j++) {
            for (let k = 0; k < filter.length; k++) {
                if (titleSearch[j].indexOf(filter[k]) > -1) {
                    check++;
                }
            }
        }

        for (let l = 0; l < contentSearch.length; l++) {
            for (let m = 0; m < filter.length; m++) {
                if (contentSearch[l].indexOf(filter[m]) > -1) {
                    check++;
                }
            }
        }

        if (check > 0) {
            articleDiv[i].style.display = '';
        } else if (check === 0) {
            articleDiv[i].style.display = 'none';
        }
    }
}




// ARTICLE SECTION

const createArticle = function (title, content) {

    let articleDiv = document.createElement('div');
    articleDiv.setAttribute('class', 'article-div');
    main.appendChild(articleDiv);

    let articleTitle = document.createElement('a');
    articleTitle.setAttribute('class', 'article-title');
    articleTitle.innerHTML = title;
    articleDiv.appendChild(articleTitle);

    let articleContent = document.createElement('p');
    articleContent.setAttribute('class', 'article-content');
    articleContent.innerHTML = content;

    if (content === undefined) {
        return articleDiv;
    } else {
        articleDiv.appendChild(articleContent);
    }

    return articleDiv;
}



// ABOUT ME
let aboutMeContent = 'Adam Rafiandri is an Aviation Maintenance Electrician graduated from SMK Penerbangan Agkasa Bogor located near the Atang Sendjaja Air Force Base. His passion in Aviation and Programming have brought him to the amazing world of both and also made him always feel fascinated about them.'
let articleAboutMeDiv = createArticle('About Me', aboutMeContent);

// ABOUT JAVASCRIPT - art1
let art1Content = 'JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Source: Wikipedia.';
let art1 = createArticle("What is JavaScript?", art1Content);

// ABOUT HTML - art2
let art2Content = 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. Source: Wikipedia.';
let art2 = createArticle("What is HTML?", art2Content);

// ABOUT CSS - art3
let art3Content = 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. Source: Wikipedia.';
let art3 = createArticle("What is CSS?", art3Content);

// ABOUT MONGODB - art4
let art4Content = 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. Source: Wikipedia.';
let art4 = createArticle("What is MongoDB?", art4Content);