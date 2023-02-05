const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', () => {
    menu.classList.menu('rotate')
    links.classList.menu('activar')
})

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

