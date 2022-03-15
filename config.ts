import { config } from "./types";
import { ARTICLE, CONTACT, IMAGE, STATEMENT } from "./constants";

const config: config = [
  {
    id: 1,
    cardType: STATEMENT,
    text: 'I am creating written content.'
  },
  {
    id: 2,
    cardType: ARTICLE,
    title: 'Are you on the search for the ideal method?',
    text: 'The ability to correctly analyze the problem’s context is the foundation of a strong problem-solving skillset. This is how our world functions and the larger and more complex the environment becomes, the more things it can change...',
    buttonText: 'Read more on Medium',
    link: 'https://medium.com/@daanworks/are-you-looking-for-the-perfect-method-579ab68e66c4'
  },
  {
    id: 3,
    cardType: STATEMENT,
    text: 'I love visuality comprehensively.'
  },
  {
    id: 4,
    cardType: IMAGE,
    image: '/images/homosapien.jpeg'
  },
  {
    id: 5,
    cardType: STATEMENT,
    text: ''
  },
  {
    id: 6,
    cardType: STATEMENT,
    text: 'I am developing websites.',
    buttonText: 'Continue to bitraptors.com',
    link: 'https://www.bitraptors.com/'
  },
  {
    id: 7,
    cardType: CONTACT,
    text: 'If you’re not here by accident, let’s talk!',
    link: 'mailto:daniel@babinszky.com'
  },
]

export default config