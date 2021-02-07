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
    let sumOfItems = 0;
    sumOfItems += 50 * watch + 100 * phone + 500 * laptop;
    return sumOfItems;
};
const inputItems = budgetCalculator(5, 3, 2);
console.log(inputItems);

// Problem-3
const hotelCost = function (numberOfDays) {
    let costOfLiving = 0;
    for (let i = 1; i <= numberOfDays; i++) {
        if (i <= 10) costOfLiving += 100;
        else if (i <= 20) costOfLiving += 100 - 20;
        else costOfLiving += 100 - 50;
    }
    return costOfLiving;
};
const inputDays = hotelCost(14);
console.log(inputDays);

// Problem-4
const megaFriend = function (friends) {
    let firstElement = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let restOfTheElements = friends[i];
        if (restOfTheElements.length > firstElement.length)
            firstElement = restOfTheElements;
        else if (restOfTheElements.length == 0)
            return `Name field can't be empty`;
    }
    return firstElement;
};
const inputFriends = megaFriend(['Rakib', 'Mehedi', 'Rabbi', 'Raihan', 'Sufy']);
console.log(inputFriends);
