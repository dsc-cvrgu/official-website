import React from 'react'
import preloader from '../img/preloader.gif'
function Spinner() {
    return (
        <img src={preloader} className='mx-auto img-fluid rounded-circle z-depth-1' alt="preloader" />
    )
}

export default Spinner