import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faMediumM, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return(
    <div className={styles.container}>
      <div className={styles.socials}>
        <a href='https://twitter.com/daanwords' target='_blank' rel='noreferrer'>
          <div className={styles.circle}>
            <FontAwesomeIcon icon={faTwitter} size='1x' style={{color: 'white'}} />
          </div>
        </a>
        <a href='https://medium.com/@daanworks' target='_blank' rel='noreferrer'>
          <div className={styles.circle}>
            <FontAwesomeIcon icon={faMediumM} size='1x' style={{color: 'white'}} />
          </div>
        </a>
        <a href='https://www.instagram.com/daanworks' target='_blank' rel="noreferrer">
          <div className={styles.circle}>
            <FontAwesomeIcon icon={faInstagram} size='1x' style={{color: 'white'}} />
          </div>
        </a>
      </div>
      <div className={styles.logo}>
        <Image src='/images/d.png' layout='fill' objectFit='contain' alt='Logo.' />
      </div>
    </div>
  )
}

export default Header