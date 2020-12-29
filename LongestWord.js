function findLongestWordLength(str) {
    let counter = 0;
    let j = 0, i = 0;
    while(i <= str.length){
        if(str[i] == " " || str[i] == undefined){
            let mayor = str.substring(j,i);
            j = i+1;
            if(mayor.length > counter){
                counter = mayor.length;
            }
        }
        i++;
    }
    return counter;
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
 