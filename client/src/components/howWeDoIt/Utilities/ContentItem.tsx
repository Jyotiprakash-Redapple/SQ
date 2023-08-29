import React from 'react';
import './ContentItem.css';

interface Props {
    name: string,
    contentNumber: number,
    image: string,
    swap: boolean
}

const ContentItem: React.FC<Props> = ({
  name,
  contentNumber,
  image,
  swap,
}: Props): JSX.Element => (
  <div className={`contentItemContainer ${swap ? 'swap' : ''}`}>
    <h1 className="number">{contentNumber}</h1>
    <div className="contentData">
      <div className="contentItem contentItem-para">
        <p>{name}</p>
      </div>
    </div>
    <div className="contentItem">
      <img src={image} alt="svg_image" />
    </div>
  </div>
);

export default ContentItem;
