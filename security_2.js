//jshint esversion:6
//var roomData= require("./roomData");
var data = require("./codes");
var validSectorIDs=[];
var total = 0;
var codes = data.split("\n");
var totalValids = 0;

function testIt(checksum,finalArray){
        if (checksum===finalArray){
            totalValids++;
            validSectorIDs.push(sectorID);
        }
        else{
        }
    }


   function sortForFrequency(frequencyArray,count){
        var sorted = sortedObject;
        for (var i=0;i < sorted.length; i++ ){
            if(sorted[i].total === count){
                frequencyArray.push(sorted[i].name);
            }
        }
      return frequencyArray.sort(); 
    }
 


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







function findSecFrequency(SecurityCode){
    var oChecksum = [];//empty object

    securityCode.forEach(function (letter){//for each does the function on every item of the Array (securityCode
        if (oChecksum.hasOwnProperty(letter)){//checks if oChecksum has already the Property
            oChecksum[letter]++;

        }
        else{
            oChecksum[letter]  = 1;
        }
        });
        return oChecksum;
    }
for(var i = 0; i<codes.length; i++){
    total++;
    //---
    //var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";
    var roomData = codes[i];

    var roomData = roomData.split("[");
    var checksum =  roomData[1].replace(/\]/,"");

    var secCode = roomData[0].split("-");
    var sectorID = secCode.pop();//pop removes the last item from the array (which is the sectorID) and returns it. We store it in var sectorID.
    var securityCode = secCode.join(","); //renamed secCode in securityCode, for better understanding.
    var securityCode = securityCode.replace(/[, ]+/g, "");
    var securityCode = securityCode.split("");

    
    var oChecksum = findSecFrequency(securityCode);

    var sortedObject = sortByCount(oChecksum);
   


    var frequencyOne = [];
    var frequencyTwo = [];
    var frequencyThree = [];
    var frequencyFour = [];
    var frequencyFive = [];
    var frequencySix = [];
    var frequencySeven = [];
    var frequencyEight = [];
    var frequencyNine = [];
    var frequencyTen = [];
    var whatsleftArray = [];

   sortForFrequency(frequencyOne,1);
  sortForFrequency(frequencyTwo,2);
    sortForFrequency(frequencyThree,3);
    sortForFrequency(frequencyFour,4);
    sortForFrequency(frequencyFive,5);
    sortForFrequency(frequencySix,6);
    sortForFrequency(frequencySeven,7);

    sortForFrequency(frequencyEight,8);
    sortForFrequency(frequencyNine,9);
    sortForFrequency(frequencyTen,10);
    var finalArray = frequencyTen.concat(frequencyTen,frequencyEight,frequencySeven,frequencySix,frequencyFive,frequencyFour,frequencyThree,frequencyTwo,frequencyOne);
    finalArray= finalArray.splice(0,5);
    finalArray= finalArray.join();
    finalArray = finalArray.replace(/[,]+/g, "");


    
    testIt(checksum,finalArray);

}
var ans = 0;
    console.log(validSectorIDs);
    for(var i = 0; i< validSectorIDs.length; i++){
        var b = +validSectorIDs[i];
        ans += b;

    }
console.log(ans);
console.log(total);
console.log(totalValids);













