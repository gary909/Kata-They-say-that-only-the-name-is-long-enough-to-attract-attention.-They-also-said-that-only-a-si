function isOpposite(s1,s2){
  //coding here...
//   let myStr = "";
//   for(let i = s1.length - 1; i >=0; i--){
//     myStr = myStr + s1[i];
//   }
//   return myStr

// let myStr = "";
// for(let i = s1.length - 1; i >=0; i--){
//     if(s1[i] == s1[i].toUpperCase()){
//         myStr = myStr + s1[i].toLowerCase();
//     } else if (s1[i] == s1[i].toLowerCase()){
//         myStr = myStr + s1[i].toUpperCase();
//     }
// }
// return myStr

// return reverseString(s1)

// return s1.length;


function isOpposite(s1, s2) {
    if (s1.length !== s2.length || (s1 === '' && s2 === '')) {
      return false;
    }
  
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) === s2.charAt(i) || s1.charAt(i).toLowerCase() !== s2.charAt(i).toLowerCase()) {
        return false;
      }
    }
    return true;
  }

//Forfeited this one :-(




}

console.log(isOpposite("ab","AB")); // true
console.log(isOpposite("aB","Ab")); // true
console.log(isOpposite("aBcd","AbCD")); // true
console.log(isOpposite("aBcde","AbCD")); // false
console.log(isOpposite("AB","Ab")); // false
console.log(isOpposite("","")); // falses