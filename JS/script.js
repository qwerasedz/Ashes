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