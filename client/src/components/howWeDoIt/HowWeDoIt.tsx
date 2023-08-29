import React from 'react';
import './HowWeDoIt.css';
import ContentItem from './Utilities/ContentItem';
import SVGImage1 from '../../assets/svgs/1.svg';
import SVGImage2 from '../../assets/svgs/2.svg';
import SVGImage3 from '../../assets/svgs/3.svg';
import SVGImage4 from '../../assets/svgs/4.svg';

const HowWeDoIt = (): JSX.Element => (
  <div className="howWeDoIt" id="howWeDoIt">
    <h1 className="page-title">How We Do It</h1>
    <ContentItem
      name="We diagnose your business, and understand what
      you do, so we have the relevant information to offer what’s best for your business."
      contentNumber={1}
      image={SVGImage1}
      swap={false}
    />
    <ContentItem
      name="We understand your specific customer base, so we can help you engage with them."
      contentNumber={2}
      image={SVGImage2}
      swap
    />
    <ContentItem
      name="We understand your brand, and your values to help you attract
      the right customers for your business"
      contentNumber={3}
      image={SVGImage3}
      swap={false}
    />
    <ContentItem
      name="We help you use the web to communicate your brand
      and your values to your customers, so that your customers
      respect your brand at a higher level."
      contentNumber={4}
      image={SVGImage4}
      swap
    />
  </div>
);

export default HowWeDoIt;
