document.getElementById('buy-button').addEventListener('click', function() {
    alert('¡Has comprado las Nike Jordan 1!');
});

document.getElementById('back-to-top-button').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
