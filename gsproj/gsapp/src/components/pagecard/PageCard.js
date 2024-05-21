import React from 'react'
import { Link } from 'react-router-dom';
import './PageCard.css'
import '../../App.css'

let getTitle = (page) => {
  let title = page?.title
  return title
}

let getLink = (page) => {
  let link = page?.link
  return link
}

const PageCard = ({page}) => {
  return (
    
      <div className="page-card"><Link to={`/${getLink(page)}`}>
        <div className="text">{getTitle(page)}</div></Link>
      </div>
    
  );
};

export default PageCard;