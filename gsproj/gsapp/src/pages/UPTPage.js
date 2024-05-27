import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';

const UPTPage = () => {

  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
    }, [])


    let getSections = async (category) => {
        let response = await fetch('/api/sections/upt')
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <h1>Universitatea Poltehnica Timișoara</h1>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 1 || section.position === 2).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        {sections.filter(section => section.position === 3).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 4 || section.position === 5 || section.position === 6).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        </div>
    </div>
  );
}

export default UPTPage