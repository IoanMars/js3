const users = [
    {
        name: 'Robert',
        age: 33,
        position: 'administrator'
    },
    {
        name: 'Marta',
        age: 30,
        position: 'menage'
    },
    {
        name: 'Tony',
        age: 20,
        position: 'student'
    }
];
const resultUsers = [];
const removeMassive = [null, NaN, '', true, 33, 85, 'hello', undefined, false, 0, 'zero', ' '];
const resultRemove = [];
const myHistory = ['Hi!', 'My name Ivan.', 'From Belarus.', 'I am professional programmer'];
const zeroMassive = [];
const numberMassive = [2, 3, 5, 7, 11, 13, 17, 19];
const sumNumberMassive =[];

function propertyValue(users, key) {
    for (let i = 0; i < users.length; i++) {
        if (users.length = key) {
            resultUsers.push(users[i]);
        }
    }

    return resultUsers;
}

console.log(propertyValue(users, 1));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function removeItem(arr, num) {
    resultRemove = arr.filter(item => item != num);

    return resultRemove;
}

console.log(removeItem, 2);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const myHistoryLength = zeroMassive => {
    myHistory.reduce((acc, item) => {
        zeroMassive.push(item.length);

        return acc + item.length;
    }, 0);

    return zeroMassive;
}

console.log(myHistoryLength(zeroMassive));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const currentSums = numberMassive => {
    const resultSum = [];
    numberMassive.reduce((acc, item) => {
        resultSum.push(acc);

        return acc + item;
    }, 0)

    return resultSum;
}

console.log(currentSums(numberMassive));
