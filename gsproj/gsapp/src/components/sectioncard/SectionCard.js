import React, { useState } from "react";
import "./SectionCard.css";
import '../../App.css'

let getTitle = (section) => {
  let title = section?.title
  return title
}

let getContent = (section) => {
  let content = section?.content
  return content
}

const SectionCard = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="card-header">
        <h3>{getTitle(section)}</h3>
        <button className="toggle-button">
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && <div className="card-content">{getContent(section)}</div>}
    </div>
  );
};

export default SectionCard;