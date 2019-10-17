
a.show()
a.setBins(10)
fi = (i=0,v=100,min=0.001, max=v) => () =>  Math.min( min + a.fft[i]*v,max)

shape(3, 0.0002,0.3)
//  .repeat(3,1) //Change
  .color(1,0.3,0.2)
  .blend(o1,0.75)
  .rotate(0.6,0.02)
  .modulateScale(src(o1),fi(0,25,0,1.2))
.out(o1)

 src(o1)
 .modulateScrollX(src(o1).scale(-fi(0,0.5,0,-0.05)),0.2)
 .modulate(o0,fi(0,1,0.00,0.05))
 .blend(o0,0.9)
 .add(o1,0.2)
.out(o0)
