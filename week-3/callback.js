const add = (number, nextNumber, callback) => {
    setTimeout(() => {
        const sum = number + nextNumber;
        callback(sum);
    }, 2000)
}

console.logadd(1,4,(sum))
