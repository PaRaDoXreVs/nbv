var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object="";
var block_image_object ="";

function player_update(){
fabric.Image.fromUrl("player.png" , function(Img) {
    player_object = Img;

    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canavas.add(player_object);
});
}    
function new_image(get_image){
    fabric.Image.fromUrl(get_image , function(Img) {
        block_image_object = Img;
    
    
        
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canavas.add(block_image_object);
    });
    }    
    
    window.addEventListener("keydown",my_keydown);


    function my_keydown(e){
Keypressed = e.keyCode;
console.log(Keypressed);
if(e.shiftKey == true && Keypressed == '80') 
{
    console.log("P And Shift Pressed Together");
    block_image_width = block_image_width + 5;
    block_image_height = block_image_height + 5;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
if(e.shiftKey == true && Keypressed == '77') 
{
    console.log("M And Shift Pressed Together");
    block_image_width = block_image_width - 5;
    block_image_height = block_image_height - 5;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(Keypressed == '38')
{

up();
console.log("up");
}

if(Keypressed == '40')
{

down();
console.log("down");
}
if(Keypressed == '37')
{

left();
console.log("left");
}
if(Keypressed == '39')
{

right();
console.log("right");
}
if(Keypressed == '70')
{

new_image('https://i.pinimg.com/originals/81/4b/18/814b187c31f4c0d430f53a83be3e8969.jpg');
console.log("f");
}
if(Keypressed == '66')
{

new_image('https://drive.google.com/drive/folders/1qv7nvCFQAemDlZaMCno9shkzx5A363-r?usp=sharing');
console.log("b");
}
if(Keypressed == '76')
{

new_image('https://drive.google.com/drive/folders/1qv7nvCFQAemDlZaMCno9shkzx5A363-r?usp=sharing');
console.log("l");
}
if(Keypressed == '82')
{

new_image('https://drive.google.com/drive/folders/1qv7nvCFQAemDlZaMCno9shkzx5A363-r?usp=sharing');
console.log("r");
}
if(Keypressed == '72')
{

new_image('https://drive.google.com/drive/folders/1qv7nvCFQAemDlZaMCno9shkzx5A363-r?usp=sharing');
console.log("h");
}














}


    
    

