import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import SectionCard from '../components/sectioncard/SectionCard';
import '../App.css';
import Lottie from "lottie-react";
import home_anim_mobile from "../assets/home_anim_mobile.json";
import anim_home5 from "../assets/anim_home5.json";


const HomePage = () => {

    let [pages, setPages] = useState([])
    const [isMobile, setIsMobile] = useState(false);
    let [sections, setSections] = useState([])
    useEffect(() => {
        getPages()
        getSections()
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, [])


    let getPages = async () => {
        let response = await fetch('/api/pages/home')
        let data = await response.json()
        setPages(data)
    }


    let getSections = async () => {
        let response = await fetch('/api/sections/contact')
        let data = await response.json()
        setSections(data)
    }

    return (
        <div className="column-container"><div className='content-wrapper'>
            {isMobile && <div className="spacer" />}
            <div className='row-container full-width align-right' style={{ alignItems: 'center' }}>
                    <div className="container align-right">
                        <div className='title'>E normal să ai întrebări.</div>
                        <div className='title underlined'>Aici ai și răspunsuri!</div>
                        <div className='page-description'>Bine ai venit! Primul an de facultate poate fi stresant, dar nu-ți face griji, noi suntem aici să te ajutăm să te acomodezi. Alege de mai jos secțiunea care te interesează!</div>
                    </div>
                    
                    {!isMobile && <Lottie animationData={anim_home5} className="lottie-animation" />}
            </div>

            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
            {sections.map(section => (
                <SectionCard key={section.id} section={section} />
            ))}
        </div></div>
      );
}

export default HomePage