function confirmEnding(str, target) {
    let condicion;
    if(str.lastIndexOf(target) == (str.length - target.length)){
        condicion = true;
        console.log(str.lastIndexOf(target));
        console.log((str.length - target.length));
    }else{
        condicion = false;
    }
    return condicion;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  