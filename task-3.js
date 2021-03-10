const myIterable = {};

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