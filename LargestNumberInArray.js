function largestOfFour(arr) {
    let mayores = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        mayores[i] = arr[i][j];
        for(j; j < arr.length; j++){
            if(arr[i][j] > mayores[i]){
                mayores[i] = arr[i][j];
            }
        }
        j = 0;
    }
    return mayores;
  }
  
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  