//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";


var roomData = roomData.split("[");

var checksum =  roomData[1].replace(/\]/,"");
console.log(checksum);


//remember to use ssh when copying path to git

var secCode = roomData[0].replace(/\-+/g,"");

var secCode = secCode.replace(/\d+/g,"");

// puzzle elements:  security-code , sector-id , checksum ,  verified-checksum


// use split the security-code and arrange in alphabetical order
sortCode = secCode.split("");
secCode = sortCode.sort();
console.log(secCode);



// count 'like' elements in the array. 

            var k = [];
for (i = 0; i<= secCode.length-1; i++){
    var current= secCode[i];
    console.log(current);  
 
}
// find the 5 most frequent elements to verified-checksum (adding elements in alphabetical order when they have the same frequency)If verified checksup === checksum, add this element's sector-id to sectorIdTotal.
//
