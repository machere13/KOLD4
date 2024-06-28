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