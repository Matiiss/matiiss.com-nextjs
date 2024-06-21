"use client"

import ThreeToggles from "/components/ThreeToggles.js";
import styles from "./Page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.page}>
        <ThreeToggles />
      </div>
    </>
  )
}
