function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
   video=createCapture(VIDEO)
    video.hide();


}

function draw(){
    image(video,30,30,500,500)
    fill("#FF00FF");
     circle(30,30,50);
     circle(475,30,50);
     circle(30,475,50);
     circle(475,475,50);
     fill("#6f2da8");
     rect(30,50,20,400);
     rect(475,50,20,400);
     rect(50,475,400,20);
     rect(50,20,400,20);
  

   
}

function take_snapshot(){
    save("mypicture.png");

}