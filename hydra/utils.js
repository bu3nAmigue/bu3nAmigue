// Create video from path
name2vid = (name) => () => {
    vid = document.createElement('video')
    vid.autoplay = true
    vid.loop = true
    vid.playbackRate = 2
    vid.src = atom.project.getPaths()[0]+`/Visuals/hydra/videos/${name}.mov`
    return vid;
}

// Set src s0 with video
vid2src = (vid)  => {
    src(s0.init({src: vid}))
}
// Initial creation of source from video name
createVid = (name) => {
  vid2src(name2vid(name)())
}
//Once video is created, update its path, render.
updateVidSrcName = (currentVid, newName) => {
  vid.src = atom.project.getPaths()[0]+`/Visuals/hydra/videos/${newName}.mov`
}
//Start playing video
playDefault = () => ( src(s0).out(o1))

/* Example

  vid = name2vid(1)()
  vid2src(vid)
  src(s0).out(o1)

  updateVidSrcName(vid,6)
  src(s0).out(o1)

  render(o1)

*/
