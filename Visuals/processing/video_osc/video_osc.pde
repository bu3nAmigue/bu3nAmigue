import processing.sound.*;

FFT fft;
AudioIn in;
int bands = 1;
float[] spectrum = new float[bands];

import oscP5.*;  
import netP5.*;
import processing.video.*;
 //<>//

String A = "/home/sol/Documents/buenamigo/Visuals/videos/alquim.mov";
String B = "/home/sol/Documents/buenamigo/Visuals/videos/dance.mov";
String C = "/home/sol/Documents/buenamigo/Visuals/videos/queijiro.mov";
String D = "/home/sol/Documents/buenamigo/Visuals/videos/walpurgis.mov";


OscP5 oscP5;
NetAddress myRemoteLocation;
Movie alquim;
Movie dance;
Movie keijiro;
Movie walpurgis;

PGraphics overlay;
 //<>//
String estado = "alquim";

void setup() {
  size(1024, 768); 
  alquim = new Movie(this, A);
  alquim.loop();
  dance= new Movie(this, B);
  dance.loop();
  keijiro = new Movie(this,C);
  keijiro.loop();
  walpurgis = new Movie(this, D);
  walpurgis.loop();
  oscP5 = new OscP5(this,12000); 
  myRemoteLocation = new NetAddress("127.0.0.1",12000);
 
   // Create an Input stream which is routed into the Amplitude analyzer
  fft = new FFT(this, bands);
  in = new AudioIn(this, 0);
  
  // start the Audio Input
  in.start();
  
  // patch the AudioIn
  fft.input(in);

 

// setup overlay
overlay = createGraphics(width,height);
// initial draw attributes
overlay.beginDraw();
overlay.strokeWeight(3);
overlay.rectMode(CENTER);
overlay.noFill();
overlay.stroke(255,255,255,32);
overlay.endDraw();
}

void movieEvent(Movie m) {
  m.read();
}

 
void draw() {
   //update overlay based on audio data
  overlay.beginDraw();
  overlay.background(0,0);
  overlay.endDraw();

  fft.analyze(spectrum);
  System.out.println( spectrum[0]*10000%256);

  
  tint( spectrum[0]*10000%256, spectrum[0]*10000%256, spectrum[0]*10000%256);  // Display at half opacity
  
  switch(estado) {
  case "alquim":
    alquim.play();
    image(alquim, 0, 0,1024, 768);
    break;
  case "iifi": 
    dance.play();
    image(dance, 0, 0,1024, 768);  
    break;
  case "fii":
      keijiro.play();
     image(keijiro, 0, 0,1024, 768);  
    break;
  case "walourgis":
    walpurgis.play();
   image(walpurgis, 0, 0,1024, 768);
    break;
  }
  
}
 
/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
  print("### received an osc message.");
  print(" addrpattern: "+theOscMessage.addrPattern());
  println(" typetag: "+theOscMessage.typetag());
  estado = theOscMessage.typetag();
}
