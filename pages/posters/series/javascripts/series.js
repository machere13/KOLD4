const posterSeries = document.getElementById('posterSeries')
let itemsData = [];

getItems();

function getItems() {
    fetch('./javascripts/seriesList.json')
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

function renderItemInfo(poster) {
    const { title, subtitle, imgOne, altOne, imgTwo, altTwo, imgThree, altThree } = poster;
    const productItem = 
    `
    <div id='posterImages'>
        <div class='posterImage'>
            <img src='${imgOne}' alt='${altOne}'>
        </div>
        <div id='centralPoster'>
            <div class='posterImage'>
                <img src='${imgTwo}' alt='${altTwo}'>
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
        <div class='posterImage'>
            <img src='${imgThree}' alt='${altThree}'>
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
    posterSeries.insertAdjacentHTML('beforeend', productItem);
    
    VanillaTilt.init(document.querySelectorAll('.posterImage'), {
        max: 3,
        glare: true,
        scale: 1.02,
        'max-glare': .25,
        speed: 2000
    });
    
    VanillaTilt.init(document.querySelectorAll('.poster'), {
        max: 3,
        speed: 2000
    });

    VanillaTilt.init(document.getElementById('centralPoster'), {
        max: 3,
        speed: 2000
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

    gsap.registerPlugin(Draggable); 
 
const headerPentagon = document.getElementById('headerPentagon'); 

Draggable.create("#headerPentagon", { 
    type: "rotation", 
    inertia: true, 
    transformOrigin: "50% 50%", 
    onDrag: function() { 
        const rotation = this.rotation; 
        const translateY = Math.sin(rotation * Math.PI / 90) * 50; 
        const translateYPositive = Math.abs(translateY); 
        headerPentagon.style.transform = `translateY(${translateYPositive}px) rotate(${rotation}deg)`; 
    }, 
        onThrowComplete: function() { 
            const rotation = this.rotation; 
            headerElement.rotateCount = Math.floor(rotation / 50); 
        }, 
        snap: function(endValue) { 
            return Math.round(endValue / 50) * 50; 
        } 
    });
}