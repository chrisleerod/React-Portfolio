import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ReactComponent as ShareIcon } from '../icons/share.svg';
import { ReactComponent as RightArrow } from '../icons/arrow-right-white.svg';

import './card.css';

export const Tag = ({ tag }) => <div className="tag">{tag}</div>;

export const Card = ({ index, card }) => {
  console.log(card);
  const { title, color, tags, link, image, date, action } = card;

  return (
    <Link to={link} style={{ backgroundColor: color || '' }} className={`card-item item-${index}`}>
      <div className="text-container">
        <div className="text-index">
          <div className="row">
            <h5 className="title">{title}</h5>
          </div>
          <div className={"tags"}>
            {tags.map((tag) => <Tag tag={tag} />)}
          </div>
          <div className="row-bottom">
            <p className="date">{date}</p>
            <a href={link} className="action-link">
              <p className="action">{action}</p>
              <RightArrow className="arrow" />
            </a>
          </div>
        </div>

        <div className="image-container">
          <img className={`thumb thumb-${index}`} alt="" src={image} />
        </div>
      </div>
    </Link>
  )
};