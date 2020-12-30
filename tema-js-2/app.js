function getDigits(str) {

    const arr = [];

    for(let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))) {
            arr.push(str[i]);
        }
    }

    return arr; 
}

function isLetter(char) {
    return char.toLowerCase() != char.toUpperCase();
}

function getLetters(str) {
    const arr = [];

    for(let i = 0; i < str.length; i++) {
        if(isLetter(str[i])) {
            arr.push(str[i]);
        }
    }

    return arr;
}

function getFirst5Letters(str) {
    const arr = [];
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(isLetter(str[i]) && counter < 5) {
            arr.push(str[i]);
            counter++;
        }
    }

    return arr;
}

function concatenate(arr) {
    let str = '';

    arr.forEach(item => str += item);

    return str;
}

function getAllDigits(arr) {
    let myArr = [];

    for(let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        for(let j = 0; j < innerArr.length; j++) {
            if(!isNaN(Number(innerArr[j]))) {
                myArr.push(innerArr[j])
            }
        } 
    }

    return myArr;
}

function invertAllStrings(arr) {
    let myArr = [];

    for(let i = 0; i < arr.length; i++) {
        let innerArr = arr[i].split('').reverse().join('');
        myArr.push(innerArr);
    }

    return myArr;
}

function factorial(num) {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function cmmdc(first, second) {
    const divisorsFirst = divizori(first);
    const divisorsSecond = divizori(second);

    const common = [];

    for(let i = 0; i < divisorsFirst.length; i++) {
        for(let j = 0; j < divisorsSecond.length; j++) {
            if(divisorsFirst[i] === divisorsSecond[j]) {
                common.push(divisorsFirst[i]);
            }
        }
    }

    return Math.max(...common);
}

function divizori(num) {
    let arr = [];
    let half = num / 2;
    for(let i = 2; i <= half; i++) {
        if(num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

function palindrom(param) {
    let value = param;

    if(typeof param !== 'string') {
        value = String(param);
    }

    const reversedValue = value.split('').reverse().join('');

    return param == reversedValue;
} 

function sort(arr) {
    const evenArr = arr.filter(num => num % 2 === 0);
    return evenArr.sort((a, b) => a - b);
}

function sortAscDesc(arr) {
    let evenArr = [];
    let oddArr = [];

    arr.forEach(num => {
        if(num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num);
        }
    });

    return [...evenArr.sort((a, b) => a - b), ...oddArr.sort((a, b) => b - a)]
}

function binarySearch(arr, num) {

    if (arr.length === 1 && arr[0] != num) {
        return false;
    }

    let middle = Math.floor(arr.length / 2);

    if(arr[middle] === num) {
        return true;
    }

    if(arr[middle] > num) {
        return binarySearch(arr.slice(0, middle), num);
    }

    if(arr[middle] < num) {
        return binarySearch(arr.slice(middle), num); 
    }

}

function countBinarySearch(arr, num, counter = 0) {

    if (arr.length === 1 && arr[0] != num) {
        return counter;
    }

    let middle = Math.floor(arr.length / 2);

    if(arr[middle] === num) {
        return counter;
    }

    if(arr[middle] > num) {
        return countBinarySearch(arr.slice(0, middle), num, counter + 1);
    }

    if(arr[middle] < num) {
        return countBinarySearch(arr.slice(middle), num, counter + 1); 
    }
}

// console.log(getFirst5Letters('kj77-=bjb123jhkjjh7ghgj132knknjnk'));
// console.log(concatenate(['kj77-=bjb123jhkjjh7ghgj132knknjnk', 'AAAAAA', 'CCCCCC']));
// console.log(invertAllStrings([
//     'asafqfwew34', 'dgtgbfds4',
//     'asafqfw122ew34', 'dgt99gbfds4',
//     'asafqfwew', 'dgtgb0fds'
// ]));
// console.log(factorial(5));
// console.log(divizori(64));
// console.log(checkIfPalindrom(32123));
// console.log(sort([1,45,2,5656,24,3,888]));
// console.log(sortAscDesc([1,2,3,4,5,6,7,8,9]));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6));
// console.log(countBinarySearch([1,2,3,4,5,6,7,8,9], 10));
// console.log(divizori(64));
// console.log(divizori(160));
// console.log(cmmdc(64, 160));
