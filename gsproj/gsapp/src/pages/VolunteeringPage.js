import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';
import volunteering_page from "../assets/volunteering_page.png";

const VolunteeringPage = () => {
  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
    }, [])


    let getSections = async (category) => {
        let response = await fetch('/api/sections/volunteering')
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <div className='image-container'> <img src={volunteering_page} alt="volunteering image"/></div>
        <div className='title'>Voluntariat</div>
        <div className='row-container full-width'>
          <div className='page-description'>Ți-ar plăcea să faci voluntariat? În cadrul Universității Politehnica Timișoara ai numeroase oportunități prin care te poți implica activ în viața studenților. Descoperă organizațiile studențești din UPT!</div>
          </div>
        {sections.filter(section => section.position === 1).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 2 || section.position === 3).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 4 || section.position === 5).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 6 || section.position === 7).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 8 || section.position === 9).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 10 || section.position === 11).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        </div>
    </div>
  );
}

export default VolunteeringPage;