import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';

const StudentLifePage = () => {
  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
    }, [])


    let getSections = async (category) => {
        let response = await fetch('/api/sections/studentlife')
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <div className='image-container'> </div>
        <div className='title'>Student life</div>
        <div className='row-container full-width'>
          <div className='page-description'>Studenția, sau cum se mai spune, cei mai frumoși ani. Totuși, sunt plini de lucruri noi. Ce drepturi și obligații am acum? Cum se citește orarul? Ce înseamnă "evaluare distribuită"? Răspundurile sunt aici!</div>
        </div>
        {sections.filter(section => section.position === 1).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 2 || section.position === 3).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        {sections.filter(section => section.position === 4).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 5 || section.position === 6 || section.position === 6).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        </div>
    </div>
  );
}

export default StudentLifePage