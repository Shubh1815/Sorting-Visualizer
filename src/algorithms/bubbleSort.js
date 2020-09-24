const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = (blocks, speed, setBlocks, setSorting, setCompare, setSortedIndex, setSwap) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let i, j
    
    for (i = 0; i < dupBlocks.length; i++) {
        for (j = 0; j < dupBlocks.length - i - 1; j++) {

            // Pushing j and j + 1 to order and if swap than ushing the while duplicate blocks array
            order.push([j, j + 1, null, null])
            if (dupBlocks[j] > dupBlocks[j + 1]) {
                swap(dupBlocks, j, j + 1)
                order.push([j, j + 1, dupBlocks.slice(), null]) 
            }
        }
        order.push([null, null, null, j]) // j-th element is in correct position
    }

    return order
}

export default bubbleSort

