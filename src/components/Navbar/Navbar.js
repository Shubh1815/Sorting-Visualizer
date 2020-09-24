import React from 'react'
import './Navbar.css'

const Navbar = ({ handleLength, generateRandomArray, sortBlocks, sorting }) =>{

    return (
        <nav>
            <div className='nav-brand'>Sorting Visualizer</div>

            <div>
                <input type='range' onChange={handleLength} min='5' max='100' step='1' disabled={sorting}></input>
                <button onClick={generateRandomArray} disabled={sorting}>Randomize</button>
                <button onClick={sortBlocks} disabled={sorting}>Sort</button>
            </div>
        </nav>
    )
}

export default Navbar