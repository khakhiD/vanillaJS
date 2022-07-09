function myModule() {
    let counter = 0;

    function increment() {
        counter += 1;
    }

    function decrement() {
        counter -= 1;
    }

    function getCount() {
        return counter;
    }

    return {
        increment,
        decrement,
        getCount
    }
}

const myCounter = myModule();

myCounter.increment();
console.log(myCounter.getCount()); // 1
myCounter.decrement();
console.log(myCounter.getCount()); // 0