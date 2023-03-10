var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

//test array
/*var finances = [
    ['Jan-2010', 100.035],
    ['Feb-2010', 200.007],
    ['Mar-2010', 300.034]
];*/

//write JavaScript code that analyzes the records to calculate each of the following:

//Start my code
console.log("Financial Analysis\n-----------------------------------");

//The total number of months included in the dataset.

//Display the total number of months
console.log("Total months: " + finances.length);

//The net total amount of Profit/Losses over the entire period.

//testing array syntax
/*console.log("test 00 " + (finances[0][0]));
console.log("test 01 " + (finances[0][1]));
console.log("test 10 " + (finances[1][0]));
console.log("test 11 " + (finances[1][1]));
console.log("test 20 " + (finances[2][0]));
console.log("test 21 " + (finances[2][1]));*/

//set netTotal variable
var netTotal = 0;

//For loop to loop through finances array
for (i=0; i < finances.length; i++ ) {
netTotal = netTotal + (finances[i][1])
}

//Display the net total amount of profit/losses
console.log("Total: ??" + netTotal);

//The average of the changes in Profit/Losses over the entire period.
//You will need to track what the total change in profits is from month to month and then find the average. (Total/Number of months)

//calculate average netTotal/months
var changeAvg = (netTotal/finances.length);

//Display the average
/*console.log ("Average Change: " + changeAvg);*/

//round average to 2 decimal places
/*Math.round((num + Number.EPSILON) * 100) / 100*/

//Display the average rounded to 2 decimal places
console.log ("Average Change: ??" + Math.round((changeAvg + Number.EPSILON) * 100) / 100);

// https://www.w3schools.com/js/js_array_sort.asp
//Sort array numerically from lowest to highest
//numeric sort example points.sort(function(a, b){return a - b});

//Sort array numerically from highest to lowest
//points.sort(function(a, b){return b - a});

//sorting an array of arrays
//https://www.codingem.com/javascript-sort-an-array-of-arrays/
//sorting array of arrays example data.sort((a, b) => b[1] - a[1])
//The sort() function applies a comparison function to the array that takes two arguments a and b. (The arrow syntax lets you omit the function and return keywords and the curly braces.)
//This time a and b are not numbers, but arrays.
//To sort the array of arrays, you need to specify based on which element you want to sort them.
//Here we compare the arrays by their second elements.
//Then the sort() function loops through the array of arrays and sorts it based on the magnitude of the second elements.

//Testing
/* var fSortTest = finances.sort((a, b) => b[1] - a[1])
console.log("sorttest " + fSortTest[0]);*/

//Sort finances array by highest to lowest
var financesSorted = (finances.sort ((a, b) => b[1]-a[1]));

//The greatest increase in profits (date and amount) over the entire period.

//Display first position [0][0]/[0][1]
console.log("Greatest Increase in Profits: " + (financesSorted[0][0]) + " (??" + (financesSorted[0][1]) + ")");

//The greatest decrease in losses (date and amount) over the entire period.

//Display last position [length of finance array -1][0]/[length of finance array -1][1]
console.log("Greatest Decrease in Profits: " + (financesSorted[finances.length -1][0]) + " (??" + (financesSorted[finances.length -1][1]) + ")");