const cleanModule = (function() {
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
})();