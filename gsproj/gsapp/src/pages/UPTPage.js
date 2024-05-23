import React from 'react'
import '../App.css';
import SectionCard from '../components/sectioncard//SectionCard';




const UPTPage = () => {
  return (
    <div className="App">
      <h1>Expandable Card Example</h1>
      <SectionCard
        title="Card Title 1"
        content="This is the content of the first card. It can be any JSX element or text."
      />
      <SectionCard
        title="Card Title 2"
        content="This is the content of the second card. You can put anything you want here."
      />
    </div>
  );
}

export default UPTPage