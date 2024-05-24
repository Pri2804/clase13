document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '1234567890'; 
    const message = 'Hola, me gustaría obtener más información.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}); 

window.addEventListener('beforeunload', function(event) {
    const message = '¿Estás seguro de que quieres salir?';
    event.preventDefault();  
    event.returnValue = message; 
    return message;
});
