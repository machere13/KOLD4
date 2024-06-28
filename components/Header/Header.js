class Header {
    render() {
        const html =
            `
            <div id='headerPentagon'>
                <nav id='headerNav'>
                    <li class='headerNavElement' id='merch'>
                        <a href='../shop/shop.html'>
                            <h2>Мерч</h2>
                        </a>
                    </li>
                    <li class='headerNavElement' id='events'>
                        <a href='../posters/posters.html'>
                            <h2>События</h2>
                        </a>
                    </li>
                    <li class='headerNavElement' id='building'>
                        <a href='../building/building.html'>
                            <h2>Здание</h2>
                        </a>
                    </li>
                    <li class='headerNavElement' id='webPoster'>
                        <a href='https://machere13.github.io/webposterKOLD/' target='_blank'>
                            <h2>Веб-плакат</h2>
                        </a>
                    </li>
                    <li class='headerNavElement' id='game'>
                        <a href='https://machere13.github.io/Interactive-webposter-KOLD/' target='_blank'>
                            <h2>Игра</h2>
                        </a>
                    </li>
                </nav>
            </div>
            `
        ROOT_HEADER.innerHTML = html;

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
} 

const headerElement = new Header(); 
headerElement.render();