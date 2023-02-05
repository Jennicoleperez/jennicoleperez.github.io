const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', () => {
    menu.classList.menu('rotate')
    links.classList.menu('activar')
})


let index = 0,
  sliders,
  timer,
  next,
  prev;
  
document.addEventListener('DOMContentLoaded', function() {

  slides = document.querySelectorAll(".mySlides");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
  document.querySelector('.next').addEventListener('click', () => showSlides(1));

  document.addEventListener('keyup', (e) => {
    if(e.keyCode == 37) {
    
      showSlides(-1);
    } else if(e.keyCode == 39) {
      
      showSlides(1);
    }
  });
  showSlides(0);
});

function showSlides(n) {
  
  clearTimeout(timer);

  slides[index].style.display = 'none';
  index += n;
  if (index >= slides.length) {
  
    index = 0;
  } else if(index < 0) {
 
    index = slides.length - 1;
  }
 
  slides[index].style.display = "block";  
  timer = setTimeout(showSlides, 4000, 1);
}









var inputs= document.getElementsByClassName('formulario_input');
for (var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1 ) {
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }

    });

}


    const contacto = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    contacto.addEventListener("submit", (event) => {

        event.preventDefault();

        const nombreValue = nombre.value;
        const apellidoValue = apellido.value;
        const emailValue = email.value;
        const mensajeValue = mensaje.value;

        const regName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

        if (!nombreValue | !apellidoValue | !emailValue | !mensajeValue) {
            alert("Debe completar todos los campos.");
            return;
        }else if(!regName.test(nombreValue)){
        alert("Debe ingresar un nombre válido. Por favor, ingrese su nombre y apellido nuevamente.");
        return;
      }

        console.log(nombreValue);
        console.log(apellidoValue);
        console.log(emailValue);
        console.log(mensajeValue);

        alert("Su solicitud ha sido enviada.");
    

        nombre.value = "";
        apellido.value = "";
        email.value = "";
        mensaje.value = ""; 
    });