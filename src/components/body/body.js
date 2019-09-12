import React from "react";
import FeedbackBlock from "../feedback/FeedbackBlock";
import iconPoint from "./../../images/icon-point.svg";
import SanVideo from "../sanVideo/sanVideo";
import styles from "./Body.module.scss";
import {DesktopOnly} from "../responsive/Responsive";

const Body = () => {
  return (
    <div className={styles.container}>
      <div key="left" className={styles.left}>
        <div className={styles.invite}>Santiment invite</div>
        <div className={styles.description}>
          Manage Risk.
          <br />
          Spot Opportunities.
        </div>
        <div className={styles.magazine}>
          Special offer for (magazine name) readers:
        </div>

        <div className={styles.points}>
          <div className={styles.point}>
            <img src={iconPoint} className={styles.iconPoint} alt="point-1" />
            Premium Sanbase Signal
          </div>
          <div className={styles.point}>
            <img src={iconPoint} className={styles.iconPoint} alt="point-1" />
            Premium Sansheets Portfolio Template
          </div>
        </div>

        <DesktopOnly>
          <SanVideo />
        </DesktopOnly>
      </div>
      <div key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default Body;
