import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';
import upt from '../assets/upt.jpg'

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
        <div className='image-container'> <img src={upt} alt="upt page img"/></div>
        <div className='title'>Universitatea Poltehnica Timișoara</div>
        <div className='row-container full-width'>
          <div className='page-description'>Ce este UPT? Cum funcționează o universitate? Aici găsești tot ce trebuie să știi despre universitatea noastră, inclusiv detalii despre istoria și valorile UPT sau despre structura administrativă. Explorează pentru a te familiariza cu noul tău mediu academic!</div>
        </div>
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