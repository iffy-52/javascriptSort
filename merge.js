function merge(arr1, arr2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
        sortedArr.push(arr1[i]);
        i++;
    } else {
        sortedArr.push(arr2[j]);
        j++;
    }
    }

    while (i < arr1.length) {
    sortedArr.push(arr1[i]);    
    i++;
    }

    while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
    }

    return sortedArr;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};