const bubbleSort = array => {
    for(let i = 0; i <= array.length - 1; i++) {
        for(let j = 0; j <= array.length - 1 - i; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}



console.log(bubbleSort([42, 15, 23, 8, 4, 16, 9, 55, 0, 34, 12]));
