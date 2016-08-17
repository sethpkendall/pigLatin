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
  if(!words.match(/[^a-z']/)){
    words = translateWord(words);
  }
  return words;
};

//<!-- Front End  -->
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    var result = toPigLatin(words);
    $("#result").text(result);
  });
});
