function truncateString(str, num) {
    if(str.length <= num){
        return str;
    }else if(str.length > num){
        let newstr = str.substring(0, num);
        newstr += "...";
        return newstr;    
    }else{
        str += "...";
        return str;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
  