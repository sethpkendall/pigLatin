//<!-- Back End -->
var translateWord = function(word){
  var vowelArray = ["a", "e", "i", "o", "u"];
  if(vowelArray.includes(word.charAt(0))){
    word += "ay";
  } else {
    var suffix = "";
    for(var i = 0; i < word.length; i++){
      if(!vowelArray.includes(word.charAt(i))){
        suffix += word.charAt(i);
      } else {
        if(word.charAt(i) === vowelArray[4] && word.charAt(i-1) === 'q'){
          suffix += word.charAt(i);
          word = word.slice(i+1);
        } else {
          word = word.slice(i);
        }
        break;
      }
    }
    word += (suffix + "ay");
  }
  return word;
}

var toPigLatin = function(words){
  words = words.toLowerCase();
  var wordArray = words.split(" ");
  //console.log(wordArray);
  var wordArray2 = wordArray.map(function(word){
    if(!word.match(/[^a-z'.,;!?:-_]/)){
      var wordEnd = "";
      if(word.slice(-1).match(/['.,;!?:]/))
      {
        wordEnd = word.slice(-1);
        word = word.slice(0, -1);
      }
      return translateWord(word)+wordEnd;
    } else {
      return word;
    }
  });
  console.log(wordArray2);
  wordArray2[0] = wordArray2[0].charAt(0).toUpperCase() + wordArray2[0].slice(1);
  return wordArray2.join(" ");
};

//<!-- Front End  -->
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    if(words){
      var result = toPigLatin(words);
      $("#result").text(result);
    } else {
      alert("Please enter a word or words in the box");
    }
  });
});
