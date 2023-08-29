import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import JYOTILOGOPNG from '../../assets/logo/jyoti-logo.png';
import './Navigation.css';

const Navigation = (): JSX.Element => {
  const [pos, setPos] = useState(window.pageYOffset);

  const positions: any = {
    home: window.innerHeight - 20,
    whatWeDo: window.innerHeight - 20,
    work: window.innerHeight - 20,
  };

  positions.howWeDoIt = positions.whatWeDo + window.innerHeight - 20;
  positions.work = positions.howWeDoIt + document.getElementById('howWeDoIt')?.offsetHeight;
  positions.contact = positions.work + window.innerHeight;

  if (window.innerWidth < 768) {
    positions.home = window.innerHeight - 300;
    positions.whatWeDo = window.innerHeight - 20;
    positions.work = window.innerHeight - 300;
    positions.howWeDoIt = positions.whatWeDo + window.innerHeight - 300;
    positions.work = positions.howWeDoIt + document.getElementById('howWeDoIt')?.offsetHeight;
    positions.contact = positions.work + window.innerHeight;
  }

  const onScroll = () => setPos(window.pageYOffset);

  const selected = (section: string): string => {
    switch (section) {
      case 'home':
        return pos < positions.home ? 'selected' : '';
      case 'whatWeDo':
        return pos >= positions.whatWeDo && pos < positions.work ? 'selected' : '';
      case 'work':
        return pos >= positions.work && pos < positions.contact ? 'selected' : '';
      case 'contact':
        return pos >= positions.contact ? 'selected' : '';
      default:
        return '';
    }
  };

  const isBlack = (): boolean => {
    if (pos <= positions.home || (pos >= positions.howWeDoIt && pos <= positions.work)) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <nav className="Navigation">
      <img src={JYOTILOGOPNG} alt="jyoti" className="logo" />
      <ul className={`nav-links ${isBlack() ? 'black' : ''}`}>
        <li>
          <Link to="home" smooth>
            <button type="button" className={selected('home')}>
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="whatWeDo" smooth>
            <button type="button" className={selected('whatWeDo')}>
              what we do
            </button>
          </Link>
        </li>
        <li>
          <Link to="work" smooth>
            <button type="button" className={selected('work')}>
              Work
            </button>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth>
            <button type="button" className={selected('contact')}>
              Contact Me
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
