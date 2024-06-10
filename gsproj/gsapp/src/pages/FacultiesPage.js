import React, {useState, useEffect} from 'react';
import PageCard from '../components/pagecard/PageCard';
import '../App.css';
import faculties_page from "../assets/faculties_page.png";


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
            <div className='image-container'> <img src={faculties_page} alt="faculties image"/> </div>
            <div className='title'>Facultatea mea</div>
            {pages.map(page => (
                <PageCard key={page.id} page={page} />
            ))}
        </div></div>
      );
}

export default FacultiesPage