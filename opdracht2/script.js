var allSections = [
  "#home",
  "#about",
  "#work",
  "#work-2",
  "#work-3",
  "#contact"
];

$(document).on("keypress", function(key) {
  if (key.which == "110") {
    window.location.hash = next(window.location.hash);
  }
  if (key.which == "112") {
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
