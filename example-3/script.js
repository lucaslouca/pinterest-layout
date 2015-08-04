function toggleMenu(){
    document.body.classList.toggle('menu-active');
}

function toggleBubbleMenu1(){
     document.querySelector('#bubble-menu').classList.toggle('menu-active');
     document.querySelector('#bubble-menu-2').classList.remove('menu-active');
}

function toggleBubbleMenu2(){
     document.querySelector('#bubble-menu-2').classList.toggle('menu-active');
     document.querySelector('#bubble-menu').classList.remove('menu-active');
}