import { componentConfig } from "../types";

const CardImage = (props: componentConfig) => {
  return(
    <div style={{height: '100%'}}>
      <img style={{maxHeight: '100%'}} src={props.image} alt='This is an image.' />
    </div>
  )
}

export default CardImage