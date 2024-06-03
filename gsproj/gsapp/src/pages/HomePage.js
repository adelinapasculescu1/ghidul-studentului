import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import upt from '../assets/upt.jpg';
import Lottie from "lottie-react";
import home_anim from "../assets/home_anim.json";


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
                    <div className="text">
                        <h1>E normal să ai întrebări.</h1>
                        <h1 className='underlined'>Aici ai și răspunsuri!</h1>
                    </div>
                    <Lottie animationData={home_anim} />;
            </div>

            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
        </div></div>
      );
}

export default HomePage