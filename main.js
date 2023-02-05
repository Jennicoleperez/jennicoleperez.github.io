/*BARRA DE NAVEGACIÓN */
const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', () => {
    menu.classList.menu('rotate'),
    links.classList.menu('activar')
});

/*SLIDER */

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




 /*CONTÁCTANOS */

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

/*HABILIDADES */

    data = {
        task1: {
          progress: 0.5,
          name: "Javascript"
        },
        task2: {
          progress: 0.5,
          name: "Python"
        },
        task3: {
          progress: 0.8,
          name: "HTML"
        },
        task4: {
          progress: 0.7,
          name: "CSS"
        },
        task5: {
          progress: null,
          name: "GitHub"
        }


      };
      
      
      wraper_progressbar = document.querySelector(".wraper-progressbar");
      wp = wraper_progressbar;
      
      for (task in data) {
        elem_label = document.createElement("label");
      
        elem_span = document.createElement("span");
      
        elem_span_text = document.createTextNode(data[task].name);
      
        elem_div_task = document.createElement("div");
        elem_div_task.setAttribute("id", "task");
        elem_div_task.classList.add("task");
      
        elem_div_progress = document.createElement("div");
        elem_div_progress.classList.add("progress");
      

        progress = data[task].progress;
        position = 272 * progress;
        elem_div_progress.style.left = position + "px";
        if (progress < 0.25) {
          elem_div_progress.classList.add("progress-red");
        } else if (progress < 0.75) {
          elem_div_progress.classList.add("progress-orange");
        } else {
          elem_div_progress.classList.add("progress-green");
        }
      
          elem_div_tooltip = document.createElement("div");
        elem_div_tooltip.classList.add("tooltip");
        elem_div_tooltip_text = document.createTextNode(progress * 100 + ' %');
        

        elem_span.appendChild(elem_span_text);
        elem_label.appendChild(elem_span);
        elem_div_tooltip.appendChild(elem_div_tooltip_text);
        elem_div_progress.appendChild(elem_div_tooltip);
        elem_div_task.appendChild(elem_div_progress);
        elem_label.appendChild(elem_div_task);
      
        wp.appendChild(elem_label);
      }