//Kata 1()

function firstKata(num) {
    let contagem = 0
    for (let i = 1; i <= num; i++) {
        contagem++
    }
    return contagem
}

//Kata 2()

function countingBackNum(num) {
    let reverse = []
    for (let i = 1; i <= num; i++) {
        reverse.push(i)
    }
    return contagem = `Contagem regressiva: ${reverse.reverse().join(' ')}`
}

//Kata 3()

function countingNumNegative(num) {
    let countNegative = []
    for (let i = -1; i >= num; i--) {
        countNegative.push(i)
    }
    return contagem = `Contagem de numeros negativos: ${countNegative.join(' ')}`
}

//Kata 4()

function countingBackNumNegative(num) {
    let reverseNegative = []
    for (let i = -1; i >= num; i--) {
        reverseNegative.push(i)
    }
    return contagem = `Contagem regressiva de numeros negativos: ${reverseNegative.reverse().join(' ')}`
}

//Kata 5()

function oddsTillnum(num) {
    let contagemImpares = []
    for (let i = -1; i >= num; i--) {
        if (([i] * -1) % 2 === 1) {
            contagemImpares.push(i)
        }
    }
    return `Numeros Impares são ${contagemImpares} `
}

//Kata 6()

function divisibleByThree(num) {
    let contagemDiv = 0
    for (let i = 1; i <= num; i++) {
        if ([i] % 3 === 0) {
            contagemDiv++
        }
    }
    return `Possui ${contagemDiv} numeros divisiveis por três`
}



//Kata 7()

function divisibleBySeven(num) {
    let contagemDiv = 0
    for (let i = 1; i <= num; i++) {
        if ([i] % 7 === 0) {
            contagemDiv++
        }
    }
    return `Possui ${contagemDiv} numeros divisiveis por sete`
}

//Kata 8()

function divisibleBynum(num) {
    let contagemDiv = []
    for (let i = 1; i <= num; i++) {
        if ([i] % 3 === 0 || [i] % 7 === 0) {
            contagemDiv.push(i)
        }
    }
    return `Os numeros ${contagemDiv.reverse().join(' ')} são divisiveis por três e por sete`
}


//Kata 9()

function oddMultiplesOfFive(num) {
    let contagemMultiples = []
    for (let i = 1; i <= num; i++) {
        if ([i] % 5 === 0 && [i] % 2 === 1) {
            contagemMultiples.push(i)
        }
    }
    return `Possui ${contagemMultiples.join(' ')} multiplos de cinco`
}


//Kata 10()

function showOnSampleArray(num) {
    return `Os numeros contidos sampleArray são ${num.join(' ')}`
}

//Kata 11()

function sampleArrayPair(num) {
    let contagemPares = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            contagemPares.push(i)
        }
    }
    return `Os numeros pares no SampleArray são ${contagemPares.join(' ')}`
}

//Kata 12()

function sampleArrayOdd(num) {
    let contagemImpares = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 1) {
            contagemImpares.push(i)
        }
    }
    return `Os numeros Impares no SampleArray são ${contagemImpares.join(' ')}`
}

//Kata 13()

function sampleArrayDivByEight(num) {
    let contagemDiv = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 8 === 0) {
            contagemDiv.push(i)
        }
    }
    return `Os numeros divisiveis por 8 são ${contagemDiv.join(' ')}`
}

//Kata 14()

function squareNumbersSampleArray(num) {
    let square = []

    for (let i = 0; i < num.length; i++) {
        square.push(Math.ceil(Math.sqrt(num[i])))
    }
    return `Os numeros ${square.join(' - ')} são quadrados perfeitos `
}


//Kata 15()

function sumNum(num) {
    let sumValues = 0
    for (let i = 1; i <= num; i++) {
        sumValues += i
    }
    return `A soma dos valores é igual a ${sumValues} `
}

//Kata 16()

function sumNumArray(num) {
    let sumValuesArr = 0
    for (let i = 1; i < num.length; i++) {
        sumValuesArr += num[i]
    }
    return `A soma dos valores do array é igual a ${sumValuesArr} `
}

//Kata 17()

function smallerSampleArray(num) {
    let smaller = 0
    for (let i = 0; i < num.length; i++) {
        if(num[i] < num[smaller]) {
            smaller = num[i]

        }
    }
    return `O menor numero do Sample Array é ${smaller}`
}

//Kata 18()

function biggestSampleArray(num) {
    let biggestArr = 0
    for (let i = 0; i < num.length; i++) {
        if(num[i] > biggestArr) {
            biggestArr = num[i]
        }
    }
    return `O maior do Sample Array é ${biggestArr}`
}

const oneTill = 25
const numPair = oneTill
const countingBack = oneTill
const countingless = -25
const countingbackwardsless = countingless
const countingnumOdd = countingless
const dividingByThree = 100
const dividingBySeven = 100
const dividingBySevenAndThree = 100
const oddMultOfFive = 100
const samplePair = [5, 5, 4, 5, 5, 5, 3, 4, 45, 5, 10, 35, 23, 12, 6, 15, 11, 20, 10, 46, 21]
const sampleOdd = samplePair
const ArrayDivByEight = samplePair
const squareNumSampleArr = samplePair
const sumTill = oneTill
const sumTillArr = samplePair
const smaller = samplePair
const biggest = samplePair

const oneTillnum = firstKata(oneTill)
const backCounting = countingBackNum(countingBack)
const countingNegative = countingNumNegative(countingless)
const countingBackNegative = countingBackNumNegative(countingbackwardsless)
const numOdd = oddsTillnum(countingnumOdd)
const divByThree = divisibleByThree(dividingByThree)
const divBySeven = divisibleBySeven(dividingByThree)
const divBySevenAndThree = divisibleBynum(dividingBySevenAndThree)
const oddOfFive = oddMultiplesOfFive(oddMultOfFive)
const showOnSample = showOnSampleArray(samplePair)
const SamplePair = sampleArrayPair(samplePair)
const sampleArrOdd = sampleArrayOdd(sampleOdd)
const sampleArrayDivEight = sampleArrayDivByEight(ArrayDivByEight)
const squareNumArr = squareNumbersSampleArray(squareNumSampleArr)
const sumTillNum = sumNum(sumTill)
const sumTillNumArr = sumNumArray(sumTillArr)
const smallerNum = smallerSampleArray(smaller)
const biggestNum = biggestSampleArray(biggest)

console.log(oneTillnum)
console.log(backCounting)
console.log(countingNegative)
console.log(countingBackNegative)
console.log(numOdd)
console.log(divByThree)
console.log(divBySeven)
console.log(divBySevenAndThree)
console.log(oddOfFive)
console.log(showOnSample)
console.log(SamplePair)
console.log(sampleArrOdd)
console.log(sampleArrayDivEight)
console.log(squareNumArr)
console.log(sumTillNum)
console.log(sumTillNumArr)
console.log(smallerNum)
console.log(biggestNum)
