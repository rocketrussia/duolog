import React, {useEffect, useState} from 'react';
import './Alert.css'

const Alert = ({text, handleError}) => {
  const [fadeIn, setFadeIn] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  setTimeout(() => setFadeIn(false), 2000)

  if(!fadeIn) {
    setTimeout(() => setFadeOut(true), 900)
  }

  useEffect(() => {
    if(!fadeIn) {
      // TODO: Memory leak
      handleError()
    }
  }, [fadeOut])

  return (
    <div className={
      `notify ${fadeIn ? 'fade-in' : 'fade-out'}`
    }>
    {text}
    </div>
  )
}

export default Alert