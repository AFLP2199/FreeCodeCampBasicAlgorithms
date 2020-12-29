function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        num = func(arr[i]);
        if(num === true){
            return arr[i];
        }
    }

  }
  
 console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
  