"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(id, changes) {
    console.log(`Updating user ${id} with:`, changes);
}
const userPreview = {
    id: 1,
    name: "Subham X",
};
const users = {
    1: {
        id: 1,
        name: "Ritika",
        age: 20,
    },
    2: {
        id: 2,
        name: "Subham",
        age: 20,
    },
};
updateUser(1, {
    name: "Ritika Hodges",
});
updateUser(2, {
    age: 21,
});
console.log(userPreview);
console.log(users);
//# sourceMappingURL=project_8.js.map