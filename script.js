const html = document.querySelector('html');
const checkbox = document.querySelector('#darkmode');

checkbox.addEventListener('change', function(){
    html.classList.toggle('darkmodo')
    if(document.querySelector('#darkmode').checked == true){
        label.innerHTML = "Dark Mode On"
    }
    else{
        label.innerHTML = "Dark Mode Off"
    }
    
})

var label = document.querySelector('label');
var body = document.querySelector('body');
