LeftWristX = 0;
RigthWristX = 0;
LeftWristY = 0;
RigthWristY = 0;
LeftWristKeypoints = 0;
SongStatus = "";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    if(LeftWristKeypoints > 0.2){
        circle(left_wrist_X,left_wrist_Y,20);
    InNumberleftWristY = Number(left_wrist_Y);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
}

function modelLoaded(){
    console.log("PoseNet is Initilised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score left wrist = "+scoreLeftWrist);
        left_wrist_X=results[0].pose.leftWrist.x;
        left_wrist_Y=results[0].pose.leftWrist.y;
        console.log("left wrist X = "+left_wrist_X+" left wrist Y = "+left_wrist_Y);
        right_wrist_X=results[0].pose.rightWrist.x;
        right_wrist_Y=results[0].pose.rightWrist.y;
        console.log("rigth wrist X = "+right_wrist_X+" rigth wrist Y"+right_wrist_Y);
    }
}