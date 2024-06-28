let itemsData = [];

getItems()

function getItems() {
    fetch('./javascripts/postersList.json')
        .then(response => response.json())
        .then(itemsData => {
            renderPage(itemsData);
        });
}

function renderPage(data) {
    const posters = data;
    createPosters(posters);
}

function createPosters(data) {
    data.forEach(poster => {
        const { id, title, subtitle, img, alt } = poster;
		const cardItem = 
        `
        <div class='poster' id='${id}'>
            <div class='posterImage'>
                <a href='./series/series.html?id=${id}'>
                    <img src='${img}' alt='${alt}'/>
                </a>
            </div>
            <div class='posterInfo'>
                <div class='posterInfoTitle'>
                    <h2>${title}</h2>
                </div>
                <div class='posterInfoText'>
                    <p>${subtitle}</p>
                </div>
            </div>
        </div>
        `
        ROOT_POSTERS.insertAdjacentHTML('beforeend', cardItem);
	});

    VanillaTilt.init(document.querySelectorAll('.posterImage'), {
        max: 3,
        glare: true,
        scale: 1.02,
        'max-glare': .25,
        speed: 1500
    });
    
    VanillaTilt.init(document.querySelectorAll('.poster'), {
        max: 3,
        speed: 1500
    });

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