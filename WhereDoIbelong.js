function getIndexToIns(arr, num){
    let aux;
    for(let i = 0; i <= arr.length; i++){
        for(let j = 0; j <= arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                aux = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = aux;
            }           
        }    
    }
    console.log(arr);

    let pos = 0;
    for(let i = 0; i <= arr.length; i++){
        if(num <= arr[0]){
            pos = 0;
        }else if(num > arr[arr.length-1] && pos == 0){
            pos = arr.length;
        }else if(num <= arr[i]){
            if(pos == 0){
                pos = i;
            }
        }
    }

    return pos;
  }

  console.log(getIndexToIns([5, 3, 20, 3], 5));

  [10, 20, 30, 40, 50], 35