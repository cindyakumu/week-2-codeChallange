document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const markPBtn = document.getElementById('markP');
    const clearBtn = document.getElementById('btnDanger');
    const itemsOl = document.getElementById('itemsOl');
    const newItemInput = document.getElementById('newItemName');

    // Function adding a new item
    addBtn.addEventListener('click', () => {
        const newItem = newItemInput.value.trim();
        if (newItem !== '') {
            const li = document.createElement('li');
            li.textContent = newItem;
            li.classList.add('selectable');
            itemsOl.appendChild(li);
            newItemInput.value = '';
        }
    });

    // Function marking selected items as purchased
    markPBtn.addEventListener('click', () => {
        const selectedItems = itemsOl.querySelectorAll('.selected');
        selectedItems.forEach(item => {
            item.classList.add('purchased');
            item.classList.remove('selected');
        });
    });

    //A Function clearing  all items
    clearBtn.addEventListener('click', () => {
        itemsOl.innerHTML = '';
    });

    // Event delegation to handle item selection
    itemsOl.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('selected');
        }
    });
});