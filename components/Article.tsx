import styles from '../styles/Article.module.css'
import { componentConfig } from "../types";
import Image from 'next/image'
import MoreButton from "./MoreButton";

const Article = (props: componentConfig) => {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.quote}>
          <img src='/images/quote.png' alt='Quote sign.' />
          <img src='/images/quote.png' alt='Quote sign.' />
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.text}>{props.text}</div>
      <MoreButton buttonText={props.buttonText} />
    </div>
  )
}

export default Article