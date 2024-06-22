import React, {useState, useEffect} from 'react';
import '../../App.css';
import SectionCard from '../../components/sectioncard/SectionCard';

const FacultyPage = ({category, title}) => {
  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections(category)
    }, [category])


    let getSections = async (category) => {
        let response = await fetch(`/api/sections/${category}`)
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <div className='title'>{title}</div>
        <div className='row-container full-width'>
        </div>
        {sections.filter(section => section.position === 1).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 2 || section.position === 3).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        {sections.filter(section => section.position > 3).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
    </div>
  );
}

export default FacultyPage;