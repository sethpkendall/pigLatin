//<!-- Back End -->
var toPigLatin = function(words){
  var vowelArray = ["a", "e", "i", "o", "u"];
  words = words.toLowerCase();
  var wordArray = words.split(" ");
  console.log(wordArray);
  if(vowelArray.includes(words.charAt(0))){
    words += "ay";
  } else {
    var suffix = "";
    for(var i = 0; i < words.length; i++){
      if(!vowelArray.includes(words.charAt(i))){
        suffix += words.charAt(i);
      } else {
        if(words.charAt(i) === vowelArray[4] && words.charAt(i-1) === 'q'){
          suffix += words.charAt(i);
          words = words.slice(i+1);
        } else {
          words = words.slice(i);
        }
        break;
      }
    }
    words += (suffix + "ay");
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
