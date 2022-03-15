import styles from '../styles/MoreButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import { componentConfig } from "../types";

const MoreButton = (props: componentConfig) => {
  return(
    <div className={styles.container}>
      <div className={styles.text}>
        {props.buttonText}
      </div>
      <FontAwesomeIcon icon={faArrowCircleRight} />
    </div>
  )
}

export default MoreButton