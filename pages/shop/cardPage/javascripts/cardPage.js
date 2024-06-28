const item = document.getElementById('item')
let itemsData = [];

getItems();

function getItems() {
    fetch('../javascripts/shopCatalogList.json')
        .then(response => response.json())
        .then(itemsData => {
            loadItemDetails(itemsData);
        });
}

function getParameterFromURL(parameter) {
    const urlParameters = new URLSearchParams(window.location.search);
    return urlParameters.get(parameter);
}

function loadItemDetails(data) {
    const itemId = getParameterFromURL('id');
    const findItem = data.find(card => card.id === itemId);
    renderItemInfo(findItem);
}

function renderItemInfo(product) {
    const { title, description, price, img, alt, id } = product;
    const productItem = 
    `
    <div id='itemDetails'>
        <div id='itemTitle'>
            <h1>${title}</h1>
        </div>
        <div id='itemDescription'>
            <p>${description}</p>
        </div>
        <div id='itemBuy'>
            <div id='itemPrice'>
                <p><span>${price} ₽</span></p>
            </div>
            <div id='itemBuyButton'>
                <button><a href='../buyPage/buyPage.html'>Купить</a></button>
            </div>
        </div>
    </div>
    <div id='itemImageWrapper'>
        <div id='${id}' class='itemImage'>
            <img src='${img}' alt='${alt}'/>
        </div>
        <div id='itemBlur'></div>
    </div>
    `
    item.insertAdjacentHTML('beforeend', productItem);
    
    VanillaTilt.init(document.getElementById('itemTitle'), {
        max: 5,
        speed: 5000,
        scale: 1.1
    })

    VanillaTilt.init(document.querySelectorAll('.itemImage'), {
        max: 5,
        speed: 5000,
        scale: 1.1
    })

    const core = document.getElementById('core')
    const follower = document.getElementById('follower')

    const links = document.querySelectorAll('a')

    document.addEventListener('mousemove', moveCursor)

    function moveCursor(e){
        let posX = e.clientX;
        let posY = e.clientY;

        core.style.left = `${posX}px`;
        core.style.top = `${posY}px`;

        follower.style.left = `${posX}px`;
        follower.style.top = `${posY}px`;

        follower.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: 'forwards'})
        
    }

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            core.style.transform = 'scale(5)'
        })
        link.addEventListener('mouseleave', () => {
            core.style.transform = 'scale(1)'
        })
    })
}

