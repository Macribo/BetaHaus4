var securityCode = ['a','b','a','c','a','a'];

function findSecFrequecy(sCode){
    var oChecksum = [];
    securityCode.forEach(function (letter){
        if(oChecksum.hasOwnProperty(letter)){
    console.log("has letter ",letter," adding +1 to letter ", letter, " value")    
;   oChecksum[letter]++; 
    }
        
        else{
        console.log("new letter found. Adding new key(letter) value(1) pair to oChecksum");
      oChecksum[letter] = 1;  }
    });
    
return oChecksum;
}

var kung = findSecFrequecy(securityCode);
console.log(kung);
