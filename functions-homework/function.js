-function equals(x, y) {
    return x === y;
}

function compare(x, y) {
    if (x < y) {
        return -1;
    } else if (x === y) {
        return 0;
    } else if (x > y) {
        return 1;
    }
}

function max(x, y) {
    let firstVal = checkIfString(x);
    let secondVal = checkIfString(y);

    const maximum = Math.max(firstVal, secondVal);

    return maximum === secondVal ? y : x;
}

function checkIfString(num) {
    if (typeof num === 'string') {
        return num.charCodeAt()
    } else {
        return num
    }
}

function min(x, y) {
    let firstVal = checkIfString(x);
    let secondVal = checkIfString(y);

    const minimum = Math.min(firstVal, secondVal);

    return minimum === secondVal ? y : x;
}

function checkIfString(num) {
    if (typeof num === 'string') {
        return num.charCodeAt()
    } else {
        return num
    }
}


function suma(n) {
    if (n < 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    
    return sum;
}



function prim(n) {
    
    for(var i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }

    return n > 1;

}

function sumaPrime(n) {
    let sum = 0;
    let i = 0;
    let counter = 0;

    while(counter < n) {

        if(prim(i)){
            sum = sum + i;
            counter = counter + 1;
        }

        i++;
    }

    return sum;
}

function invers(n) { 

    let newString = n; 
    if(typeof n === 'number') {
        newString = String(n);
    }
    const length = newString.length;
    let toBeReturnedString = ' ';

    for(let i = length - 1; i >= 0; i--) {
        toBeReturnedString = toBeReturnedString + newString[i]
    }

    return Number(toBeReturnedString); 

}

function produsImpare(n) {

    let sum = 0; 
    let counter = 0; 
    let i = 1; 

    while(counter < n) {
        if(i % 2 !== 0) {
            sum *= i;
            counter++
        }
        i++
    }

    return sum;
}

function contains(arr, n) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return true
        }
    }

    return false;

}

function maxArray(arr) {

    let highestNumber = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > highestNumber) {
            highestNumber = arr[i]
        }
    }

    return highestNumber;

}

function sumMinMax(arr) {

    let highestNumber = arr[0];
    let smallestNumber = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > highestNumber) {
            highestNumber = arr[i]
        }
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }
    }

    return highestNumber + smallestNumber;
}

function hasDuplicates(arr) {
    let tempArray = [...arr];
    let doesArrayContainDuplicates = false;
    let i = 0;

    while(tempArray.length) {
        let num = tempArray[0];
        tempArray.shift();

        for(let j = 0; j < tempArray.length; j++) {
            if(num === tempArray[j]) {
                doesArrayContainDuplicates = true;
                break;
            }
        }

    }

    return doesArrayContainDuplicates;

}


function produsPozitive(arr) {

    let sum = 1; 

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            sum *= arr[i];
        }
    }

    return sum;

}

function palindrom(str) {

    let newStr = str;
    if(typeof str !== 'string') {
        newStr = String(str);
    }
    let container = '';
    const length = newStr.length;

    for(let i = length - 1; i >= 0; i--) {
        container += newStr[i];
    }

    return container === newStr;

}

