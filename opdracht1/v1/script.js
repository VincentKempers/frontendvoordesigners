var playlist = document.querySelector("ul");
var songs = document.querySelectorAll("li");
var songArray = [
  "Artist - Songname1",
  "Artist - Songname2",
  "Artist - Songname3",
  "Artist - Songname4",
  "Artist - Songname5",
  "Artist - Songname6"
];
var dragged;

var playlistInsert = playlist.children;
for (let i = 0; i < songArray.length; i++) {
  playlist.insertAdjacentHTML(
    "afterbegin",
    `<li class="dropzone" draggable="true">${songArray[i]}</li>`
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
      event.target.style.background = "yellow";
      event.target.style.textContent = "drop here";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    // event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.insertAdjacentHTML(
        "beforebegin",
        `<li class="dropzone" draggable="true">${dragged.textContent}</li>`
      );
    }
  },
  false
);
