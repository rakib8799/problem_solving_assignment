const kilometerToMeter = function (kilometer) {
    if (kilometer >= 0) return kilometer * 1000;
    else return `Negative number`;
};
const inputKilometer = kilometerToMeter(3);
console.log(inputKilometer);

let sum = 0;
const budgetCalculator = function (watch, phone, laptop) {
    sum += 50 * watch + 100 * phone + 500 * laptop;
    return sum;
};
const inputValues = budgetCalculator(5, 3, 2);
console.log(inputValues);

const hotelCost = function (numberOfDays) {
    if (numberOfDays >= 1 && numberOfDays <= 10) return numberOfDays * 100;
    else if (numberOfDays >= 11 && numberOfDays <= 20)
        return numberOfDays * (100 - 20);
    else return numberOfDays * (100 - 50);
};
const inputHotel = hotelCost(19);
console.log(inputHotel);

const megaFriend = function (friend) {
    let firstValue = friend[0];
    for (let i = 0; i < friend.length; i++) {
        let element = friend[i];
        if (element.length > firstValue.length) firstValue = element;
    }
    return firstValue;
};
const inputFriend = megaFriend(['Rakib', 'Mehedi', 'Rabbi', 'Raihan', 'Sufi']);
console.log(inputFriend);
