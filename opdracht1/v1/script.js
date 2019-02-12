/*jshint esversion: 6 */
var songArray = [
  {
    artist: "Pusha-T",
    song: "Nostalgia",
    duration: "2:00",
    date: new Date(2019, 0, 19).toString().slice(4, 15)
  },
  {
    artist: "Monte Booker & Bari",
    song: "interstellar",
    duration: "2:00",
    date: new Date(2013, 0, 1).toString().slice(4, 15)
  },
  {
    artist: "GoldLink",
    song: "Pray Everyday",
    duration: "2:00",
    date: new Date(2019, 0, 12).toString().slice(4, 15)
  },
  {
    artist: "GoldLink",
    song: "Got Muscle",
    duration: "2:00",
    date: new Date(2019, 0, 25).toString().slice(4, 15)
  },
  {
    artist: "Domo Genesis",
    song: "Online",
    duration: "2:00",
    date: new Date(2019, 0, 22).toString().slice(4, 15)
  },
  {
    artist: "Saba",
    song: "Excited",
    duration: "2:00",
    date: new Date(2019, 0, 15).toString().slice(4, 15)
  },
  {
    artist: "Smino",
    song: "Colours",
    duration: "2:00",
    date: new Date().toString().slice(4, 15)
  }
];

var playlist = document.querySelector("ol");
var addSong = document.querySelector("button");
var counter = document.querySelector("span");
counter.innerHTML = "Songs: " + songArray.length;

for (let i = 0; i < songArray.length; i++) {
  playlist.insertAdjacentHTML(
    "beforeend",
    `<li class="dropzone" draggable="true">
        <p>${songArray[i].artist}</p>
        <p>${songArray[i].song}</p>
        <p class="duration">${songArray[i].duration}</p>
        <p>${songArray[i].date}</p>
        <p id="dragOption">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.533 438.533">
            <g>
              <g>
              <path d="M420.265,328.897H18.274c-4.952,0-9.235,1.813-12.851,5.428C1.807,337.938,0,342.224,0,347.172v36.548
              c0,4.949,1.807,9.23,5.424,12.848c3.619,3.613,7.902,5.424,12.851,5.424h401.991c4.948,0,9.229-1.811,12.847-5.424
              c3.614-3.617,5.421-7.898,5.421-12.848v-36.548c0-4.948-1.8-9.233-5.421-12.847C429.495,330.711,425.217,328.897,420.265,328.897z
              "/>
              <path d="M433.112,41.968c-3.617-3.617-7.898-5.426-12.847-5.426H18.274c-4.952,0-9.235,1.809-12.851,5.426
              C1.807,45.583,0,49.866,0,54.813V91.36c0,4.949,1.807,9.229,5.424,12.847c3.619,3.618,7.902,5.424,12.851,5.424h401.991
              c4.948,0,9.229-1.807,12.847-5.424c3.614-3.617,5.421-7.898,5.421-12.847V54.813C438.533,49.866,436.729,45.583,433.112,41.968z"
              />
              <path d="M420.265,182.72H18.274c-4.952,0-9.235,1.809-12.851,5.426C1.807,191.761,0,196.044,0,200.992v36.547
              c0,4.948,1.807,9.236,5.424,12.847c3.619,3.614,7.902,5.428,12.851,5.428h401.991c4.948,0,9.229-1.813,12.847-5.428
              c3.614-3.61,5.421-7.898,5.421-12.847v-36.547c0-4.948-1.807-9.231-5.421-12.847C429.495,184.528,425.217,182.72,420.265,182.72z"
              />
              </g>
            </g>
          </svg>
        </p>
    </li>`
  );
}

