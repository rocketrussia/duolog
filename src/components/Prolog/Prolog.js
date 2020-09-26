import React from "react";
import styles from "./prolog.module.css";

import logo from "../../assets/png/logo.png";
import speakingTrain from "../../assets/png/speaking-train.png";
import microphone from "../../assets/png/microphone.png";
import createTest from "../../assets/png/create-test.png";
import download from "../../assets/png/download.png";
import platforms from "../../assets/png/platforms.png";

import {Trans, useTranslation} from 'react-i18next';

const Prolog = () => {
  const { t } = useTranslation();
  return (
    <>
      <img src={logo} alt="Logo" />
      <span className={styles.alpha}>Alpha version 0.2</span>
      <p className={styles.description}>
          <Trans i18nKey={'prolog.description'}>
          The app helps to<br></br>
        prepare for an interview or exam
          </Trans>
      </p>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={speakingTrain} alt={t('prolog.trainCommunicationSkills')} />
          <span>
            <Trans i18nKey={'prolog.practiceYourSkills'}>
            Practice your skills<br></br> in answering questions<br></br> out loud
        by yourself
            </Trans>
          </span>
        </div>
        <div className={styles.column}>
          <img src={microphone} alt={t('prolog.analyzeAnswers')} />
          <span>
            <Trans i18nKey={'prolog.recordDialogue'}>
            Record the dialogue<br></br>
for further<br></br>  analysis of your responses
            </Trans>
          </span>
        </div>
        <div className={styles.column}>
          <img src={createTest} alt={t('prolog.createTests')} />
          <span>
            <Trans i18nKey={'prolog.createOwnTests'}>
            Create your<br></br>
own tests<br></br> for training
            </Trans>
          </span>
        </div>
      </div>
      <div className={styles.download}>
        <img id={styles.downloadIcon} src={download} alt={t('prolog.practicePlatform')} />
        <span>{t('prolog.soonDownload')} </span>
        <img
          src={platforms}
          className={styles.platforms}
          alt={t('prolog.platforms')}
        />
      </div>
    </>
  );
};

export default Prolog;
