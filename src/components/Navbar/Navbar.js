import React from 'react'
import './Navbar.css'

const Navbar = ({ handleLength, generateRandomArray, sortBlocks }) =>{

    return (
        <nav>
            <div className='nav-brand'>Sorting Visualizer</div>

            <div>
                <input type='range' onChange={handleLength} min='5' max='100' step='1'></input>
                <button onClick={generateRandomArray}>Randomize</button>
                <button onClick={sortBlocks}>Sort</button>
            </div>
        </nav>
    )
}

export default Navbar;