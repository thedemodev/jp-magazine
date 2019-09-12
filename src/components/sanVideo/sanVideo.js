import React from "react";
import cx from 'classnames'
import styles from "./SanVideo.module.scss";

const SanVideo = ({className}) => {
  return (
    <div className={cx(styles.container,className)}>
      <iframe
        title="Santiment"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/AsZRjm9x5HI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default SanVideo;
