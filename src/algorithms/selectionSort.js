const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const selectionSort = (blocks) => {

    const dupBlocks = blocks.slice() // copying blocks array
    const order = []

    let i, j
    
    for (i = 0; i < dupBlocks.length; i++) {
        for (j = i + 1; j < dupBlocks.length; j++) {

            order.push([i, j, null, null])                  // Compare
            if (dupBlocks[i] > dupBlocks[j]) {
                swap(dupBlocks, i, j)
                order.push([i, j, dupBlocks.slice(), null]) // Swap
            }
        }
        order.push([null, null, null, i]) // i-th element is in correct position ( Sorted )
    }

    return order
}

export default selectionSort