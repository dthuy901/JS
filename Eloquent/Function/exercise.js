/**
 * Ex1: 
 * 'flatten' an array of arrays into a single array that has all elements of the orginal arrays
 * [[1, 2, 3], [4, 5], [6]];
 *     → [1, 2, 3, 4, 5, 6]
 * 
 */

//iteration
function flattening(arrs){
    let flatten = [];
    for(let arr of arrs){
        for(let item of arr){
            flatten.push(item);
        }
    }
    return flatten;
}
console.log(flattening([[1, 2, 3], [4, 5], [6]]));

//reduce + concat
function flattening2(arrs){ 
    return arrs.reduce( (flatten, item) => {
        return flatten.concat(item);
    }, []);
    
}
console.log(flattening2([0, [1, 2, 3], [4, 5], [6]]));

//for of
function flattening3(arrs){ 
    let flatten = [];
    for(let arr of arrs){
        flatten = flatten.concat(arr);
    }
    return flatten;
    
}
console.log(flattening3([[1, 2, 3], [4, 5], [6]]));

//forEach
function flattening4(arrs){ 
    let flatten = [];
    arrs.forEach( item => {
        flatten = flatten.concat(item);
    });
    return flatten;
    
}
console.log(flattening4([[1, 2, 3], [4, 5], [6]]));

/**
 * Ex 2: Your own loop
 * Write a higher-order function loop that provides something like a for loop statement. 
 * It takes a value, a test function, an update function, and a body function. 
 * Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
 * Then it calls the body function, giving it the current value. 
 * Finally, it calls the update function to create a new value and starts from the beginning.
 * 
 * loop(3, n => n > 0, n => n - 1, console.log);
 * → 3
 * → 2
 * → 1
 */
function loop(value, test, update, bodyFunct){
    let current = value;
    while(test(current)){
        bodyFunct(current);
        current = update(current);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//other way:
function loop2(value, test, update, bodyFunct){
    for(let current = value; test(current); current = update(current)){
        bodyFunct(current);
    }
}
loop2(7, n => n > 0, n => n - 1, console.log);


/**
 * Implement every as a function that takes an array and a predicate function as parameters. 
 * Write two versions, one using a loop and one using the some method.

 * function every(array, test) {
 *      // Your code here.
 * }

 * console.log(every([1, 3, 5], n => n < 10));
 * // → true
 * console.log(every([2, 4, 16], n => n < 10));
 * // → false
 * console.log(every([], n => n < 10));
 * // → true
 * 
 */

//loop version: 
function every(array, test){
    for(let item of array){
        let check = test(item);
        if(!check)
            return false;
    }
    return true;
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

//some method:
function every2(array, test){
    //return true if one of array items doesnt match the condition
    let result = array.some( item => {
        return !test(item);
    });

    if(result)
        return false;
    return true;
}
console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));

/**
 * Dominant writing direction
 * Write a function that computes the dominant writing direction in a string of text. 
 * Remember that each script object has a direction property that can be "ltr" (left to right), 
 * "rtl" (right to left), or "ttb" (top to bottom).
 */
