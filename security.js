//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";


var roomData = roomData.split("[");

var checksum =  roomData[1].replace(/\]/,"");
console.log(checksum);


//remember to use ssh when copying path to git

var secCode = roomData[0].replace(/\-+/g,"");

var secCode = secCode.replace(/\d+/g,"");
sortCode = secCode.split("");
sortCode = sortCode.sort();
console.log(secCode);


// puzzle elements:  security-code , sector-id , checksum ,  verified-checksum


// use split the security-code and arrange in alphabetical order
// counting 'like' elements in the array.  find the 5 most frequent elements to verified-checksum (adding elements in alphabetical order when they have the same frequency).  if verified checksup === checksum, add this element's sector-id to sectorIdTotal.
