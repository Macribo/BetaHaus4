//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";
//var roomData = "aaaaa-bbb-z-y-x-123[abxyz]";

var roomData = roomData.split("[");
console.log("roomData after split()", roomData);
var checksum =  roomData[1].replace(/\]/,"");
console.log("checksum is given the value of: roomData[1].replace ]",checksum);

var secCode = roomData[0].split("-");
console.log("secCode after split(at -): ",secCode);
var sectorID = secCode.pop();//pop removes the last item from the array (which is the sectorID) and returns it. We store it in var sectorID.
console.log("secCode after pop()",secCode);
var securityCode = secCode.join(","); //renamed secCode in securityCode, for better understanding.
console.log("securityCode = value of secCode after join()",securityCode);
var securityCode = securityCode.replace(/[, ]+/g, "");
var securityCode = securityCode.split("");
console.log("securitycode after split" ,securityCode);
//
//

function findSecFrequency(SecurityCode){
var oChecksum = [];//empty object

securityCode.forEach(function (letter){//for each does the function on every item of the Array (securityCode
    if (oChecksum.hasOwnProperty(letter)){//checks if oChecksum has already the Property
        console.log('there is a property already so i will just add plus one');
        oChecksum[letter]++;

    }
    else{
        console.log('it doesnt have a property! I will have to create a new object');
        oChecksum[letter]  = 1;
    }
    });
    return oChecksum;
}
var oChecksum = findSecFrequency(securityCode);
console.log("here we are!!oChecksum", oChecksum);
/*
 * it returns something like this
{
    a: 2,
    c: 3,
}
*/
//for..in loop
console.log("*******oChecksum", oChecksum);

function sortByCount (foo){
    var aChecksum = Object.keys(oChecksum).map(function (key){//Object.keys(oChecksum) turns the object "oChecksum" into an array. Now you can use array methods like map! Inside the map function the input is each item in the array, in order. If you "return" from the map function, you will get a new array of the "returned" items.
        return{
            name: key,
            total: oChecksum[key]
        };
    });
    console.log("* * * * MAP FUNCTION RETURNS ",aChecksum, "* * * * /END");
    aChecksum.sort(function(a,b){
        return b.total - a.total;    
    });
    return aChecksum;

    }
var sortedObject = sortByCount(oChecksum);
console.log(sortedObject);
/*
function firstFiveLetters (foo){
    console.log("sortedObject");
    var sortedFive = sortedObject.slice(0,5);
        return sortedFive;
    }
var finalFive = firstFiveLetters(sortedObject);
/*console.log(finalFive);

function finalLetters(){
    var five = finalFive.map(function(singleItem){
        return singleItem.name;
    });
    return five;
}
var winningFive = finalLetters();
//console.log(winningFive);
var winFive = winningFive.join();
*/
//console.log("sorted object >>>>",sortedObject);

//console.log("winningFive",winFive);//next: compare result (winFive) with this line of codes checksum. If it is a match, store sector ID in an Array or Object to add them up in the end.

//function compareToChecksum(){}




var firstAlikeFrequency = [];
var secondAlikeFrequency = [];
var thirdAlikeFrequency = [];
var fourthAlikeFrequency = [];
var lastAlikeFrequency = [];
var whatsleftArray = [];







/*
 *
function sortForFrequency(foo){ 
    for (var letter  in oChecksum){
        console.log("letter",letter);
        console.log("oChecksum[letter]", oChecksum[letter]);
    }

    return {
      name: letter,
        frequency: oChecksum[letter] 
    };
  :  //oChecksum.sort(function(a, b){
      //      return b - a;
    //});

    //oChecksum.sort(function(a, b) {
          //    return a.total - b.total;
        //});

}
var result = sortForFrequency(oChecksum);
console.log("result",result);
/*
function comparison(key){//for each does the function on every item of the Array (securityCode
       console.log(key,sum[key]); 
            
        }

function sortByFrequency(sum){
    console.log("sum",sum);
    var mostFrequent = 0;
    console.log("abc");
    console.log("sum.length",sum.length);
    sum.forEach(function (key){
    console.log(key,sum[key]); 
});
    return mostFrequent;
}
var storeMostFrequent = sortByFrequency(oChecksum);
console.log("mostFrequent",storeMostFrequent);

*/
//test = sortByCount(oChecksum);
//console.log("test",test);//now all letters are sorted by frequency of count

//http://chrisjopa.com/2016/04/21/counting-word-frequencies-with-javascript/

//for ..in loops through the properties of an object

/*
var oChecksum = findSecFrequency(securityCode);
console.log("oChecksum", oChecksum);
test = sortByCount(oChecksum);

function sortByCount(oChecksum){
    var finalSecSort = Object.total(oChecksum);
    console.log("Object, keys..:",Object.total(oChecksum));
    for (var key in oChecksum){
        console.log("for");
        return{
            name: key,
                total: oChecksum[key]
        };
        //finalSecSor.sort(function(a,b){
        //  return b.total - a.total;
    }
    }






*/
//var check = sortByCount(oChecksum);
//
//console.log("return value",check);
/*
var firstAlikeFrequency = [];
var secondAlikeFrequency = [];
var thirdAlikeFrequency = [];
var fourthAlikeFrequency = [];
var fifthAlikeFrequency = [];
var frequencyArray = [];

function sortInFrequencyArrays(chosenArray){
    for(var i = 0; i< test.length-1; i++){
        if( test[i].total === test[i+1].total ){
            console.log("if = true: test[i]=",test[i].name);
            console.log("test[i+1]",test[i+1].name);
            chosenArray.push(test.splice(0,1));
            i--;// i is set back to 0. Otherwise p is the first item to be skipped, because i becomes 1.
        }

    else{
        console.log("else = true");
        console.log("test[i]", test[i].name);
        chosenArray.push(test.splice(0,1));
        break;
    }
}
}
sortInFrequencyArrays(firstAlikeFrequency);
sortInFrequencyArrays(secondAlikeFrequency);
sortInFrequencyArrays(thirdAlikeFrequency);
sortInFrequencyArrays(fourthAlikeFrequency);
sortInFrequencyArrays(fifthAlikeFrequency);
sortInFrequencyArrays(frequencyArray);
console.log("first",firstAlikeFrequency);
console.log("second",secondAlikeFrequency);
console.log("third",thirdAlikeFrequency);
console.log("fourth",fourthAlikeFrequency);
console.log("fifth",fifthAlikeFrequency);
console.log("rest",frequencyArray);
*/
//console.log("at the end, sortedObject", sortedObject);
var sebbene = sortedObject;
for (var i=0;i < sebbene.length; i++ ){
    if(sebbene[i].total === 1){
        lastAlikeFrequency.push(sebbene[i].name);
    }
}
console.log("XXXXXXXX lastAlikeFrequency",lastAlikeFrequency);



































