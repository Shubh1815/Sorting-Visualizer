let order = []

const merge = (dupBlocks, l, mid, r) => {
    let i = l, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= r)){
        order.push([i, j, null, null])      // Compare i th and j th element  
        if(dupBlocks[i] <= dupBlocks[j]){
            arr.push(dupBlocks[i++])
        } else {
            arr.push(dupBlocks[j++])
        }
    }

    while(i <= mid){
        order.push([i, null, null, null])
        arr.push(dupBlocks[i++])
    }

    while(j <= r){
        order.push([null, j, null, null])
        arr.push(dupBlocks[j++])
    }
    
    for(i=l;i<=r;i++){
        dupBlocks[i] = arr[i - l]
        order.push([i, null, dupBlocks.slice(), null]) 
    }

}

const mergeSortHelper = (dupBlocks, l, r) => {
    if(l >= r) 
        return 
    
    const mid = Math.floor((l + r) / 2)

    mergeSortHelper(dupBlocks, l, mid)
    mergeSortHelper(dupBlocks, mid + 1, r) 
    
    merge(dupBlocks, l, mid, r)
}

const mergeSort = (blocks) => {
    order = []
    const dupBlocks = blocks.slice() // copying blocks array
    
    mergeSortHelper(dupBlocks, 0, dupBlocks.length - 1)
    
    for(let i=0;i<dupBlocks.length;i++){
        order.push([null, null, null, i]) // i th element will be in correct position
    }

    return order
}

export default mergeSort