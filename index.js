
let firstMenuItem;

fetch('http://localhost:3000/menu')
    .then(resp => resp.json())
    .then(menuItems => menuItems.forEach(menuItem => {
        if (firstMenuItem === undefined) {
            firstMenuItem = menuItem
            renderMenuItem(firstMenuItem)
        }
        
        const menuItemSpan = document.createElement('span')
        menuItemSpan.textContent = menuItem.name
        menuItemSpan.addEventListener('click', (e) => {
            renderMenuItem(menuItem)
        })

        document.querySelector('#menu-items').append(menuItemSpan)
    
    }))
    

function renderMenuItem(menuItem) {
    const img = document.querySelector('#dish-image')
    img.src = menuItem.image

    const dishH3 = document.querySelector('#dish-name')
    dishH3.textContent = menuItem.name

    const dishDesc = document.querySelector('#dish-description')
    dishDesc.textContent = menuItem.description

    const dishPrice = document.querySelector('#dish-price')
    dishPrice.textContent = menuItem.price

}