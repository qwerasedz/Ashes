let NuotrakuIndexas = 0;
showSlides();

function showSlides() {
  let i;
  let slaidai = document.getElementsByClassName("nuotraukos");
  let taskai = document.getElementsByClassName("taskas");
  for (i = 0; i < slaidai.length; i++) {
    slaidai[i].style.display = "none";  
  }
  NuotrakuIndexas++;
  if (NuotrakuIndexas > slaidai.length) {NuotrakuIndexas = 1}    
  for (i = 0; i < taskai.length; i++) {
    taskai[i].className = taskai[i].className.replace(" active", "");
  }
  slaidai[NuotrakuIndexas-1].style.display = "block";  
  taskai[NuotrakuIndexas-1].className += " active";
  setTimeout(showSlides, 5000);
}


window.addEventListener("scroll", () => {
  let scrollLine = document.querySelector(".kairine-linija .slinktis");
  let line = document.querySelector(".kairine-linija .linija");

  if (!scrollLine || !line) return;

  // процент прокрутки страницы
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPercent = scrollTop / docHeight;

  // максимальная позиция бегунка
  let maxTop = line.offsetHeight - scrollLine.offsetHeight;

  // вычисляем новое положение бегунка
  let newTop = scrollPercent * maxTop;
  scrollLine.style.top = newTop + "px";
});
