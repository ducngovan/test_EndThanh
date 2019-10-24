let ctx=document.getElementById('myCanvas').getContext('2d');
function Rectangle(x,y,width,height,color) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color
    this.render= function () {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.closePath();
    }
}
let retangle1= new Rectangle(10,10,200,100,'#000000');
retangle1.render()