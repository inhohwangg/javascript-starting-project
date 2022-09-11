function calculate(operation) {
    const enteredNumber = getUserNumberInput() {
        const initialResult = currentResult
        let operation
        if (operation === 'ADD') {
            currentResult += enteredNumber
            operation = '+'
        }else if (operation === 'SUBTRACK') {
            currentResult -= enteredNumber
            operation = '-'
        }else if (operation === 'MULTIPLY') {
            currentResult *= enteredNumber
            operation = '*'
        }else {
            currentResult /= ernteredNumber
            operation = '/'
        }
    }
    createAndWriteOutput(operator, intialResult, enteredNumber)
    writeLog(operation, intialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'))
subtrackBtn.addEventListener('click', calculate.bind(this, 'SUBTRACK'))
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'))
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'))