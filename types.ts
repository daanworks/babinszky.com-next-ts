import { ARTICLE, CONTACT, IMAGE, STATEMENT } from "./constants";

type cardType = typeof ARTICLE | typeof CONTACT | typeof IMAGE| typeof STATEMENT

export type config = {
  id: number,
  cardType: cardType,
  title?: string,
  text?: string,
  buttonText?: string ,
  link?: string,
  image?: string,
}[]

export type cardProp = {
  cardType: cardType,
  title?: string,
  text?: string,
  buttonText?: string ,
  link?: string,
  image?: string,
}

export type componentConfig = {
  text?: string,
  buttonText?: string,
  image?: string,
  title?: string
}

