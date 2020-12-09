//1. find a min number
    function findMin(num1, num2){
        if(num1 > num2)
            return num2;
        else if(num1 == num2)
            return "Same numbers";
    }
    var result = findMin(0, 0);
    console.log(`min : ${result}`);

/*2. recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
    + Zero is even.
    + One is odd.
    + For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/
    function isEven(num){
        if(num == 0)
            return true;
        else if(num == 1)
            return false;
        else if(num < 0)
            return isEven(-num);
        else
            return isEven(num - 2);
    }
    console.log(isEven(13));
    console.log(isEven(24));
    console.log(isEven(-24));

//3. bean countin'
/*
Write a function countBs that takes a string as its only argument 
and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
Ex:
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/
    function countBs(str){
        let countB = 0;
        for(let i = 0; i < str.length; i++){
            if(str.charAt(i) == 'B')
                countB++;
        }
        return countB;
    }
    console.log(countBs("BBCbbBB"));

    function countChar(str, character){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str.charAt(i) == character)
                count++;
        }
        return count;
    }
    console.log(countChar("kakkerlak", "k"));

    function countQ(str){
        return countChar(str, 'Q');
    }