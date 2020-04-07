const apiReq = new XMLHttpRequest();
const url = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

const main = document.querySelector('.data');

apiReq.addEventListener('load', reqListener);
apiReq.open("GET", url, true);
apiReq.send();

function reqListener() {
  let data = JSON.parse(this.responseText);
  data.forEach((movie) => {
    console.log(movie);

    main.insertAdjacentHTML('beforeend',
      `<section>
      <h2>${movie.title}</h2>
      <img src="${movie.cover}" alt="${movie.title}"/>
      <p>${movie.simple_plot}</p>
    </section>`
    );
  })


}
