import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ListBlocks from './components/ListBlocks/ListBlocks'
import bubbleSort from './algorithms/bubbleSort'

function App() {

	const generateRandomArray = (len) => {
		setSorting(false)
		setSortedIndex([])

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

	const [len, setLength] = useState(40)
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	useEffect(() => {
		generateRandomArray(len)
	}, [len])

	const sortBlocks = () => {
		setSorting(true)
		bubbleSort(blocks, speed, setBlocks, setSorting, setCompare, setSortedIndex)
	}

	const handleLength = (event) => {
		setLength(Number(event.target.value))
	}

	return (
		<div className="App">
			<Navbar 
				handleLength={handleLength} 
				generateRandomArray={() => generateRandomArray(len)} 
				sortBlocks={sortBlocks} 
				sorting={sorting}
			/>
			
			<ListBlocks 
				blocks={blocks} 
				compare={sorting && compare}
				sorted={sortedIndex} 
			/>
		</div>
	);
}

export default App
