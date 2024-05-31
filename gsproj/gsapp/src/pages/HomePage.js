import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import upt from '../assets/upt.jpg';

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
            <div className='spacer'></div>
            <div className='row-container full-width align-right' style={{ alignItems: 'center' }}>
                    <div className="text">
                        <h1>E normal să ai întrebări.</h1>
                        <h2>Aici ai și răspunsuri!</h2>
                    </div>
                    <div className='image-container'>
                        <img src={upt} />
                    </div>
            </div>

            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
        </div></div>
      );
}

export default HomePage