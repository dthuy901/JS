/**
*    range(start, end, step)
*    range(1, 5, 2); --> [1, 3, 5];
*    range(5, 2, -1); ---> [5, 4, 3, 2]
**/

// cồng kềnh version
function range(start, end, step){
    let nums = [];
    let startNum = start;
    let afterStep = start;

    if(start < end){
        for(let i = start; i < end; i++){
            afterStep = afterStep + step;
            if(afterStep <= end){
                nums.push(afterStep);
            }
        }
        

    }else{
        for(let i = start; i > end; i--){
            afterStep = afterStep + step;
            if(afterStep >= end){
                nums.push(afterStep);
            }
        }
    }
    nums.unshift(startNum);
    return nums;
    
}
console.log(range(1, 5, 2));
console.log(range(5, 2, -1));

//best approach
function rangeStep(start, end, step){
    let arr = [];
    if(start < end){
        for(let i = start; i <= end; i += step)
            arr.push(i);
        
    }else{
        for(let i = start; i >= end; i += step)
            arr.push(i);
    }
    return arr;
} 
console.log(rangeStep(1, 5, 2));
console.log(rangeStep(5, 2, -1));