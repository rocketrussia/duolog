import React from 'react';

import styles from './startpage.module.css'
import TestSelect from '../../components/TestSelect/TestSelect';
import Prolog from '../../components/Prolog/Prolog';
import {cn} from '../../utils/utils';

const StartPage = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.row, styles.left)}>
        <Prolog />
      </div>
      <div className={cn(styles.row, styles.right)}>
        <TestSelect />
      </div>
    </div>
  )
}

export default StartPage
