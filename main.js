Canvas = document.getElementById("Canvas");
ctx= Canvas.getContext("2d");
Color = "red";
ctx.beginPath();
ctx.strokeStyle = Color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
Canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouse_x= e.clientX - Canvas.offsetLeft;
    mouse_y= e.clientY - Canvas.offsetTop; 
    console.log("X=" + mouse_x + ",Y=" + mouse_y);
Circle (mouse_x , mouse_y) 

}
function Circle (mouse_x , mouse_y) 
{
    ctx.beginPath();
    ctx.strokeStyle = Color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);

    ctx.stroke();   
}
