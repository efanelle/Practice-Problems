//leetcode - https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome (string) {
  var longestPalindrome = string[0];

  function recurse(stringOption) {
    var currWord = '';
    if(stringOption.length === 1) {
      return;
    }
      for (var i = 0; i < stringOption.length; i++) {
      currWord += stringOption[i];
      if (currWord === currWord.split('').reverse().join('')) {
        if (currWord.length > longestPalindrome.length) {
          longestPalindrome = currWord;
        }
      }
    }
    recurse(stringOption.slice(1));

  }

  recurse(string);
  return longestPalindrome;

}



console.log(longestPalindrome("babad"));

