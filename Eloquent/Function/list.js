/**
 * LIST DATA STRUCTURE:
 * 1. write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3]
 * Vd: arrayToList([10, 20, 30])
 *   → {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
 *
 */
function arrayToList(arr){
    let list = null;
    for(let i = arr.length; i >= 0; i--){
        list = { value: arr[i], rest: list };
    }
    return list;
}
console.log(arrayToList([10, 20, 30]));

/**
 * Also write a listToArray function that produces an array from a list
 * {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
 *   → [10, 20, 30]
 */
function listToArray(obj){
    let arr = [];
    for(let i = obj; i ; i = i.rest){
        arr.push(i.value);
    }
    return arr;
    

}
var obj = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};
console.log(listToArray(obj));  

//ngay 1: 2000, ngay sau hon ngay truoc 1000, tong 30 ngay bn tien?
function sumMoney(){
    let increaseByDay = 2000;
    let sum = 2000;
    for(let day = 2; day <= 30; day++){
        increaseByDay = increaseByDay + 1000;
        sum = sum +  increaseByDay
    }
    return sum;
}
console.log(sumMoney());

/**
 * helper function prepend, which takes an element 
 * and a list and creates a new list that adds the element to the front of the input list
 * console.log(prepend(10, prepend(20, null)));
 *    → {value: 10, rest: {value: 20, rest: null}}
 */
function prepend(num, list){
    list = { value: num, rest: list};
    return list;
}
console.log(prepend(10, prepend(20, null)));

 /**
  * nth, which takes a list and a number 
  * and returns the element at the given position in the list 
  * (with zero referring to the first element) 
  * or undefined when there is no such element.
  * console.log(nth(arrayToList([10, 20, 30]), 1));
  *  → 20
  */
function nth(obj, key){
    let index = 0;
    for(let i = obj; i; i = i.rest){
        if(index == key){
            return i.value;
        }
        index++;
    }
    return undefined;
}
console.log(nth(arrayToList([10, 20, 30]), 4));