const selectFromInterval = (arr, firstValueInterval, secondValueInterval) => {

    if (!Array.isArray(arr)
        || typeof (firstValueInterval) !== 'number' || typeof (secondValueInterval) !== 'number'
        || Object.is(firstValueInterval, NaN) || Object.is(secondValueInterval, NaN))
        throw new Error('Ошибка!');

    const result = [];

    const findElement = (arr, firstNum = firstValueInterval, secondNum = secondValueInterval) => {
        arr.forEach(el => {
            if (typeof (el) !== 'number') throw new Error('Ошибка!');
            if (el >= secondNum && el <= firstNum) result.push(el);
        });
    };

    if (firstValueInterval < secondValueInterval) {
        findElement(arr, secondValueInterval, firstValueInterval);
    } else {
        findElement(arr);
    }

    return result;
};