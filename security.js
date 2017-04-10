//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";
//var roomData = "aaaaa-bbb-z-y-x-123[abxyz]";

var roomData = roomData.split("[");
//console.log("roomData after split()", roomData);
var checksum =  roomData[1].replace(/\]/,"");
//console.log("checksum: ",checksum);

var secCode = roomData[0].split("-");
//console.log("secCode after split(at -): ",secCode);
var sectorID = secCode.pop();//pop removes the last item from the array (which is the sectorID) and returns it. We store it in var sectorID.
var securityCode = secCode.join(","); //renamed secCode in securityCode, for better understanding.
var securityCode = securityCode.replace(/[, ]+/g, "");
var securityCode = securityCode.split("");
//console.log(securityCode);
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
console.log(oChecksum);
return oChecksum;

}

findSecFrequency(securityCode);

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
console.log(finalSecSort);
return finalSecSort;

    }
var oChecksum = findSecFrequency(securityCode);
sortByCount(oChecksum);

//http://chrisjopa.com/2016/04/21/counting-word-frequencies-with-javascript/
