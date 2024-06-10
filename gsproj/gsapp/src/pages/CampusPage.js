import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';
import campus_page from "../assets/campus_page.png";

const CampusPage = () => {
  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
    }, [])


    let getSections = async (category) => {
        let response = await fetch('/api/sections/campus')
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <div className='image-container'><img src={campus_page} alt="campus image"/> </div>
        <div className='title'>Campusul universitar</div>
        <div className='row-container full-width'>
          <div className='page-description'>Care-i treaba cu căminele? Dar cu cantina? Unde este clădirea ASPC? Aici găsești răspunsul acestor întrebări, iar în ceva timp, te vei simți de-al casei în Campusul UPT.</div>
        </div>
        {sections.map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      ))}
        </div>
    </div>
  );
}

export default CampusPage