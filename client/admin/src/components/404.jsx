import React, { useEffect } from 'react'
import '../css/404.css'

function Error404() {
    const loader = document.querySelector('.loader');
    const hideLoader = () => loader.classList.add('loader--hide');
    useEffect(() => {
        hideLoader();
    }, []);
    return (
        <div>
            <div id="message">
                <h2>404</h2>
                <h1>Page Not Found</h1>
                <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
            </div>
        </div>
    )
}

export default Error404
