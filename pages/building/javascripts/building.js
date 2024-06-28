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