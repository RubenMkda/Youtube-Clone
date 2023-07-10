import styles from '@/app/page.module.css'
import { useRef, useState } from 'react'
import ContainerControls from './video/containerControls'

const VideoPlayer = () => {

  const videoRef = useRef()
  const videoAmbientRef = useRef()
  const controlerVideoRef = useRef()
  const timerRef = useRef(null);

  const [classButtonPlayPause, setClassButtonPlayPause] = useState('/play.svg')

  const handlePlayPause = () => {
    const video = videoRef.current
    const videoAmbient = videoAmbientRef.current
    const controler = controlerVideoRef.current;

    if (video.paused){
      video.play()
      videoAmbient.play()
      setClassButtonPlayPause('/pause.svg')
      controler.classList.remove(styles.visible);
    }
    
    else{
      video.pause()
      videoAmbient.pause()
      controler.classList.add(styles.visible);
      setClassButtonPlayPause('/play.svg')
    }
  }

  const handleEnterVideo = () => {
    const video = videoRef.current
    const controler = controlerVideoRef.current;
    if(video.paused) return
    else controler.classList.add(styles.visible)
  };

  const handleOutVideo = () => {
    const video = videoRef.current
    const controler = controlerVideoRef.current;
    if(video.paused) return
    else controler.classList.remove(styles.visible);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current
    const progress = (video.currentTime / video.duration) * 100
    const $progressBar = document.getElementsByClassName(styles.progressBar)
    $progressBar[0].value = progress
    $progressBar[0].style.backgroundSize = (progress) * 100 / (100) + '% 100%'
  }

  const handleFullscreen = () => {
    const videoContainer = document.getElementById('videoContainer');
    const isInFullScreen = document.fullscreenElement == null;

    if (isInFullScreen)videoContainer.requestFullscreen()
    else document.exitFullscreen()

    document.addEventListener('fullscreenchange', () => {
      videoAmbientRef.current.classList.toggle(styles.AmbientFullScreen, document.fullscreenElement)
      videoRef.current.classList.toggle(styles.mainFullScreen, document.fullscreenElement)
      videoContainer.classList.toggle(styles.videoContainerFullScreen, document.fullscreenElement)
    })
  };

  const handleMouseDown = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (timerRef.current) {
        handlePlayPause();
      }
    }, 150);

    clearTimeout(timerRef.current);
  };

  return (
    <section className={styles.videoContainer} id='videoContainer'>

      <video 
        src='/Video.mp4'
        className={styles.videoMain}
        ref={videoRef} 
        onMouseEnter={handleEnterVideo} 
        onMouseLeave={handleOutVideo} 
        onTimeUpdate={handleTimeUpdate} 
        onMouseDown={handleMouseDown} 
        onClick={handlePlayPause} 
        onDoubleClick={handleFullscreen} 
        autoPlay
        preload='true'
      />

      <video 
        src='/Video.mp4'
        className={styles.VideoAmbient}
        ref={videoAmbientRef}
        preload='true'
        muted
      />

      <ContainerControls 
        handleEnterVideo={handleEnterVideo} 
        handleOutVideo={handleOutVideo} 
        handlePlayPause={handlePlayPause} 
        handleFullscreen={handleFullscreen} 
        videoRef={videoRef}
        videoAmbientRef={videoAmbientRef}
        controlerVideoRef={controlerVideoRef} 
        classButtonPlayPause={classButtonPlayPause}
      />

    </section>
  )
}

export default VideoPlayer