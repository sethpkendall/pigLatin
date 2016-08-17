//<!-- Back End -->
var toPigLatin = function(words){
  var vowelArray = ["a", "e", "i", "o", "u"];
  words = words.toLowerCase();
  if(vowelArray.includes(words.charAt(0))){
    words += "ay";
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
