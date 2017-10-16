
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
//document.querySelector('html').style.backgroundColor = 'red';
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
  //return array.random();
}

//2. RAW TEXT STRINGS

var storyText ="It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

var insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"]

var insertY=["the soup kitchen",
"Disneyland",
"the White House"]

var insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);
randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory=newStory.replace(':insertX:',xItem);
  newStory=newStory.replace(':insertX:',xItem);
  newStory=newStory.replace(':insertY:',yItem);
  newStory=newStory.replace(':insertZ:',zItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory=newStory.replace('Bob','name');
  }



  if(document.getElementById("uk").checked) {
    //var weight = Math.round(300);
    //var temperature =  Math.round(94);
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
