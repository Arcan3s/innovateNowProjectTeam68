const body = document.body;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const height = body.offsetHeight;
  const percentage = (scrollPosition / height) * 100;

  body.style.backgroundPosition = `0% ${100 - percentage}%`;
});