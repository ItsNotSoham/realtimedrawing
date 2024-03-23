function setup(){
    c1=createCanvas(600,600)
    v1=createCapture(VIDEO)
    c1.position(1200,150)
    v1.position(100,150)
    mymodel=ml5.poseNet(v1,modelLoaded)
    mymodel.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model Loaded")
}

nosex=0
nosey=0
lwx=0
rwx=0
diffrence=0
function gotPoses(results){
    if(results.length>0)
    {
       console.log(results)
       nosex=results[0].pose.nose.x
       nosey=results[0].pose.nose.y
       lwx=results[0].pose.leftWrist.x
       rwx=results[0].pose.rightWrist.x 
       diffrence=lwx-rwx
       

    }
}







function draw(){
    background("red")
    fill("white")
    square(nosex,nosey,diffrence)
}
