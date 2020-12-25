import React, { useEffect } from 'react'
import '../css/404.css'

function Unauthorized() {
    const loader = document.querySelector('.loader');
    const hideLoader = () => loader.classList.add('loader--hide');
    useEffect(() => {
        hideLoader();
    }, []);
    return (
        <div className='body'>
            <div id="message">
                <h2>401</h2>
                <h1>Unauthorized</h1>
                <p>You are not authorized to view this page.</p>
            </div>
        </div>
    )
}

export default Unauthorized
