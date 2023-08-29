import React from 'react';
import './Landing.css';

import { Link } from 'react-scroll';
import { ReactComponent as LearnMoreSVG } from '../../assets/svgs/learn-more.svg';

const Landing = (): JSX.Element => (
  <div className="Landing" id="home">
    <div className="background-image">
      <div className="tint">
        <div className="landing-text">
          <p data-testid="landing-text">
            <span>We help </span>
            <span>businesses </span>
            <span className="blue">discover </span>
            <span>the web</span>
          </p>
        </div>
        <Link to="whatWeDo" smooth>
          <button className="landing-button" type="button">
            <span className="text">Learn More</span>
            <span className="icon">
              <span className="dot">.</span>
              <LearnMoreSVG className="arrowIcon" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Landing;
