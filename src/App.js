import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ListBlocks from './components/ListBlocks/ListBlocks'
import bubbleSort from './algorithms/bubbleSort'
import Legends from './components/Legends/Legends'

function App() {
	// Generating shuffled array of 1 to len
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

	// States
	const [algo, setAlgo] = useState('bubbleSort')
	const [len, setLength] = useState(30)
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	// Generating random array every time the length is changed by th user
	useEffect(() => {
		generateRandomArray(len)
	}, [len])

	// Sorting according to the algorithm
	const handleSort = () => {
		setSorting(true)
		algo === 'bubbleSort' ? bubbleSort(blocks, speed, setBlocks, setSorting, setCompare, setSortedIndex, setSwap) : setSorting(false)
	}

	// setting the selected algorithm
	const handleAlgo = (event) => {
		setAlgo(event.target.value)
	}

	// handling the length of the array
	const handleLength = (event) => {
		setLength(Number(event.target.value))
	}

	// handling the speed of sorting
	const handleSpeed = (event) => {
		setSpeed(Math.ceil(400 / Number(event.target.value)))
	}

	return (
		<div className="App">
			<Navbar 
				generateRandomArray={() => generateRandomArray(len)}
				handleLength={handleLength} 
				handleSpeed={handleSpeed}
				handleAlgo={handleAlgo}
				handleSort={handleSort} 
				sorting={sorting}
				len={len}
				speed={speed}
				algo={algo}
			/>
			
			<ListBlocks 
				blocks={blocks} 
				compare={sorting && compare}
				swap={sorting && swap}
				sorted={sortedIndex} 
			/>

			<Legends/>
		</div>
	);
}

export default App
