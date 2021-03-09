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