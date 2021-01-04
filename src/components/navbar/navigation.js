import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuItems = [
  {
    label: 'Work',
    description: 'View selected work',
    target: '_self',
    href: '/',
  },
  {
    label: 'About',
    description: 'Learn more about me',
    target: '_self',
    href: '/about',
  },
  {
    label: 'LinkedIn ↗',
    description: 'Connect with me',
    target: '_blank',
    href: 'https://linkedin.com/in/chrisleerod',
  },
  {
    label: 'GitHub ↗',
    description: 'View my coding projects',
    target: '_blank',
    href: 'https://github.com/chrisleerod',
  },
  {
    label: 'Resume ↗',
    description: 'View my resume',
    target: '_blank',
    href: 'https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view?usp=sharing',
  }
]

export const Navigation = () => (
  <motion.ul className="menu-items" variants={variants}>
    {menuItems.map(item => (
      <MenuItem item={item} key={item.label} />
    ))}
  </motion.ul>
);
