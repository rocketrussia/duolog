import React from "react";
import TestSelect from "../../components/TestSelect/TestSelect";
import Prolog from "../../components/Prolog/Prolog";
import Header from '../../components/Header/Header';

import styles from "./startpage.module.css";
import { cn } from "../../utils/utils";

const StartPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={cn(styles.row, styles.left)}>
          <Prolog />
        </div>
        <div className={cn(styles.row, styles.right)}>
          <TestSelect />
        </div>
      </div>
    </>
  );
};

export default StartPage;
