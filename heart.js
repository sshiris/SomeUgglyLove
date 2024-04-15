const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const particalArray =[];
let hue = 0;
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.arc(100,100,80,0,Math.PI*2);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = 'orange';
    ctx.fill();

})


const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 5; i++){
        particalArray.push(new Particle());
    }
})


canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 3; i++){
        particalArray.push(new Particle());
    }

})
class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size = Math.random()*80 +1;
        this.speedX = Math.random()*3 - 1.5;
        this.speedY = Math.random()*3 - 1.5;
        this.color = 'hsl(' + hue + ',100%,50%)';
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size>0.2){
            this.size -=0.1;
        }
        
    }

    draw(){
        // ctx.fillStyle = this.color ;
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        // ctx.lineWidth = 10;
        // ctx.fill();
        ctx.fillStyle = this.color;
        ctx.beginPath();

        const heartX = this.x;
        const heartY = this.y - this.size / 2;
        const heartSize = this.size / 2;

        ctx.moveTo(heartX, heartY);
       
        ctx.arc(heartX - heartSize / 2, heartY, heartSize / 2, 0, Math.PI, Math.PI*2);
        ctx.arc(heartX + heartSize / 2, heartY, heartSize / 2, Math.PI, Math.PI*2);
        ctx.arc(heartX,heartY,heartSize, 0, Math.PI)

        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.fill();
    }
}


function handleParticals(){
    for(i = 0; i< particalArray.length; i++){
        particalArray[i].update();
        particalArray[i].draw();
      
        // for (let j = i; j < particalArray.length; j++){
        //     const dx = particalArray[i].x - particalArray[j].x;
        //     const dy = particalArray[i].y - particalArray[j].y;
        //     const distance = Math.sqrt(dx *dx + dy * dy);
        //     if(distance < 100){
        //         ctx.beginPath();
        //         ctx.strokeStyle=particalArray[i].color;
        //         ctx.lineWidth = particalArray[i].size/10;
        //         ctx.moveTo(particalArray[i].x, particalArray[i].y);
        //         ctx.lineTo(particalArray[j].x, particalArray[j].y);
        //         ctx.stroke();
        //         ctx.closePath();
        //     }
        // }
        if(particalArray[i].size <= 0.3){
            particalArray.splice(i,1);
            i--;
        }
    }
}

handleParticals();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0,0,0,0.02)';
    // ctx.fillRect(0,0,canvas.width, canvas.height);
    handleParticals();
    hue+=10;
    requestAnimationFrame(animate);
}
animate();
















class Rectangl {
    constructor(_width, _height, _color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea(){
        return this.width * this.height;
    }
}

let rectangle1 = new Rectangl(3,4,'blue');
let rectangle2 = new Rectangl(5,6,'red');

console.log(rectangle1.getArea());