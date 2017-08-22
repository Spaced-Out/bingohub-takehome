import React from 'react';

const logoImage = require('./logo.svg');
const bgStyle = {
  backgroundImage: `url(${logoImage})`
};

const Logo = () => (
  <figure className="logo" style={bgStyle} />
);

export default Logo;
