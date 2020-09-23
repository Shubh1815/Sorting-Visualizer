import React, { useState, useEffect } from 'react'
import './ListBlocks.css'

function ListBlocks({ blocks }){

    const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent'
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
        }

        window.addEventListener('resize', handleResize)
    })

    useEffect(() => {
        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    }, [blocks.length])

    return (
        <div className='listBlocks'>
            {blocks.map((block, i) => {
                const height = block * 500 / blocks.length;
                return (<div key={i} className='block' style={{'height': height, 'color': color, 'width': width}}>{block}</div>)
            })}
        </div>
    );
}

export default ListBlocks