addSong.addEventListener(
  "click",
  function(event) {
    event.preventDefault();
    // variable to store data
    var addSongInfo = {};

    // Get the data from  the inputs
    addSongInfo.artist = document.querySelector(".Artist").value;
    addSongInfo.song = document.querySelector(".Title").value;
    addSongInfo.duration = document.querySelector(".Duration").value;
    addSongInfo.date = new Date().toString().slice(4, 15);

    // fill in the data with html
    playlist.insertAdjacentHTML(
      "beforeend",
      `<li class="dropzone" draggable="true">
        <p>${addSongInfo.artist}</p>
        <p>${addSongInfo.song}</p>
        <p class="duration">${addSongInfo.duration}</p>
        <p>${addSongInfo.date}</p>
        <p id="dragOption">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.533 438.533">
            <g>
              <g>
              <path d="M420.265,328.897H18.274c-4.952,0-9.235,1.813-12.851,5.428C1.807,337.938,0,342.224,0,347.172v36.548
              c0,4.949,1.807,9.23,5.424,12.848c3.619,3.613,7.902,5.424,12.851,5.424h401.991c4.948,0,9.229-1.811,12.847-5.424
              c3.614-3.617,5.421-7.898,5.421-12.848v-36.548c0-4.948-1.8-9.233-5.421-12.847C429.495,330.711,425.217,328.897,420.265,328.897z
              "/>
              <path d="M433.112,41.968c-3.617-3.617-7.898-5.426-12.847-5.426H18.274c-4.952,0-9.235,1.809-12.851,5.426
              C1.807,45.583,0,49.866,0,54.813V91.36c0,4.949,1.807,9.229,5.424,12.847c3.619,3.618,7.902,5.424,12.851,5.424h401.991
              c4.948,0,9.229-1.807,12.847-5.424c3.614-3.617,5.421-7.898,5.421-12.847V54.813C438.533,49.866,436.729,45.583,433.112,41.968z"
              />
              <path d="M420.265,182.72H18.274c-4.952,0-9.235,1.809-12.851,5.426C1.807,191.761,0,196.044,0,200.992v36.547
              c0,4.948,1.807,9.236,5.424,12.847c3.619,3.614,7.902,5.428,12.851,5.428h401.991c4.948,0,9.229-1.813,12.847-5.428
              c3.614-3.61,5.421-7.898,5.421-12.847v-36.547c0-4.948-1.807-9.231-5.421-12.847C429.495,184.528,425.217,182.72,420.265,182.72z"
              />
              </g>
            </g>
          </svg>
        </p>
    </li>`
    );

    //  push the data in the array
    songArray.push(addSongInfo);
    // add +1 to the counter
    counter + 1;
    // fill in the counter with the length
    counter.innerHTML = "Songs: " + songArray.length;
  },
  true
);

// here we are going to store the event.target
var dragged;
// get the children of the playlist
var playlistInsert = playlist.children;

// start the drag event listener
document.addEventListener("drag", function(event) {}, false);

// When the item is being held
document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.25;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.setAttribute("id", "over");
      console.log(event.target, "enter");
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      // remove the ID so it won't show
      event.target.removeAttribute("id", "over");
      // remove the ID so it won't show the border (failsafe)
      event.target.style.borderBottom = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      // don't show the border anymore
      event.target.style.borderBottom = "";
      // remove the id "over"
      event.target.removeAttribute("id", "over");
      // Remove the child beneath
      dragged.parentNode.removeChild(dragged);
      // add html after the end of the selected target.
      event.target.insertAdjacentHTML(
        "afterend",
        `<li class="dropzone" draggable="true">
        <p>${dragged.children[0].textContent}</p>
        <p>${dragged.children[1].textContent}</p>
        <p class="duration">${dragged.children[2].textContent}</p>
        <p>${dragged.children[3].textContent}</p>
        <p id="dragOption">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.533 438.533">
            <g>
              <g>
              <path d="M420.265,328.897H18.274c-4.952,0-9.235,1.813-12.851,5.428C1.807,337.938,0,342.224,0,347.172v36.548
              c0,4.949,1.807,9.23,5.424,12.848c3.619,3.613,7.902,5.424,12.851,5.424h401.991c4.948,0,9.229-1.811,12.847-5.424
              c3.614-3.617,5.421-7.898,5.421-12.848v-36.548c0-4.948-1.8-9.233-5.421-12.847C429.495,330.711,425.217,328.897,420.265,328.897z
              "/>
              <path d="M433.112,41.968c-3.617-3.617-7.898-5.426-12.847-5.426H18.274c-4.952,0-9.235,1.809-12.851,5.426
              C1.807,45.583,0,49.866,0,54.813V91.36c0,4.949,1.807,9.229,5.424,12.847c3.619,3.618,7.902,5.424,12.851,5.424h401.991
              c4.948,0,9.229-1.807,12.847-5.424c3.614-3.617,5.421-7.898,5.421-12.847V54.813C438.533,49.866,436.729,45.583,433.112,41.968z"
              />
              <path d="M420.265,182.72H18.274c-4.952,0-9.235,1.809-12.851,5.426C1.807,191.761,0,196.044,0,200.992v36.547
              c0,4.948,1.807,9.236,5.424,12.847c3.619,3.614,7.902,5.428,12.851,5.428h401.991c4.948,0,9.229-1.813,12.847-5.428
              c3.614-3.61,5.421-7.898,5.421-12.847v-36.547c0-4.948-1.807-9.231-5.421-12.847C429.495,184.528,425.217,182.72,420.265,182.72z"
              />
              </g>
            </g>
          </svg>
        </p>
        </li>`
      );
    }
  },
  false
);

// add the hover to the songs to show the grab icon

var dropZone = document.querySelectorAll(".dropzone");
for (var i = 0; i < dropZone.length; i++) {
  dropZone[i].addEventListener(
    "mouseover",
    function(event) {
      // console.log(this.children[4].className)
      if (this.children[4]) {
        this.children[4].classList.add("show");
      }
    },
    false
  );
  dropZone[i].addEventListener(
    "mouseleave",
    function(event) {
      // console.log(this.children[2].className)
      if (this.children[4]) {
        this.children[4].classList.remove("show");
      }
    },
    false
  );
}
