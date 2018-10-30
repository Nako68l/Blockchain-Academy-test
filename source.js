//1
const decToHex = number => number.toString(16);
const decToBin = number => number.toString(2);
const hexToBin = number => parseInt(number, 16).toString(2);
const binToHex = number => parseInt(number, 2).toString(16);
//2
const zipzap = n => {
    let resultString = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            resultString = resultString.concat('zip');
        } else if (i % 5 === 0) {
            resultString = resultString.concat('zap')
        } else {
            resultString = resultString.concat(i)
        }
    }
    return resultString;
}
//3
const pointInCircle = (r, x, y) => x ** 2 + y ** 2 <= r ** 2;
//4
const getWaterAmount = pitifulRoad => {
    const roadLength = pitifulRoad.length;
    let left = [];
    let right = [];
    let waterLevel = 0;

    left[0] = pitifulRoad[0];
    for (let i = 1; i < roadLength; i++) {
        left[i] = Math.max(left[i - 1], pitifulRoad[i]);
    }

    right[roadLength - 1] = pitifulRoad[roadLength - 1];
    for (let i = roadLength - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], pitifulRoad[i]);
    }

    for (let i = 0; i < roadLength; i++) {
        waterLevel += Math.min(left[i], right[i]) - pitifulRoad[i];
    }
    
    return waterLevel;
}
//5
const createSign = (privateKey, data) => {
    let sig = new KJUR.crypto.Signature({ "alg": "SHA1withRSA" });
    sig.init(privateKey);
    sig.updateString(data)
    return sig.sign()
}
//6
// Ні не стійка так як поле з перевіркою правильності пароля захардкожене,
// і рано чи пізно простим перебором можна знайти потрібну комбінацію
//7
const minBound = 1;
const maxBound = 8;
const getQueenPossiblePoints = (x, y) => {
    let resultArray = [];

    for (let i = minBound; i <= maxBound; i++) {
        if (i != y) {
            resultArray.push({ x: x, y: i });
        }
    }
    for (let i = minBound; i <= maxBound; i++) {
        if (i != x) {
            resultArray.push({ x: i, y: y });
        }
    }
    for (let i = x + 1, j = y + 1; isInBounds(i, j);) {
        resultArray.push({ x: i++, y: j++ })
    }
    for (let i = x - 1, j = y - 1; isInBounds(i, j);) {
        resultArray.push({ x: i--, y: j-- })
    }
    for (let i = x + 1, j = y - 1; isInBounds(i, j);) {
        resultArray.push({ x: i++, y: j-- })
    }
    for (let i = x - 1, j = y + 1; isInBounds(i, j);) {
        resultArray.push({ x: i--, y: j++ })
    }

    return resultArray;
}

const isInBounds = (x, y) => x >= minBound && x <= maxBound && y >= minBound && y <= maxBound
