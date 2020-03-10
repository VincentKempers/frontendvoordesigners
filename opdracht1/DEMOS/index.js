const scrollDoc = document.querySelector('.title');

document.addEventListener('scroll', (event) => {
  console.log(event);
  scrollDoc.innerHTML = window.scrollY;
  if (window.scrollY >= 300 && window.scrollY <= 400) {
    scrollDoc.style.color = 'yellow';
  } else {
    scrollDoc.style.backgroundColor = 'purple';
    scrollDoc.style.color = 'red';
  }
}, true);


