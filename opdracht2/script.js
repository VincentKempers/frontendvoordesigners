var allSections = [
  "#home",
  "#about",
  "#work",
  "#work-2",
  "#work-3",
  "#contact"
];

$(document).on("keypress", function(key) {
  if (key.which == "110" || key.which == "91") {
    window.location.hash = next(window.location.hash);
  }
  console.log(key);
  if (key.which == "112" || key.which == "38") {
    console.log("previous");
    window.location.hash = previous(window.location.hash);
  }
});


function next(name) {
  var index = allSections.indexOf(name);
  index++;
  if (index >= allSections.length) index = 0;
  return allSections[index];
}

function previous(name) {
  var index = allSections.indexOf(name);
  index--;
  console.log(index);
  if (index === -1) index = 5;
  return allSections[index];
}
