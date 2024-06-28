let itemsData = [];

getItems()

function getItems() {
    fetch('./javascripts/shopCatalogList.json')
        .then(response => response.json())
        .then(itemsData => {
            renderPage(itemsData);
        });
}

function renderPage(data) {
    const shopCatalog = data;
    createCards(shopCatalog);
}

function createCards(data) {
    data.forEach(card => {
        const { id, cardTitle, subtitle, price, img, alt } = card;
		const cardItem = 
        `
        <div class='cardItem' id='${id}'>
            <div class='cardItemImageWrapper'>
                <a href='./cardPage/cardPage.html?id=${id}' class='cardItemImageWrapperA'>
                    <div class='cardItemImage'>
                        <img src='${img}' alt='${alt}'/>
                    </div>
                    <div class='cardItemBlur'></div>
                    <div class='glassCard'></div>
                </a>
            </div>
            <div class='cardItemInfo'>
                <div class='cardItemInfoTitle'>
                    <h2>${cardTitle}</h2>
                </div>
                <div class='cardItemInfoText'>
                    <p>${subtitle}</p>
                </div>
                <div class='cardItemPrice'>
                    <p>${price} ₽</p>
                </div>
            </div>
        </div>
        `
        ROOT_CATALOG.insertAdjacentHTML('beforeend', cardItem);
	});

    VanillaTilt.init(document.querySelectorAll('.cardItem'), {
        max: 3,
        speed: 5000
    })
    
    VanillaTilt.init(document.querySelectorAll('.cardItemImageWrapperA'), {
        max: 3,
        scale: 1.02,
        speed: 5000
    })
    
    VanillaTilt.init(document.querySelectorAll('.glassCard'), {
        max: 0,
        glare: true,
        'max-glare': .15,
        speed: 5000
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