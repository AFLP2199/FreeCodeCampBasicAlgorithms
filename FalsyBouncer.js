function bouncer(arr) {
    var aux = [false, null, 0, "", undefined, NaN];
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < aux.length; j++){
            if(arr[i] == aux[j]){
                newarr = arr.splice(i,1);
                if(isNaN(arr[i]) == true || arr[i] === ""){
                    newarr = arr.splice(i,1);
                }
            }
        }
    }
    return arr;
}
  
console.log(bouncer([7, "ate", "", false, 9]));
  