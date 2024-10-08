'use client'

import { Button } from '@nextui-org/button'
import { Icon } from '@iconify/react'
import { useEffect, useRef } from 'react'
import { useToggle } from 'react-use'

export const MainSession = () => {
  const [isMuted, toggleMuted] = useToggle(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    const playVideo = () => videoElement?.play()

    window.addEventListener('click', playVideo)
    window.addEventListener('touchstart', playVideo)

    return () => {
      window.removeEventListener('click', playVideo)
      window.removeEventListener('touchstart', playVideo)
    }
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
      >
        <source src="/QWER_main_video.mp4" type="video/mp4" />
      </video>
      <Button
        isIconOnly
        onPress={toggleMuted}
        color={isMuted ? 'default' : 'danger'}
        className="absolute top-4 right-4"
      >
        <Icon icon={isMuted ? 'solar:volume-cross-outline' : 'solar:music-notes-outline'} width={28} height={28} />
      </Button>
    </>
  )
}
