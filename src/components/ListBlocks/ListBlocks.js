import React, { useState, useEffect } from 'react'
import './ListBlocks.css'

function ListBlocks({ blocks, compare, sorted, swap }){
    const [width, setWidth] = useState(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5))
    const color = blocks.length <= 50 && width > 14 ? 'black' : 'transparent'

    useEffect(() => {
        const handleResize = () => {
            setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
        }

        window.addEventListener('resize', handleResize)

        setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8))
    }, [blocks.length])

    return (
        <div className='listBlocks'>

            {blocks.map((block, i) => {
                const height = block * 500 / blocks.length;
                let bg = 'turquoise'

                // i th element is being compared with some other element
                if(compare && (i === compare[0] || i === compare[1])){
                    bg = '#ffff50'
                }

                if(swap && (i === swap[0] || i === swap[1])){
                    bg='red'
                }
                // i th element is in its correct position
                if(sorted && sorted.includes(i)){
                    bg = '#4bc52e'
                }

                const style = {
                    'backgroundColor': bg,
                    'color': color, 
                    'height': height, 
                    'width': width
                }
                return (<div key={i} className='block' style={style}>{block}</div>)
            })}
        </div>
    );
}

export default ListBlocks
