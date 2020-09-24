import React, {useState} from 'react';
import styles from './header.module.css'

import fb from '../../assets/svg/social/fb.svg'
import vk from '../../assets/svg/social/vk.svg'
import dropdown from '../../assets/svg/dropdown.svg'
import {cn} from '../../utils/utils';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('ru')

  const changeLanguage = lng => {
    lang === 'ru' ? setLang('en') : setLang('ru')
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.header}>
      <a className={styles.social} target="_blank" href={'https://www.facebook.com/duologapp/'}>
        <img src={fb}/>
      </a>
      <a className={styles.social} target="_blank" href={'https://vk.com/duolog'}>
        <img src={vk}/>
      </a>
      <span className={cn(styles.select, styles.dropdown)}>
        <a
          href="#"
          className={styles.dropdownBtn}

        >
          <img src={dropdown}/>
          {lang === 'ru' ? t(`languages.en`) : t(`languages.ru`)}
        </a>
        <div className={styles.dropdownContent}>
          <a
            href="#"
            onClick={() => changeLanguage(lang)}
          >
            {lang === 'ru' ? t(`languages.ru`) : t(`languages.en`)}
          </a>
        </div>
      </span>
    </div>
  )
}

export default Header