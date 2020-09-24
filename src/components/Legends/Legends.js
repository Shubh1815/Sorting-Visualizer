import React from 'react'
import './Legends.css'

const Legends = () => {
    return (
        <div className='legends'>
            <div className='key'> <span className='sq compare'></span> Compare</div>
            <div className='key'> <span className='sq swap'></span> Swap</div>
            <div className='key'> <span className='sq sorted'></span> Sorted</div>
        </div>
    )
}

export default Legends
