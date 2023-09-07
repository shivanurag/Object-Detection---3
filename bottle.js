status="";
img="";
objects=[];

 function preload()
 {
    img=loadImage("images.jpeg");
 } 

 function setup()
 {
    canvas=createCanvas(700,700);
    canvas.position(1050,600);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
 }

 function modelLoaded()
 {
    status=true;
    objectDetector.detect(img,gotResults); 
 }

 function gotResults(error,result)
 {
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        objects=result;
    }
 }

 function draw()
 {
   image(img,0,0,700,700);
   if(status!="")
   {
      for(i=0;i<objects.length;i++)
      {
         document.getElementById("status").innerHTML="Objects Are Detected";
         fill("#ff1a1a");
         percentage=floor(objects[i].confidence*100);
         text(objects[i].label+" "+percentage+"%",objects[i].x+100,objects[i].y+80);
         noFill();
         stroke("#ff1a1a");
         rect(objects[i].x+100,objects[i].y+80,objects[i].width+300,objects[i].height+450);
         document.getElementById("objects").innerHTML="Out Of 1 Object CocoSSD Has Identified 1 Object";
      }
   }
 }

 