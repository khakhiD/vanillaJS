const obj1 = { name: 'Lee' };
const obj2 = { name: 'Shin' };

function getUserInfo(age, country) {
    return `name: ${this.name}, age: ${age}, contry: ${country}`;
}

const bound = getUserInfo.bind(obj1);

console.log(bound(20, 'Korea')); // 'name: Lee, age: 20, country: Korea'
console.log(bound.apply(obj2, [20, 'Korea'])); // 'name: Lee, age: 20, country: Korea'