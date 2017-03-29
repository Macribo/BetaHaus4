//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydfxpc-rclop-qwzhpc-qtylyntyr-769[oshgk]";


var roomData = roomData.split("[");

var checksum =  roomData[1].replace(/\]/,"");
console.log(checksum);


//remember to use ssh when copying path to git

var secCode = roomData[0].replace(/\-+/g,"");

var secCode = secCode.replace(/\d+/g,"");
console.log(secCode);

