// this is for the coding Challenge 6 in zero to mastery course
// Question 1: Clean the room function.
// Given an array [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example: answer = [[1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
// Bonus: Make it so it organizes strings differently from number types 
// i.e: [[1,1,1],2,3,['a','b','c']] 

const array1 = [1,2,3,3,3,7,9,5,4,4,4,1,1,1,34,23,55,44,11,3,4,8,'a','c','b','cat','e','dog'];
const array2 = [1,1,1,1,2,2,2,2,3,'a','b'];
const array3 = [1,2,3,3,3,9,8,7,'x',6,3,3,5,'z','y'];
const array4 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'a','dog','b','cat'];
const array5 = [1,1,1,1,2,2,2,2,3,4,5];
let alphaGrp = /[^a-zA-Z]/g;
let numGrp = /[^0-9]/g;

function sortNumAlpha(arr) {
    let newArray = [];              //final results will be put into this array
    let alphaArray = [];            //only alphanumeric characters or words goes in this array
    let counter = 0;                //counter to use for repeating items
    let newGrp = new Array();       //an array for the recurring numeric groups
    let tempArray = new Array();    //temporary array holder (sorted)
    
    tempArray = arr.sort(compSortByNumAlpha);
    tempArray.forEach((item, i) => { 
        if(typeof item !== 'string') {
            if(item === tempArray[i+1]) {                                       //compares if current item is strictly equal
                counter++;                                                      //to the next item
            } else if(item !== tempArray[i+1] && counter > 1) {                 //when no repeating items found,
                newGrp = tempArray.slice(i-counter, i+1);                       //group all repeating item into an array
                newArray.push(newGrp);                                          //push newGrp array to newArray
                counter = 0;                                                    //reset counter if no duplicates found
                } else {
                    newArray.push(item);                                        //push non-repeating to the new Array
                    newGrp = [];                                                //reset newGrp array for new group
                }
        } else {
            alphaArray.push(item);                                              //push all found alphabets into separate array
        }
    });
    if(alphaArray.length !== 0) {
        newArray.push(alphaArray);      //push alphabet array towards the end of the new Array if not empty 
    }
    return newArray;
}

function compSortByNumAlpha(a, b) {
    let AInt = parseInt(a, 10);
    let BInt = parseInt(b, 10);
    
    if(isNaN(AInt) && isNaN(BInt)) {
        let aAlpha = a.replace(alphaGrp, '');
        let bAlpha = b.replace(alphaGrp, '');
        
        if(aAlpha === bAlpha) {
            let aNum = parseInt(a.replace(numGrp, ''), 10);
            let bNum = parseInt(b.replace(numGrp, ''), 10);
        } else {
            return aAlpha > bAlpha ? 1 : -1;
        }
    } else if(isNaN(AInt)) {
        return 1;
    } else if(isNaN(BInt)) {
        return -1;
    } else {
        return AInt > BInt ? 1 : -1;
    }
}

console.log(sortNumAlpha(array1));
// console.log(sortNumAlpha(array2));
// console.log(sortNumAlpha(array3));
// console.log(sortNumAlpha(array4));
// console.log(sortNumAlpha(array5));
