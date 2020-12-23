/**
 * The == operator compares objects by identity. 
 * But sometimes you’d prefer to compare the values of their actual properties.
 * Write a function deepEqual that takes two values
 * and returns true only if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with a recursive call to deepEqual.
 * 
 * To find out whether values should be compared directly (use the === operator for that)
 * or have their properties compared, you can use the typeof operator. 
 * If it produces "object" for both values, you should do a deep comparison.
 * But you have to take one silly exception into account: 
 * because of a historical accident, typeof null also produces "object".
 * The Object.keys function will be useful when you need to go over the properties of objects to compare them.
 * 
 * let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    → true
 *
 * console.log(deepEqual(obj, {here: 1, object: 2}));
    → false
 *
 */
function deepComparison(a, b){
    //number, string
    if( a === b){
        return true;
    }else if(typeof a == 'object' && a != null && typeof b == 'object' && b != null){   //object, array
        let aKeys = Object.keys(a);
        let bKeys = Object.keys(b);
        if(aKeys.length == bKeys.length){
            for(let key of aKeys){
                /* k bằng nhau nếu 1 trong các mệnh đề sau đúng: 
                * key trong a k thuộc bKeys : 
                * index của key ở 2 mảng khác nhau
                * giá trị khi obj truy cập key: a[key] != b[key] 
                *
                * */
                if(!bKeys.includes(key) || aKeys.indexOf(key) != bKeys.indexOf(key) || !deepComparison(a[key], b[key])){
                    return false;
                }
            }
            return true;
        }else
            return false;
    }else
        return false;
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, {object: 2, here: {is: "an"}}));
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));

//cach 2:
function deepComparison2(a, b){
    //a, b: number, string
    if(a === b)
        return true;
    //a, b: array, object
    if(typeof a == 'object' && a != null && typeof b == 'object' && b != null){
        //array of each object's properties
        let keysA = Object.keys(a);
        let keysB = Object.keys(b);
        // kiem tra so luong property cua 2 object 
        if(keysA.length != keysB.length)
            return false;
        // kiem tra property cua 2 object co tuong ung bang nhau khong?
        for(let key of keysA){
            if(!keysB.includes(key) || keysA.indexOf(key) != keysB.indexOf(key) || !deepComparison2(a[key], b[key])){
                return false;
            }
        }
        return true;
    }
    return false;
}
console.log(deepComparison2(obj, {object: 2, here: {is: "an"}}));
console.log(deepComparison2(obj, {here: {is: "an"}, object: 2}));
console.log(deepComparison2(1, {here: {is: "an"}, object: 2}));