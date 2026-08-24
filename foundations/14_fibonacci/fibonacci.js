const fibonacci = function(number) {
    if (parseInt(number) === 0) return 0;
    if (parseInt(number) < 0) return "OOPS";

    let prev = 1;
    let current = 1;

    for (let i = 2; i < number; i++){
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
