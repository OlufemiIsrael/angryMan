let toggleSvgs = document.querySelectorAll ('.toggle > svg');
let nav = document.querySelector ('nav');
let toggle = () => {
  toggleSvgs[0].classList.toggle ('none');
  toggleSvgs[1].classList.toggle ('none');
  nav.classList.toggle ('none');
}
toggleSvgs.forEach (svg => {
  svg.addEventListener ('click', (e) => {
    toggle ();
    e.stopPropagation()
  });
});
window.onclick = e => {
  e.stopPropagation ();
  if(!nav.classList.contains('none')){
      toggle()
  }
};
