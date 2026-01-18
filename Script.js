const canvas = document.getElementById('sparkleCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let particles = [];
for(let i=0;i<100;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*3+1,
        dx: (Math.random()-0.5)*0.5,
        dy: (Math.random()-0.5)*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba(135,206,250,0.7)'; // sparkles blue
        ctx.fill();
        p.x+=p.dx;
        p.y+=p.dy;
        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
    });
    requestAnimationFrame(animate);
});

animate();

// Scroll fade-in
const cards = document.querySelectorAll('.service-card');
window.addEventListener('scroll',()=>{
    const trigger = window.innerHeight * 0.85;
    cards.forEach(card=>{
        const top = card.getBoundingClientRect().top;
        if(top < trigger){
            card.style.transform='translateY(0)';
            card.style.opacity=1;
        }
    });
});
