import {useEffect, useState, useId} from "react";
import styles from "./ToggleButton.module.scss";

export default function ToggleButton({init, callback}) {
  const [on, setOn] = useState(false);
  const overlayId = useId();
  const knobId = useId();

  useEffect(() => {
    const overlay = document.getElementById(overlayId);
    const knob = document.getElementById(knobId);

    if (on) {
      overlay.className = `${styles.overlay} ${styles.overlayClick}`;
      knob.className = `${styles.knob} ${styles.knobClick}`;
    } else if (!on) {
      overlay.className = `${styles.overlay}`;
      knob.className = `${styles.knob}`;
    }
  }, [on])

  if (init) {
    init(on, setOn);
  }

  return (
    <>
      <div className={styles.toggleButton} onClick={e => {
        setOn(!on);
        if (callback) {
          callback(on, setOn)
        }
      }}>
        <div id={overlayId} className={styles.overlay}></div>
        <div id={knobId} className={styles.knob}></div>
      </div>
    </>
  )
}
