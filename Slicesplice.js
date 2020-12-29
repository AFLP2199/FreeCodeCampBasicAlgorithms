function frankenSplice(arr1, arr2, n) {
    let newarr = [];
    let arrlength = arr1.length + arr2.length;
    let i = 0;
    do{
        if(i < n){
            newarr[i] = arr2[i];
        }else if (i == n){
            let aux = i;
            for(let j = 0; j < arr1.length; j++){
                newarr[aux] = arr1[j];
                aux++;
            }
        }else if (i >= newarr.length){
            newarr[i] = arr2[newarr.length - arr1.length];
        }
        i++;
    }while(newarr.length < arrlength);

    return newarr;
  
}
  
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  