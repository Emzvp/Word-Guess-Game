var books = [
    'Harry Potter',
    'Animal Farm',
    'Wuthering Heights',
    'On the road',
    'The Catcher in the Rye',
    'The Color Purple',
    'Romeo and Juliet',
    'Pride and Prejudice',
    'Invisible Man',
    'Lolita',
    'A Tale of Two Cities',
    'Romeo and Juliet',
    'Hamlet',
    'The Great Gatsby',
    'To Kill a Mocking Bird'
];
var rightGuess =[];
var wrongGuess =[];
var underScore = [];
var blanks = document.getElementsByClassName('words');
var randomBook= Math.floor(Math.random()*books.length); 
var chosenBook = word[randomBook];
var underScores= ()function{
    for(var i = 0; i < choosenBook.length; i++){
         underScores.push('_ ');
    }
        return underScores;
}
Document.addEventListener("keypress", function){
    console.log(myScript);
    var keycode = event.keyCode
    var keyWord = String.fromChardCode(keycode);
    if(choosenBook.indexOf(keyWord) > -1){
    
    rightWord.push(keyWord);
    if(choosenBook.indexOf(keyWord)<-1){
    wrongWord.push(keyword);
    underScore[choosenBook.indexOf(keyword)]= keyword;
    console.log(underScore);
   } 
    }
      };
 
//create an array of words
//choose words randomly
//create underscores based on length of words
//get users guess
//check if right
//if right add to right array
//if wrong add to wrong array