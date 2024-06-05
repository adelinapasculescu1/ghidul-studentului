import React, {useState, useEffect} from 'react';
import '../App.css';
import SectionCard from '../components/sectioncard/SectionCard';

const BenefitsPage = () => {
  let [sections, setSections] = useState([])

    useEffect(() => {
        getSections()
    }, [])


    let getSections = async (category) => {
        let response = await fetch('/api/sections/bs')
        let data = await response.json()
        setSections(data)
    }

  return (
    <div className='column-container'>
      <div className='content-wrapper'>
        <div className='spacer'></div>
        <div className='image-container'> </div>
        <div className='title'>Beneficii și servicii</div>
        <div className='row-container full-width'>
          <div className='page-description'>Sigur ai văzut Biblioteca UPT, acum e momentul să aflii mai multe despre ea, dar și despre alte lucruri pe care Universitatea Politehnica Timișoara le pune la dispoziție studenților ei. De la CCOC, la baze sportive moderne, la burse sau la Campusul Virtual, aici găsești tot ce trebuie să știi despre ele.</div>
        </div>
        {sections.filter(section => section.position === 1 || section.position === 2).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 3 || section.position === 4).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        <div className='row-container full-width'>
          {sections.filter(section => section.position === 5 || section.position === 6).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
        {sections.filter(section => section.position === 7).map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div>
    </div>
  );
}

export default BenefitsPage