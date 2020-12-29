function reverseString(str) {
  let j = str.length-1;
  let newstr = [];
  for(let i = 0; i <= str.length-1; i++){
    console.log(j);
    if(j >= 0){
      newstr[i] = str[j];
    }
    j--;
  }
  str = newstr.join("");
  return str;
}

console.log(reverseString("hello"));

