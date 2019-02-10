var playlist = document.querySelector("ol");

var songArray = [
  { artist: "Saba", song: "Excited", duration: "2:00" },
  { artist: "Monte Booker & Bari", song: "interstellar", duration: "2:00" },
  { artist: "GoldLink", song: "Pray Everyday", duration: "2:00" },
  { artist: "GoldLink", song: "Got Muscle", duration: "2:00" },
  { artist: "Domo Genesis", song: "Online", duration: "2:00" }
];
var dragged;

var playlistInsert = playlist.children;
for (let i = 0; i < songArray.length; i++) {
  playlist.insertAdjacentHTML(
    "beforeend",
    `<li class="dropzone" draggable="true">

        <p>${songArray[i].artist}</p>
        <p>${songArray[i].song}</p>
        <p>${songArray[i].duration}</p>

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
      console.log(dragged.children[0]);
      event.target.insertAdjacentHTML(
        "afterend",
        `<li class="dropzone" draggable="true">
        <p> ${dragged.children[0].textContent}</p>
        <p> ${dragged.children[1].textContent}</p>
        <p> ${dragged.children[2].textContent}</p>
        </li>`
      );
    }
  },
  false
);
