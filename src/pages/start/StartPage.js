import React, {useEffect, useState} from "react";
import TestSelect from "../../components/TestSelect/TestSelect";
import Prolog from "../../components/Prolog/Prolog";
import Header from '../../components/Header/Header';

import styles from "./startpage.module.css";
import { cn } from "../../utils/utils";
import {useTranslation} from 'react-i18next';

const StartPage = () => {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState('en')

  const changeLang = lng => {
    lng === 'en' ? setLang('ru') : setLang('en')
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang])

  return (
    <>
      <Header lang={lang} changeLang={changeLang} />
      <div className={styles.container}>
        <div className={cn(styles.row, styles.left)}>
          <Prolog />
        </div>
        <div className={cn(styles.row, styles.right)}>
          <TestSelect lang={lang} />
        </div>
      </div>
    </>
  );
};

export default StartPage;
