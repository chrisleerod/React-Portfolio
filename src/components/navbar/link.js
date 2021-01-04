import React from 'react';
import { Link } from 'react-router-dom';

export default ({ to, children, ...props }) => {
  if (/^https?:\/\//.test(to)) return <a href={to} {...props}>{children}</a>;

  // Finally, it is an internal link
  return <Link to={to} {...props}>{children}</Link>;
};