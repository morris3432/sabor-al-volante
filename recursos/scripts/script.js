document.getElementById('btn').addEventListener('click',clickme)

function clickme(){
    var no_people = document.getElementById('no-pers')
    var date = document.getElementById('fecha')
    var correo = document.getElementById('correo')
    alertvar_mensaje = 'probando';
    var asunto = 'Important Information';
    
    // Create email link
    var link = 'mailto:' + correo + '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(mensaje);
    
    // Open email client
    window.location.href = link;(no_people,date,correo)    
}