
nose_X = 0;
nose_Y = 0;
difference = 0;

leftWristX = 0;
rightWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,600);
    video.position(10,60);
    canvas =  createCanvas(600,440);
    canvas.position(600,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) 
    {
         console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY);
    
     leftWristX = results[0].pose.leftWrist.x;
     rightWristY = results[0].pose.rightWrist.x;

     difference = floor(leftWristX - rightWristY);
     console.log(" left wrist = " + leftWristX + " right wrist = " + rightWristY + " difference =  " +  difference);
    } 
}

function modelLoaded() {
    console.log('poseNet is intialized');
}


function draw(){
  background('#66b2ff');
  document.getElementById("font_size").innerHTML="Width And Height of a text will be = " + difference +"px";
  textSize(difference);
  fill('#FFFF00');
  text('Shoaib',50,400);

}