import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import upt from '../assets/upt.jpg';
import Lottie from "lottie-react";
import home_anim from "../assets/home_anim.json";
import home_anim2 from "../assets/home_anim2.json";
import home_anim3 from "../assets/home_anim3.json";
import anim_home5 from "../assets/anim_home5.json";


const HomePage = () => {

    let [pages, setPages] = useState([])

    useEffect(() => {
        getPages()
    }, [])


    let getPages = async (category) => {
        let response = await fetch('/api/pages/home')
        let data = await response.json()
        setPages(data)
    }

    return (
        <div className="column-container"><div className='content-wrapper'>
            <div className='row-container full-width align-right' style={{ alignItems: 'center' }}>
                    <div className="container align-right">
                        <div className='title'>E normal să ai întrebări.</div>
                        <div className='title underlined'>Aici ai și răspunsuri!</div>
                        <div className='page-description'>Bine ai venit! Primul an de facultate poate fi stresant, dar nu-ți face griji, noi suntem aici să te ajutăm să te acomodezi. Alege de mai jos secțiunea care te interesează!</div>
                    </div>
                    <Lottie animationData={anim_home5} />;
            </div>

            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
        </div></div>
      );
}

export default HomePage