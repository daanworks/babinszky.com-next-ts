import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import config from "../config";
import Card from "../components/Card";

// export const getStaticProps = () => {
//   return { props: { content: config } }
// }


const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>babinszky.com</title>
        <meta name="description" content="Daniel Babinszky" />
        <link rel="icon" href="/images/d.png" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          {
            config.map((card: any) =>
              <Card
                key={card.id}
                cardType={card.cardType}
                text={card.text}
                image={card.image}
                title={card.title}
                buttonText={card.buttonText}
                link={card.link}
              />
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home
