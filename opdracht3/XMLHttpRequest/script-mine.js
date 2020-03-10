
//script.js
//console.log(this);
//var uri = "https://api.data.amsterdam.nl/panorama/recente_opnames/2018/?format=json";
//var uri = "https://open.data.amsterdam.nl/Attracties.json";
//var uri = "https://open.data.amsterdam.nl/Activiteiten.json";
//var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//var uri = "http://dennistel.nl/movies"; //online, geen https
var uri = 'https://open.data.amsterdam.nl/Activiteiten.json'; //json file op github
var button = document.querySelector("button");
var loaderElement = document.querySelector("span");
var section = document.querySelector('section');


fetch(uri).then(function(response) {
  console.log(response);
  return response.json();
}).then(function(theJSON) {
  console.log(theJSON);
  theJSON.forEach((element) => {
    console.log(element);
    section.insertAdjacentElement('afterbegin',
      `
      <img src="${element.media[0]}" alt="">
      <h2>${element.title}</h2>
      <p>${element.title}</p>
      `
      );
  })
})
