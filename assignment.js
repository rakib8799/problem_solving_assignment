// https://github.com/rakib8799/problem_solving_assignment

// Problem-1
const kilometerToMeter = function (kilometer) {
    if (kilometer >= 0) return kilometer * 1000;
    else return `Distance can't be negative`;
};
const inputKilometer = kilometerToMeter(5);
console.log(inputKilometer);

// Problem-2
const budgetCalculator = function (watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
        let sumOfItems = 0;
        sumOfItems += 50 * watch + 100 * phone + 500 * laptop;
        return sumOfItems;
    } else if (watch === 0 || phone === 0 || laptop === 0) return 0;
    else return `Quantity of items can't be negative'`;
};
const inputItems = budgetCalculator(5, 3, 2);
console.log(inputItems);

// Problem-3
const hotelCost = function (numberOfDays) {
    let costOfLiving = 0;
    if (numberOfDays < 0) return `Days can't be negative`;
    for (let i = 1; i <= numberOfDays; i++) {
        if (i >= 1 && i <= 10) costOfLiving += 100;
        else if (i >= 11 && i <= 20) costOfLiving += 80;
        else costOfLiving += 50;
    }
    return costOfLiving;
};
const inputDays = hotelCost(14);
console.log(inputDays);

// Problem-4
const megaFriend = function (friends) {
    if (friends.length == 0) return `Array can't be empty`;
    let firstElement = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let restOfTheElements = friends[i];
        if (restOfTheElements.length > firstElement.length)
            firstElement = restOfTheElements;
    }
    return firstElement;
};
const inputFriends = megaFriend(['Rakib', 'Mehedi', 'Rabbi', 'Raihan', 'Sufi']);
console.log(inputFriends);
