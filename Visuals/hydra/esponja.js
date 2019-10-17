a.show()
a.setBins(10)

fi = (i=0,v=100,min=0.001, max=v) => () =>  Math.min( min + a.fft[i]*v,max)
shape(4.5, 0.05,fi(2,4,0.01,0.8))
  .color(0.2)
  .blend(o0,0.2)
  .rotate(0.65,0.02)
  .add(noise(12,0.02,1.5))
  .modulateScale(src(o2),fi(0,20,0.5,2.9))
.out(o2)

solid()
  .add(o2,0.2)
  .blend(o0,0.9)
  .add(src(o2),0.3)
  //.add(src(o2).scrollY(0.2,0.02,0.02),fi(0,10,0.02,0.05))
  //.modulateScrollY(src(o0).scrollX(0.04,-0.02),0.009)
  //TODO:add mask
  .out(o0)

render(o0)
