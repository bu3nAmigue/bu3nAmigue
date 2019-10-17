vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.playbackRate = 2
vid.src = atom.project.getPaths()[0]+`/Visuals/hydra/videos/alquim.mov`


s0.init({src: vid})
src(s0).out(o1)
render(o1)

a.show()ø
a.setBins(10)
fi = (i=0,v=100,min=0.001, max=v) => () =>  Math.min( min + a.fft[i]*v,max)

shape(5, 0.2,0.5)
  .scrollX(0.65,0.005)
  .add(src(o1).mask(shape(2).scale(3),0.3))
  .kaleid(2.3)
.out(o2)

shape(2)
  .scale(0.1)
  .color(0,0,1)
  .blend(o3,0.6)
  .color(0,0,1)
  .repeatY(()=> 1+(10-time%10))
  .kaleid([7,10,15])
  .blend(o3,0.7)
  .out(o3)


src(o2).color(0.7,0.2,0.1,0.01)
  .add(src(o3),0.9).modulateRotate(noise([2,4,6],0.02,0.001),0.2)
// .rotate(0.2,0.2)
//  .add(src(o3),0.9).scrollX(0.002).modulateRotate(noise([7,4,6],0.02,0.0001),0.02)
//.add(src(o1).colorama(0.01).mask(shape(4,0.002,0.7).scale(1),0.1))
//.add(src(o2).scrollX(-0.002).scale(1).color(1,1,0),0.5)
//.add(src(o2).scrollX(0.002).scale(1).color(1,0.,0),0.4)
.out(o0)

render(o0)
