import React, { useState } from 'react';
import './SectionCard.css';

const SectionCard = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="card-header">
        <h3>{title}</h3>
        <button 
          className="toggle-button" 
          onClick={(e) => { 
            e.stopPropagation(); 
            toggleExpand(); 
          }}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && <div className="card-content">{content}</div>}
    </div>
  );
};

export default SectionCard;