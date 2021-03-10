const makeObjectDeepCopy = (obj) => {

    if (obj === null) return null;

    if (Array.isArray(obj)) {
        const newArr = [];
        obj.forEach((value, ind) => {newArr[ind] = value});
        return newArr;
    } else {
        const newObj = {...obj};
        Object.keys(newObj).forEach(key =>
        (newObj[key] = typeof (newObj[key]) === 'object'
            ? makeObjectDeepCopy(newObj[key])
            : obj[key]));
        return newObj;
    }
};


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


const myIterable = {from: 0, to: 0};

myIterable[Symbol.iterator] = function () {

    if (this.from > this.to
        || typeof (this.from) !== 'number' || typeof (this.to) !== 'number'
        || Object.is(this.from, NaN) || Object.is(this.to, NaN))
        throw new Error('Ошибка!');

    return {
        curentValue: this.from,
        endValue: this.to,

        next() {
            if (this.curentValue <= this.endValue) {
                return {
                    done: false,
                    value: this.curentValue++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

for (let item of myIterable) {
    console.log(item);
};