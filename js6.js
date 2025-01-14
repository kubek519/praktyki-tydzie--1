
const vaporeonContainer = document.getElementById('vaporeon');


vaporeonContainer.addEventListener('click', function() {
    const newVaporeon = document.createElement('div');
    newVaporeon.classList.add('vaporeon'); 
    newVaporeon.innerHTML = `
        <img src="Vaporeon.png" alt="Vaporeon">
    `;
    
    
    document.querySelector('.container').appendChild(newVaporeon);
});
