import * as React from "react";
import { motion } from "framer-motion";

import Link from './link';
import './navbar.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ item, toggle }) => {
  const { label, description, target, href } = item;

  const handleClick = () => {
    if (target === '_self') {
      return toggle();
    }
  }

  return (
      <motion.li
        className="menu-item"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link rel="noopener" to={href} onClick={handleClick} target={target} className="menu-item-link">
          <div className={target === '_self' ? 'menu-item-label' : 'menu-item-label menu-item-external'}>{label}</div>
          <div target={target} className="menu-item-description">
            {description}
          </div>
        </Link>
      </motion.li>
  );
};