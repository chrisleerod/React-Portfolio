import React from "react";
import './grid.css';
import { motion } from "framer-motion";

import { Card } from './card';

const cards = [
  {
    link: '/pd',
    color: '#191E21',
    title: 'Project Destroyer',
    tags: ['Product Design', 'Front-End'],
    image: 'https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/pd.jpg',
    date: 'Ongoing',
    action: 'View case study →'
  },
  {
    link: '/google',
    color: '#191E21',
    title: 'Google UX Challenge',
    tags: ['Product Design'],
    image: 'https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/google-product.png',
    date: 'Feb 2020',
    action: 'View case study →'
  },
  {
    link: '/imagecrate',
    color: '#191E21',
    title: 'imagecrate',
    tags: ['Freelance'],
    image: '',
    date: 'Feb 2018 - Present',
    action: 'View business →'
  },
]

export const Grid = () => {
  return (
    <div className="container">
      {cards.map((card, i) => (
        <Card card={card} index={i} />
      ))}
    </div>
  )
};