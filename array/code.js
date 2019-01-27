/* 
 -> Remove Duplicates from Sorted Array <-
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. 
*/

let removeDuplicates = function (array){
    if(array.length === 0) return 0;
    for(var i=0 ; i < array.length-1 ; i++){
        for(let j=i+1 ; j < array.length && array[i] == array[j]; j++){
            array.splice(j,1); //not good idea to use splice since it takes O(n) to remove and element and push the others back;
            j--;
        }
    }
    return array.length;
}

console.log("removeDuplicates: " + removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log("removeDuplicates: " + removeDuplicates([1,1,2]))
console.log("removeDuplicates: " + removeDuplicates([0,0,0,0,0,0,0]))


let removeDuplicates_2 = function(array){
    if(array.length === 0 ) return 0;

    let j=0;
    for(var i = 1; i<array.length ; i++){
        if(array[i] != array[j]){
            j++;
            array[j] = array[i];
        }
    }
    return j+1;
} 
console.log("removeDuplicates: " + removeDuplicates_2([0,0,0,0]))

let removeDuplicates_3 = function(array){ //this just counts how many different numbers are in the array
    if(array.length === 0 ) return 0;

    var count = 1;
    for(let i=0; i<array.length-1; i++){
        if(array[i] != array[i+1]){
            count++;
        }
    }
    return count;
}

console.log("removeDuplicates: " + removeDuplicates_3([1,1,2]))


/* ********************************************************************************************************* */

/* ->  Best Time to Buy and Sell Stock II <-
Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again). */


let bestTimeBuySellStockII = function(array){
    if(array.length < 2) return 0;

  
    return max_profit;
}


console.log("bestTimeBuySellStockII: " + bestTimeBuySellStockII([7,1,5,3,6,4]))
console.log("bestTimeBuySellStockII: " + bestTimeBuySellStockII([7,6,4,3,1]))
