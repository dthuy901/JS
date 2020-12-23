/**
 * 
 * viet 2 hàm reserve array: 
 * reverseArray and reverseArrayInPlace
 * reverseArray: nhận arr như 1 argument và tạo ra 1 array mới với inverse sort
 * reverseArrayInPlace: modify arr gốc để có đc inverse sort
 * [1, 2, 3] ==> [3, 2, 1]
 */
function reverseArray(arr){
    let newArr = [];
    let times = arr.length;
    //pop() se lam thay doi arr goc => trong vong lap for neu dat dieu kien
    // for i = 0; i < arr.lenght; i++ ==> arr.length se thay doi lien tuc: note
    for(let i = 0; i < times; i++){
        newArr.push(arr.pop());
    }
    return newArr;
}
console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(arr){
    let lengthArr = arr.length;
    for(let i = 0; i < Math.floor(lengthArr / 2 ); i++){
        let temp;
        temp = arr[i];
        arr[i] = arr[lengthArr - 1 - i];
        arr[lengthArr - 1 - i] = temp;
    }
    return arr;

}
console.log(reverseArrayInPlace([1, 3, 5, 7]));