function colorFunction() {
    document.getElementById("gLogo").style.color = "lightblue";
}

const baseURL = 'https://ghibliapi.herokuapp.com/people';

let url;

const searchBtn = document.querySelector('#searchBtn');
const section = document.querySelector('section');

searchBtn.addEventListener('click', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}?limit=6`;
    console.log('URL:', url)

fetch(url)
    .then(function(result) {
        console.log(result)
        return result.json();
    })
    .then(function(json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
      }
    let character = json;
    
    if (character.length === 0) {
        console.log('No results');
    } else {
        for (let i = 0; i < character.length; i++) {
            console.log(i);

            let article = document.createElement('article');
            let name = document.createElement('h1');
            let heading = document.createElement('h1');
            let films = document.createElement('a');
            let species = document.createElement('a');
            let ageInfo = document.createElement('p');
            let eyeColorInfo = document.createElement('p');
            let hairColorInfo = document.createElement('p');
            
            let current = character[i];

            console.log('Current:', current);

            films.href = current.url;
                console.log((films.target = "_blank"));
        
            species.href = current.url;
                console.log((species.target = "_blank"));

            console.log(films);

            name.textContent = 'Name: ' + current.name;
            films.textContent = 'Film(s): ' + current.films;
            species.textContent = 'Species: ' + current.species;
            ageInfo.textContent = 'Age: ' + current.age;
            eyeColorInfo.textContent = 'Eye Color: ' + current.eye_color;
            hairColorInfo.textContent = 'Hair Color: ' + current.hair_color;

            article.appendChild(heading);
            heading.appendChild(name);
            heading.appendChild(films);
            heading.appendChild(ageInfo);
            heading.appendChild(species);
            heading.appendChild(eyeColorInfo);
            heading.appendChild(hairColorInfo);

            section.appendChild(article);

        }
    
    }

};