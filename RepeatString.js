function repeatStringNumTimes(str, num) {
    let aux = '';
    if(num > 0){
      for(let i = 0; i < num; i++){
        aux += str;
      }
    }
    return aux;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  