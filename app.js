
//Hello Nick
//For the most part, I was able to understand and write the uniqueWordCount and calculateAverageWordLength functions on my own.  
//Once you get down to the tokenizeText and removeReturns functions, I am lost.  While I understand what they do (taking out special characters and white space)
//I was not able to write that w/o looking at Thinkful's code.  I understand the resultsOfText function, but was once again, I'm not sure how to write the 
//watchFormSubmission function left to my own devices.  If I am lookig at Thinkful's code, I understad what it is doing, but I need help figuring out how to write a
//simple program from scratch.  Also, the code below (despite looking at Thinkful's solution) still does not work.  Maybe if you could look over what I have done 
//and discuss with me during our next mentor session.  Thank you for your help!

function uniqueWordCount(words) {
  var uniqueWords = [];
  for(i=0; i<=words.length; i++) {
    if(uniqueWords.indexOf(words[i] === -1)) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.length;
}

function caluclateAverageWordLength(words) {
  var totalLength = words.join("").length;
  return totalLength/words.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function resultsOfText(text) {
  var tokens = tokenizeText(text);
  var numUniqueWords = UniqueWordCount(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = calculateAverageWordLength(tokens);
  
  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-words').text(numUniqueWords);
  textReport.find('.js-word-length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}

function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}

$(function() {
  watchFormSubmission();
});


 
