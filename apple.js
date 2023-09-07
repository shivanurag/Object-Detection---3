status="";
img="";
objects=[];

 function preload()
 {
    img=loadImage("apple.webp");
 } 

 function setup()
 {
    canvas=createCanvas(800,500);
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
   image(img,0,0,800,500);
   if(status!="")
   {
      for(i=0;i<objects.length;i++)
      {
         document.getElementById("status").innerHTML="Objects Are Detected";
         fill("#ff1a1a");
         percentage=floor(objects[i].confidence*100);
         text(objects[i].label+" "+percentage+"%",objects[i].x+50,objects[i].y+50);
         noFill();
         stroke("#ff1a1a");
         rect(objects[i].x+50,objects[i].y+50,objects[i].width+100,objects[i].height+100);
         document.getElementById("objects").innerHTML="Out Of 1 Object CocoSSD Has Identified 1 Object";
      }
   }
 }

 