import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import upt from '../assets/upt.jpg';

const FacultiesPage = () => {
  let [pages, setPages] = useState([])

    useEffect(() => {
        getPages()
    }, [])


    let getPages = async (category) => {
        let response = await fetch('/api/pages/faculty')
        let data = await response.json()
        setPages(data)
    }

    return (
        
        <div className="column-container"><div className='content-wrapper'>
            <div className='spacer'></div>
                <h1>Facultatea mea</h1>
            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
        </div></div>
      );
}

export default FacultiesPage