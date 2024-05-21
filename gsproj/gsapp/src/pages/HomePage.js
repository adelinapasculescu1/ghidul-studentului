import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import upt from '../assets/upt.jpg';

const HomePage = () => {

    let [pages, setPages] = useState([])

    useEffect(() => {
        getPages()
    }, [])


    let getPages = async () => {
        let response = await fetch('/api/pages/home')
        let data = await response.json()
        setPages(data)
    }

    return (
        <div className="column-container">
            <div className='mt-3'></div>
            <div className='row-container full-width'>
                <div className="text">
                    <h1>E normal sa ai intrebari.</h1>
                    <h2>Aici ai si raspunsuri</h2>
                </div>
                <div className='image-container'>
                    <img src={upt} />
                </div>
            </div>

            {pages.map((page) => (
                    <PageCard page={page} />
                ))}
        </div>
      );
}

export default HomePage