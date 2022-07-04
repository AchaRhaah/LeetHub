/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     var number = 0;
     var substrings = []
     for(var i = 0; i <= s.length; i++){
         var start= s[i];
         output = "" + s[i]
         for( var j = i+1; j <= s.length; j++ ){
            if(s[i] !== s[j] && typeof s[j] !== 'undefined' && output.includes(s[j]) === false){
            output += s[j]
            }
            else{
            substrings.push(output)
            output = ""
            break;
            }
         }
     }
     for( var i = 0; i <= substrings.length; i++){
         if (String(substrings[i]).length >= number && typeof s[i] !== 'undefined'){
            number = substrings[i].length;
         }
     }
    return number

     
};
console.log("the length is:"+lengthOfLongestSubstring("bbbbb"))
