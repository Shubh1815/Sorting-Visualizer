import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ListBlocks from './components/ListBlocks/ListBlocks'

function App() {

	const generateRandomArray = () => {
		
		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

	const [blocks, setBlocks] = useState([])
	const [len, setLength] = useState(40)
	const [sorting, setSorting] = useState(false)

	useEffect(() => {
		generateRandomArray()
	}, []) 

	useEffect(() => {
		generateRandomArray()
	}, [len])

	const sortBlocks = () => {
		
		setSorting(true)

		const dupBlocks = Array.from(blocks);
		const dupOrder = []
		for (let i = 0; i < dupBlocks.length; i++) {
			for (let j = 0; j < dupBlocks.length - i - 1; j++) {
				if (dupBlocks[j] > dupBlocks[j + 1]) {
					let temp = dupBlocks[j]
					dupBlocks[j] = dupBlocks[j + 1]
					dupBlocks[j + 1] = temp

					dupOrder.push(dupBlocks.slice())
					
				}
			}
		}
		sortAccOrder(dupOrder)
	}

	const sortAccOrder = (order) => {
		(function loop(i) {
			setTimeout(function () {
				setBlocks(order[i])
				if (++i < order.length){
					loop(i)
				} else {
					setSorting(false)
				}   
			}, 100)
		})(0)
	}

	const handleLength = (event) => {
		setLength(Number(event.target.value))
	}

	return (
		<div className="App">
			<Navbar handleLength={handleLength} generateRandomArray={!sorting && generateRandomArray} sortBlocks={!sorting && sortBlocks} />
			
			<ListBlocks blocks={blocks} />
		</div>
	);
}

export default App;
