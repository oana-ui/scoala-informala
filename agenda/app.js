let contacts = [];

// updateContactsInDom();
const mainForm = document.querySelector('.agenda-main-form');
const mainList = document.querySelector('.agenda-main-contacts-list');

mainForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    if(this.dataset.type === 'add') {
        addContact(name.value, phone.value);
    }

    if(this.dataset.type === 'edit') {
        const id = document.querySelector('#contact-id');
        editContact(name.value, phone.value, id.value);
    }
    updateContactsInDom();
    clearForm();
});

mainList.addEventListener('click', event => {
    if(event.target.classList.contains('contact-remove')) {
        removeContact(event);
        updateContactsInDom();
    } 

    if(event.target.classList.contains('contact-edit')) {
        initializeEdit(event);
    }
})

function addContact(name, phone) {
    contacts.push({
        name,
        phone,
        id: Math.random()
    });
}

function removeContact(event) {
    const li = event.target.parentElement;
    console.log(li);

    const id = li.dataset.id;
    console.log(id);

    contacts = contacts.filter(item => item.id != id);
}

function initializeEdit(event) {
    const mainForm = document.querySelector('.agenda-main-form');
    const li = event.target.parentElement;
    const name = li.dataset.name;
    const contactItem = contacts.find(item => item.name === name);
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');
    const idInput = document.querySelector('#contact-id');
    nameInput.value = contactItem.name;
    phoneInput.value = contactItem.phone;
    idInput.value = contactItem.id
    mainForm.dataset.type = 'edit';
}

function editContact(name, phone, id) {
    contacts = contacts.map(item => item.id == id ? {...item, name, phone} : item)
}

function updateContactsInDom() {
    const contactsSection = document.querySelector('.agenda-main-contacts-section');
    if(contacts.length) {
        contactsSection.style.display = 'flex';
    } else {
        contactsSection.style.display = 'none';
    }
    const list = document.querySelector('.agenda-main-contacts-list');
    list.innerHTML = '';
    contacts.forEach(item => {
        list.innerHTML += `
            <li data-name="${item.name}" data-id="${item.id}" class="agenda-main-contacts-item">
                <span class="contact-name">${item.name}</span>
                <span class="contact-phone">${item.phone}</span>
                <span class="contact-remove">Remove</span>
                <span class="contact-edit">Edit</span>
            </li>
        `
    })
}

function clearForm() {
    const mainForm = document.querySelector('.agenda-main-form');
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    name.value = '';
    phone.value = '';
    mainForm.dataset.type = 'add';
}