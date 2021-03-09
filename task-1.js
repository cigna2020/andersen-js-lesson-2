const makeObjectDeepCopy = (obj) => {

    const newObj = {...obj};

    Object.keys(newObj).forEach(key =>
    (newObj[key] = typeof (newObj[key]) === 'object'
        ? makeObjectDeepCopy(newObj[key])
        : obj[key]));

    return newObj;
};



