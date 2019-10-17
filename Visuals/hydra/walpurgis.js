vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.playbackRate = 2
vid.src = atom.project.getPaths()[0]+`/Visuals/hydra/videos/walpurgis.mov`

s0.init({src: vid})
src(s0).out(o1)

a.show()
a.setBins(10)
fi = (i=0,v=100,min=0.001, max=v) => () =>  Math.min( min + a.fft[i]*v,max)
sinT = (min=0,max=1,freq=1) => ({time}) => Math.sin(time*freq) * max + min

//Black hole creation
noise(fi(2,12,2),0.5)
  .brightness(fi(0,20,0.7, 0.02))
  .rotate(({time}) => Math.sin(time))
  .modulate(src(s1).kaleid(100),0.5)
  .blend(o3,0.02)
  .modulateRotate(src(o3).rotate(0.2,0.4))
  .modulateScrollY(src(o3),fi(0, 2, 0.2))
  .modulateScrollX(src(o3),fi(0, 2, -0.02))
  .modulate(src(o3),fi(1, 0.5, 0.002))
  .modulateRotate(src(o3),0.4)
  .blend(o3,0.7)
  .add(src(o3).rotate(2),0.2)
  .out(o3)


//Witches
  solid()
    .layer(src(s0).scrollX(2).color(0.5,0.2,0.6, fi(0,100,0.2,8)),0.9)
    .add(src(s0).scrollX(2).color(0.8,0.5,0.5, fi(0,20,0.2,10)),0.4)
    .blend(o2,0.3)
    .modulate(src(o2).scrollX(2,0.02))
    .out(o2)


//Mix textures
src(o3)
  .add(src(o2),fi(0,10,0.5,1))
  .out(o0)

render(o0)
