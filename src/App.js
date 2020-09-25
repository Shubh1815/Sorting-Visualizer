import React, { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import ListBlocks from './components/ListBlocks/ListBlocks'
import Legends from './components/Legends/Legends'

// Algorithms
import bubbleSort from './algorithms/bubbleSort'
import insertionSort from './algorithms/insertionSort'
import selectionSort from './algorithms/selectionSort'
import mergeSort from './algorithms/mergeSort'
import quickSort from './algorithms/quickSort'

function App() {
	// Generating shuffled array of 1 to len
	const generateRandomArray = (len) => {
		setCompleted(false)
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
	const [completed, setCompleted] = useState(true)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	// Generating random array every time the length is changed by th user
	useEffect(() => {
		generateRandomArray(len)
	}, [len, algo])

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

	// Sorting according to the algorithm
	const handleSort = () => {
		
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						
						setBlocks(arr)
						if(j !== null || k != null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speed)
			})(0)
			
		}

		setSorting(true)

		algo === 'bubbleSort' ? sortAccOrder(bubbleSort(blocks)) : 
		algo === 'insertionSort' ?  sortAccOrder(insertionSort(blocks)) :
		algo === 'selectionSort' ? sortAccOrder(selectionSort(blocks)) :
		algo === 'mergeSort' ? sortAccOrder(mergeSort(blocks)) : 
		algo === 'quickSort' ? sortAccOrder(quickSort(blocks)) : (() => {
			setSorting(false)
			setCompleted(true)
		})()
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
				completed={completed}
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

			<Legends algo={algo}/>
		</div>
	);
}

export default App
