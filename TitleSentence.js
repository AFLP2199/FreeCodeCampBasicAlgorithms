function titleCase(str) {
    str = str[0].toUpperCase() + str.toLowerCase().substring(1, str.length);
    for(let i = 0; i < str.length; i++){
        if(str[i] == " " && str[i+1] != undefined){
            str = str.substring(0, i+1) + str[i+1].toUpperCase() + str.substring(i+2, str.length);
        }

    }
    return str;
  }
console.log("ORACION ORIGINAL: sHoRt AnD sToUt \nORACION LUEGO DE CAMBIARLA:");
console.log(titleCase("sHoRt AnD sToUt"));
  