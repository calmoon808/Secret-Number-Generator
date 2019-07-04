'use strict';
module.exports = function() {
    let numbers = [];
    return function secretNumber(){
        if (numbers.length === 0){
            numbers.push(Math.floor(Math.random()) * 1000000);
        }
        return numbers;
    }
}