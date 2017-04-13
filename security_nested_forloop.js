//jshint esversion:6
//var roomData= require("./roomData");

var roomData = "nzydoofxossspc-rclop-qwzhpc-qtylyntyr-769[oshgk]";
//var roomData = "aaaaa-bbb-z-y-x-123[abxyz]";

var roomData = roomData.split("[");
console.log("roomData after split()", roomData);
var checksum =  roomData[1].replace(/\]/,"");
console.log("checksum: ",checksum);

var secCode = roomData[0].split("-");
console.log("secCode after split(at -): ",secCode);
var sectorID = secCode.pop();//pop removes the last item from the array (which is the sectorID) and returns it. We store it in var sectorID.
console.log("sectorID after pop()",sectorID);
console.log("secCode after pop()",secCode);
var securityCode = secCode.join(","); //renamed secCode in securityCode, for better understanding.
console.log("secCode after join(): ",securityCode);
var securityCode = securityCode.replace(/[, ]+/g, "");
console.log("securityCode after replace(","): ",securityCode);

//var secCode = roomData[0].replace(/\-+/g,"");
//Trying to use first split(at numbers), and then pop(), to move the last item to a new array. So we keep the ID for later.
//var secCode = secCode.replace(/\d+/g,"");
var sortCode = securityCode.split("");
securityCode = sortCode.sort();
console.log("sortCode: ",sortCode);
var checksum = checksum.split("");
console.log("checksum after split()",checksum);

function arrayCompare(){
    var codeToCheck = [];
    var count = 0;
    for (var i = 0; i < securityCode.length; i++){
        //console.log ("arraySecCode in for loop",arraySecCode[i]);
        for(var j = 0; j < checksum.length; j++ ){
            if(securityCode[i] === checksum[j]){
                count++;
                console.log("arraySeode[i], count", securityCode[i]+ ":"+ count);
                codeToCheck.push(securityCode[i]);
            }
        }
    }
    console.log(codeToCheck);
}
arrayCompare();
// puzzle elements:  security-code , sector-id , checksum ,  verified-checksum



// use split the security-code and arrange in alphabetical order
// counting 'like' elements in the array.  find the 5 most frequent elements to verified-checksum (adding elements in alphabetical order when they have the same frequency).  if verified checksup === checksum, add this element's sector-id to sectorIdTotal.