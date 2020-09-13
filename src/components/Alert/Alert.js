import React, {useEffect, useState} from 'react';
import {cn} from '../../utils/utils';
import styles from './alert.module.css'
import anim from '../../css/animations.module.css'

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
    <div className={fadeIn
      ? cn(styles.notify, anim.fadeIn)
      : cn(styles.notify, anim.fadeOut)}
    >
    {text}
    </div>
  )
}

export default Alert