"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({
    name: "Mark",
    age: 21
}, {
    name: 'Jon',
    age: 22
});
console.log(result);
