function produceDrivingRange(blockRange) {
    return function(block1, block2) {
        blocks = Math.abs(parseInt(block1) - parseInt(block2))

        if (blocks < blockRange){
            return `within range by ${blockRange - blocks}`
        } else {
            return `${blocks - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(decimalPercentage) {
    return function(dollar) {
        return decimalPercentage * dollar
    }
}

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}