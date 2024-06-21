import ToggleButton from "./ToggleButton.js";
import styles from "./ThreeToggles.module.scss";

export default function ThreeToggles() {
  const arr = [null, null, null];

  function addState(setState, index) {arr[index] = setState;}

  function checkOthersOn(selfIndex) {
    for (let i = 0; i < arr.length; ++i) {
      if (!arr[i][0] && i !== selfIndex) {
        return false;
      }
    }
    return true;
  }

  function switchOther(selfIndex, otherIndex) {
    if (checkOthersOn(selfIndex) && !arr[selfIndex][0]) {
      arr[otherIndex][1](false);
    }
  }

  return (
    <>
      <div className={styles.row}>
        <ToggleButton init={(...setState) => addState(setState, 0)} callback={(..._) => switchOther(0, 2)}/>
        <input type="text"/>
      </div>
      <div className={styles.row}>
        <ToggleButton init={(...setState) => addState(setState, 1)} callback={(..._) => switchOther(1, 0)}/>
        <input type="text"/>
      </div>
      <div className={styles.row}>
        <ToggleButton init={(...setState) => addState(setState, 2)} callback={(..._) => switchOther(2, 1)}/>
        <input type="text"/>
      </div>
    </>
  )
}
