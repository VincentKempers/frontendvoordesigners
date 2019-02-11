/*jshint esversion: 6 */

var playlist = document.querySelector("ol");

var songArray = [
  { artist: "Saba", song: "Excited", duration: "2:00" },
  { artist: "Monte Booker & Bari", song: "interstellar", duration: "2:00" },
  { artist: "GoldLink", song: "Pray Everyday", duration: "2:00" },
  { artist: "GoldLink", song: "Got Muscle", duration: "2:00" },
  { artist: "Domo Genesis", song: "Online", duration: "2:00" },
  { artist: "Saba", song: "Excited", duration: "2:00" },
  { artist: "Monte Booker & Bari", song: "interstellar", duration: "2:00" },
];

var dragged;

var playlistInsert = playlist.children;
for (let i = 0; i < songArray.length; i++) {
  playlist.insertAdjacentHTML(
    "beforeend",
    `<li class="dropzone" draggable="true">
        <p>${songArray[i].artist}</p>
        <p>${songArray[i].song}</p>
        <p class="duration">${songArray[i].duration}</p>
        <p>00/00/00</p>
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

document.addEventListener("drag", function(event) {}, false);
document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;

  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
    event.target.classList.remove("over");
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
      event.target.style.borderBottom = "3px solid lightgreen";
      // event.target.classList.add("over");
    }
    // event.target.classList.remove("over");
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.borderBottom = "";
      event.target.classList.remove("over");
    }
  },
  false
);

var dropZone = document.querySelectorAll(".dropzone");
for (var i = 0; i < dropZone.length; i++) {
  dropZone[i].addEventListener("mouseover", function(event) {
    // console.log(this.children[4].className)
    if (this.children[4]) {
      this.children[4].classList.add('show');
    }
  }, false)
  dropZone[i].addEventListener("mouseleave", function(event) {
    // console.log(this.children[2].className)
    if (this.children[4]) {
      this.children[4].classList.remove('show');
    }
  }, true)
}


document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.borderBottom = "";
      event.target.classList.remove("over");
      dragged.parentNode.removeChild(dragged);
      event.target.insertAdjacentHTML(
        "afterend",
        `<li class="dropzone" draggable="true">
        <p>${dragged.children[0].textContent}</p>
        <p>${dragged.children[1].textContent}</p>
        <p class="duration">${dragged.children[2].textContent}</p>
        <p>00/00/00</p>
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
