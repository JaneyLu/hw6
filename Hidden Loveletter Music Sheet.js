var sounds = [];
var i = [];
var x = [];
var y = [];

//define and load sound file;
function preload() {
  soundFormats("m4a");
  for (var i = -28; i < 36; i++) {
    let sound = loadSound("glockenspiel.m4a");
    sound.rate(0.5 * pow(2, i / 12)); // 12-semitone exponential scale

    sounds.push(sound);
  }
}

function setup() {
  createCanvas(600, 900);
}

function draw() {
  background(300, 240, 240);
  
  
  //draw empty sheet lines
  for (i = 10; i <= 50; i += 10){
    for (var j = 50 ; j <= 770; j += 90){
  line(30, i + j, 570, i + j);
  stroke(200, 210, 200);
  }
 }
  
  
  //produce sound range;
  for (i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    if (sound.isPlaying()) {
      //draw shape of the notes;h
      fill(180, 60, 80);
      noStroke();
      ellipse(width / sounds.length * (i + 3.5), height / 3, 11, 11);
      //ellipse(width / sounds.length * (i + 3.5), height / 3, 18, 10);
    }
    // else{
    //   fill(180, 180, 300);
    //   noStroke();
    //   ellipse(width / sounds.length * (i + 3.5), height / 3, 11, 11);
    // }
    
  }
}


//set up key board;
function keyPressed() {
  if (key == "a") {
    sounds[0].play();
    
  }
  if (key == "z") {
    sounds[1].play();
  }
  
  //s = g note;
  if (key == "s") {
    sounds[2].play();
  }
  if (key == "x") {
    sounds[3].play();
  }
  if (key == "d") {
    sounds[4].play();
  }
  if (key == "f") {
    sounds[5].play();
  }
  if (key == "c") {
    sounds[6].play();
  }
  if (key == "g") {
    sounds[7].play();
  }
  if (key == "v") {
    sounds[8].play();
  }
  if (key == "h") {
    sounds[9].play();
  }
  if (key == "b") {
    sounds[10].play();
  }
  if (key == "j") {
    sounds[11].play();
  }
  if (key == "k") {
    sounds[12].play();
  }
  if (key == "n") {
    sounds[13].play();
  }
  if (key == "l") {
    sounds[14].play();
  }
  if (key == "m") {
    sounds[15].play();
  }
  if (key == "q") {
    sounds[16].play();
  }
  if (key == "w") {
    sounds[17].play();
  }
  if (key == "1") {
    sounds[18].play();
  }
  if (key == "e") {
    sounds[19].play();
  }
  if (key == "2") {
    sounds[20].play();
  }
  if (key == "r") {
    sounds[21].play();
  }
  if (key == "3") {
    sounds[22].play();
  }
  if (key == "t") {
    sounds[23].play();
  }
  if (key == "y") {
    sounds[24].play();
  }
  if (key == "4") {
    sounds[25].play();
  }
  if (key == "u") {
    sounds[26].play();
  }
  if (key == "5") {
    sounds[27].play();
  }
  if (key == "i") {
    sounds[28].play();
  }
  if (key == "o") {
    sounds[29].play();
  }
  if (key == "6") {
    sounds[30].play();
  }
  if (key == "p") {
    sounds[31].play();
  }
  if (key == "7") {
    sounds[32].play();
  }
  if (key == "8") {
    sounds[33].play();
  }
  if (key == "9") {
    sounds[34].play();
  }
  if (key == "0") {
    sounds[35].play();
  }
  
}
