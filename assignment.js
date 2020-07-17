 //feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var DhakaToSylhetMile = feetToMile(800524.93438);
console.log(DhakaToSylhetMile);

var DhakaToKhulnaMile = feetToMile(885826.77165);
console.log(DhakaToKhulnaMile);

var DhakaToChittagongMile = feetToMile(813648.29396);
console.log(DhakaToChittagongMile);



//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood; 
}
 

//brickCalculator
function brickCalculator(floor){
    var feet = 1000;
    var step1;
    var step2;
    var step3;
        if(floor <= 10){
            var steps = feet * 15 * floor; 
            return step1;
        }
        else
        if(floor >= 11 && floor <= 20){ 
            var step2 = feet * 12 * floor;
            return step1 + step2;
        }
        else if(floor >= 21){
            var step3 = feet * 10 * floor; 
            return step1 + step2 + step3;
        }
     
}

var  result = brickCalculator(30);
console.log(result);

//tinyFriend
function tinyFriend(names){
    var tinyname = names [0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName < tinyName){
            tinyname = currentName
        }
    }
    return tinyname;
}