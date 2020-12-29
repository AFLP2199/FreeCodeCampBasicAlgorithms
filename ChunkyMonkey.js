function chunkArrayInGroups(arr, size) {
    let newarr = [];
    let subgroups = arr.length/size;
    let a = 0, b = size;
    for(let j = 0; j < subgroups; j++){
        newarr[j] = [];
    }
    for(let i = 0; i < subgroups; i++){
        newarr[i] = arr.slice(a, b);
        a+=size;
        b+=size;
    }

    return newarr;
}
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
  