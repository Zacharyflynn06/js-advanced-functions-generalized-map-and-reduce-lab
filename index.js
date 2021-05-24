// Add your functions here
const map = (sourceArray, customFunction) => {
    const newArray = []
    for (let i=0; i < sourceArray.length; i++) {
        newArray.push(customFunction(sourceArray[i]))
    }

    return newArray
}

const reduce = (sourceArray, customFunction, initialValue) => {
    let total
    if (initialValue) {
        total = initialValue
        for (let i = 0; i < sourceArray.length; i++) {
            total = customFunction(sourceArray[i], total)
        }
        return total
    } else {
        total = sourceArray[0]
        for (let i = 1; i < sourceArray.length; i++) {
            total = customFunction(sourceArray[i], total)
        }
        return total
    }
}