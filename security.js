//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";
//var roomData = "aaaaa-bbb-z-y-x-123[abxyz]";

var roomData = roomData.split("[");
//console.log("roomData after split()", roomData);
var checksum =  roomData[1].replace(/\]/,"");
//console.log("checksum: ",checksum);

var secCode = roomData[0].split("-");
console.log("secCode after split(at -): ",secCode);
var sectorID = secCode.pop();//pop removes the last item from the array (which is the sectorID) and returns it. We store it in var sectorID.
var securityCode = secCode.join(","); //renamed secCode in securityCode, for better understanding.
var securityCode = securityCode.replace(/[, ]+/g, "");
var securityCode = securityCode.split("");
//console.log("securitycode after split" ,securityCode);
//
//

function findSecFrequency(SecurityCode){
var oChecksum = {};

securityCode.forEach(function (key){
    if (oChecksum.hasOwnProperty(key)){
        oChecksum[key]++;
    
    }
    else{

    oChecksum[key]  = 1;
    }
});
return oChecksum;

}



var test = findSecFrequency(securityCode);




function sortByCount (oChecksum){
    var finalSecSort = Object.keys(oChecksum).map(function (key){
        return{
            name: key,
            total: oChecksum[key]
        };
    });

    finalSecSort.sort(function(a,b){
        return b.total - a.total;    
    });
    return finalSecSort;

    }
var oChecksum = findSecFrequency(securityCode);
test = sortByCount(oChecksum);
console.log("test",test);//now all letters are sorted by frequency of count
//http://chrisjopa.com/2016/04/21/counting-word-frequencies-with-javascript/


var firstAlikeFrequency = [];
var secondAlikeFrequency = [];
var thirdAlikeFrequency = [];
var fourthAlikeFrequency = [];
var fifthAlikeFrequency = [];
var frequencyArray = [];
//frequencyArray.push(test[0].name);
//console.log(frequencyArray);:62
//
/*
function sortInFrequencyArrays(chosenArray){
    for(var i = 0; i< test.length+1; i++){ 
        console.log("for",i);
        if( test[i].total === test[i+1].total){
            chosenArray.push(test.splice(0,1));
        //}
          //  else if (test[i].total === test[i+1].total ){
           // chosenArray.push(test.splice(0,1));
        } 
        else{ 
            chosenArray.push(test.splice(0,1));
            break;
}
}
}
*/
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



