let shoppingList = [
    {
        name: 'test',
        purchased: false
    }
];

let errors = false;

repaintDOM();
const mainFormBtn = document.querySelector('.main-form-btn');
mainFormBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('.main-form-input');
    if(input.value.length) {
        addItem(input.value);
        repaintDOM();
    } else {
        errors = true;
        repaintDOM();

        setTimeout(() => {
            errors = false;
            repaintDOM();
        }, 1000)

    }
});

const sortAscBtn = document.querySelector('.sort-ascending-btn');
sortAscBtn.addEventListener('click', function() {
    sortAsc();
});

const sortDescBtn = document.querySelector('.sort-descending-btn');
sortDescBtn.addEventListener('click', function() {
    sortDesc();
});

const mainList = document.querySelector('.main-list');
mainList.addEventListener('click', function(e) {
    if(e.target.classList.contains('list-item-action')) {
        const itemName = e.target.parentElement.firstElementChild; 
        shoppingList = shoppingList.map(item => {
            if(item.name === itemName.innerText) {
                return {
                    name: item.name,
                    purchased: true
                }
            } else {
                return {
                    ...item
                }
            }
        });
        repaintDOM();

    }

});

function addItem(item) {
    shoppingList = [...shoppingList, { name: item, purchased: false }]
}

function sortAsc() {
    shoppingList.sort( (a, b) => a.name.localeCompare(b.name));
    repaintDOM();
}

function sortDesc() {
    shoppingList.sort( (a, b) => b.name.localeCompare(a.name));
    repaintDOM();
}

function clearForm() {
    const input = document.querySelector('.main-form-input');
    input.value = '';
}

function repaintDOM() {
    const list = document.querySelector('.main-list');
    list.innerHTML = `<li class="list-headers">
        <span class="list-headers-name">Item Description</span>
        <span class="list-headers-action">Action</span>
    </li>`;
    shoppingList.forEach(item => {
        list.innerHTML += `
        <li class="list-item">
            <span class="list-item-name ${item.purchased ? 'line-through' : ''}">${item.name}</span>
            <button class="list-item-action">Mark as bought</button>
        </li>
        `
    });
    const errorsSpan = document.querySelector('.errors');
    if(errors) {
        errorsSpan.innerHTML = 'The item  must have a name';
    } else {
        errorsSpan.innerHTML = '';
    }
    clearForm();
}
