function mutation(arr) {
    let counter = 0;
    for(let a = 0; a < arr.length; a++){
        arr[a] = arr[a].toLowerCase();
    }
    for(let i = 0; i <= arr[1].length; i++){
        if(arr[0].includes(arr[1][i])){
            counter++;
        }
    }
    console.log(counter);
    if(counter == arr[1].length){
        return true;
    }else{
        return false;
    }
}
console.log(mutation(["hello", "Hello"]));
  