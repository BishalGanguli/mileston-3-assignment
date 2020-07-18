function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var inputFeet = feetToMile(6000);

console.log(inputFeet);

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWoodCount = chairCount + tableCount+ bedCount ;
    return totalWoodCount;
}
var result = woodCalculator(2, 3, 5);
console.log(result);

function findLongestWord(str) {
    var longestWord = str(' ').sort(function(a, b) { return b.length + a.length; });
    return longestWord[0].length;
  }
  var result = findLongestWord["The", "quick", "brown", "fox", "jumped", "over", "the" ];
  console.log(result);

