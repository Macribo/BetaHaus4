
//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";

var roomData = roomData.split("[");
console.log("roomData after split()", roomData);

var checksum =  roomData[1].replace(/\]/,"");
console.log("checksum is given the value of: roomData[1].replace ]",checksum);

var secCode = roomData[0].split("-");
console.log("secCode after split(at -): ",secCode);

var sectorID = secCode.pop();//remove last item, store it in var sectorID.

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
    if (oChecksum.hasOwnProperty(letter)){//check if oChecksum already has (letter)
        oChecksum[letter]++; 

    }
    else{
        oChecksum[letter]  = 1;
    }
    });
    return oChecksum;
}
var oChecksum = findSecFrequency(securityCode);
console.log("*******oChecksum", oChecksum);

function sortByCount (foo){
    var aChecksum = Object.keys(oChecksum).map(function (key){//Object.keys(oChecksum) turns the object "oChecksum" into an array. Now you can use array methods like map! Inside the map function the input is each item in the array, in order. If you "return" from the map function, you will get a new array of the "returned" items.
        return{
            name: key,
            total: oChecksum[key]
        };
    });
    aChecksum.sort(function(a,b){
        return b.total - a.total;    
    });
    return aChecksum;

    }
var sortedObject = sortByCount(oChecksum);
console.log(sortedObject);

var firstAlikeFrequency = [];
var secondAlikeFrequency = [];
var thirdAlikeFrequency = [];
var fourthAlikeFrequency = [];
var lastAlikeFrequency = [];
var whatsleftArray = [];







var sebbene = sortedObject;
for (var i=0;i < sebbene.length; i++ ){
    if(sebbene[i].total === 1){
        lastAlikeFrequency.push(sebbene[i].name);
    }

if(sebbene[i].total === 2){
        fourthAlikeFrequency.push(sebbene[i].name);
    }

if(sebbene[i].total === 3){
        thirdAlikeFrequency.push(sebbene[i].name);
    }

if(sebbene[i].total === 4){
        secondAlikeFrequency.push(sebbene[i].name);
    }

if(sebbene[i].total === 5){
        firstAlikeFrequency.push(sebbene[i].name);
    }
}

lastAlikeFrequency.sort();
fourthAlikeFrequency.sort();
thirdAlikeFrequency.sort();
secondAlikeFrequency.sort();
firstAlikeFrequency.sort();
console.log("lastAlikeFrequency",lastAlikeFrequency);
console.log("fourthAlikeFrequency",fourthAlikeFrequency);
console.log("thirdAlikeFrequency",thirdAlikeFrequency);
console.log("secondAlikeFrequency",secondAlikeFrequency);
console.log("firstAlikeFrequency",firstAlikeFrequency);













