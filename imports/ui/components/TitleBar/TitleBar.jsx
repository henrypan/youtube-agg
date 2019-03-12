import React from 'react';

import TitleLinks from './TitleLinks';

export default TitleBar = ({ children, title }) =>
  <nav className="navbar bg-secondary text-dark shadow justify-content-around">

    <TitleLinks title={title} />

    <h1 className="serif">{title}</h1>
    
    {children}

  </nav>
