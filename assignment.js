function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var inputFeet = feetToMile(6000);

console.log("mile", inputFeet);

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWoodCount = chairCount + tableCount+ bedCount ;
    return totalWoodCount;
}
var result = woodCalculator(2, 3, 5);
console.log("woodCount", result);
function tinyFriend(name){
    var smallest = name[0];
    for(var i =0; i < name.length; i++){
        var currentname = name[i];
        if(currentname < smallest){
            smallest = currentname;
        }
    }
    return smallest;
}
 var smallest = tinyFriend(['Sabana', 'Polash', 'John']);
 console.log(smallest);

