var threeItems = [1,2,3];
//create a function named 'last' that returns the last object from 'threeItems'
//alert the result of your function

var last = function(arr) {
	alert(arr.length);
	return(arr.length);
}

last(threeItems);

//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

dicedArray.splice(2, 0, 2, 3);
dicedArray.splice(6, 0, 6);
dicedArray.splice(9, 0, 9);

dicedArray;
//Loop through evenArray removing all values that aren't even 
//hint x % 2 --> checks for even numbers
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i = 0; i < evenArray.length; i++) {
	if(evenArray[i] % 2 !== 0) {
		evenArray.splice(i, 1);
		i--;
	}
	else { 
		console.log(evenArray[i]);
	} 
}



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};

var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var ifNum = function() {
    var flag = false;
    var randomNum = getRandomArbitrary();
    for(var i = 0; i < randomArray.length; i++) {
        if(randomNum === randomArray[i]) {  
          flag = true;            
        }
}
      alert(flag);
}

ifNum();

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second.push(1,2,3,4,5);

second.push(6,7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];