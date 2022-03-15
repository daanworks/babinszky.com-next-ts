import { ARTICLE, CONTACT, IMAGE, STATEMENT } from "../constants";
import ConditionalLink from "./ConditionalLink";
import styles from '../styles/Card.module.css'
import { cardProp } from "../types";
import Text from '../components/Text'
import CardImage from "./CardImage";
import Article from "./Article";
import Contact from "./Contact";

const Card = (props: cardProp) => {

  const types = {
    [STATEMENT]: (
      <Text text={props.text} buttonText={props.buttonText} />
    ),
    [IMAGE]: (
      <CardImage image={props.image} />
    ),
    [ARTICLE]: (
      <Article title={props.title} text={props.text} buttonText={props.buttonText} />
    ),
    [CONTACT]: (
      <Contact text={props.text}/>
    )
  }

  return(
    <ConditionalLink asLink={props.link} link={props.link}>
      <div className={styles.container}>
        {types[props.cardType]}
      </div>
    </ConditionalLink>
  )
}

export default Card