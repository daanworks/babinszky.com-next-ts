import styles from '../styles/Text.module.css'
import { componentConfig } from "../types";
import MoreButton from "./MoreButton";

const Text = (props: componentConfig) => {
  return(
    <div className={styles.container}>
      {props.text}
      {props.buttonText && (<MoreButton buttonText={props.buttonText} />)}
    </div>
  )
}

export default Text