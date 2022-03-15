import { componentConfig } from "../types";
import styles from '../styles/Contact.module.css'

const Contact = (props: componentConfig) => {
  return(
    <div className={styles.container}>
      {props.text}
    </div>
  )
}

export default Contact