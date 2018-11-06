const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong!');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 1500);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('Error: ', error);
});

console.log('after');