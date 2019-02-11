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
      event.target.style.background = "lightgrey";
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
      event.target.style.background = "";
      event.target.classList.remove("over");
    }
  },
  false
);

var dropZone = document.querySelectorAll(".dropzone");
for (var i = 0; i < dropZone.length; i++) {
  dropZone[i].addEventListener("mouseover", function(event) {
    // console.log(this.children[2].className)
    if (this.children[2].className == "duration") {
      this.children[2].innerHTML = "image";
    }
  }, true)
  dropZone[i].addEventListener("mouseleave", function(event) {
    // console.log(this.children[2].className)
    if (this.children[2].className == "duration") {
      this.children[2].innerHTML = "2:00";
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
      event.target.style.background = "";
      event.target.classList.remove("over");
      dragged.parentNode.removeChild(dragged);
      event.target.insertAdjacentHTML(
        "afterend",
        `<li class="dropzone" draggable="true">
        <p>${dragged.children[0].textContent}</p>
        <p>${dragged.children[1].textContent}</p>
        <p class="duration">${dragged.children[2].textContent}</p>
        </li>`
      );
    }
  },
  false
);
