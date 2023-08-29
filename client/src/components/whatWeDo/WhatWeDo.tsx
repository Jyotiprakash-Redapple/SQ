import React from 'react';
import { Link } from 'react-scroll';
import './WhatWeDo.css';

const WhatWeDo = (): JSX.Element => (
  <div className="WhatWeDo" id="whatWeDo">
    <h1 className="page-title" style={{ color: '#000' }}>What We Do</h1>
    <div data-testid="what-we-do-text" className="page-text">
      <p>
        We build
        <strong> stunning </strong>
        websites
        {' '}
      </p>
      <p>
        that effectively
        <strong> connects </strong>
      </p>
      <p>your customers with your </p>
      <p><strong>brand</strong></p>
    </div>
    <Link to="howWeDoIt" smooth>
      <button type="button" className="skeleton-btn">learn how</button>
    </Link>
  </div>
);

export default WhatWeDo;
