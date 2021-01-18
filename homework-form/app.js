const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    const errors = [];
    const mandatoryElements = document.getElementsByClassName('input-element');
    Array.from(mandatoryElements).forEach(el => {
        el.classList.remove('error');
        if(!el.value) {
            errors.push(el);
            el.classList.add('error');
        }
    });

    if(!errors.length) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const moreInfo = document.getElementById('more-info').value;
        let selectedRadio = '';
        const radioBtns = document.getElementsByName('gender');
        Array.from(radioBtns).forEach(el => {
            if(el.checked) {
                selectedRadio = el;
            }
        });
        const banner = document.querySelector('.validaton-success-banner'); 
        banner.style.visibility = 'visible'
        banner.innerHTML = `Hello ${firstName} ${lastName} and welcome back`;
        console.log(firstName, lastName, moreInfo, selectedRadio.value);
        clearForm();
    }
});

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('more-info').value = '';
}

