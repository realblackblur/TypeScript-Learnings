const parseUser = (raw) => {
    // Step 1: is it an object at all?
    if (typeof raw !== "object" || raw === null) {
        throw new Error("Invalid user data: expected an object");
    }
    if (!("id" in raw)) {
        throw new Error("Invalid user data: missing required field 'id'");
    }
    if (!("name" in raw)) {
        throw new Error("Invalid user data: missing required field 'name'");
    }
    if (!("age" in raw)) {
        throw new Error("Invalid user data: missing required field 'age'");
    }
    if (typeof raw.id !== "number") {
        throw new Error("Invalid user data: 'id' must be a number");
    }
    if (typeof raw.name !== "string") {
        throw new Error("Invalid user data: 'name' must be a string");
    }
    if (typeof raw.age !== "number") {
        throw new Error("Invalid user data: 'age' must be a number");
    }
    // Step 6: everything passed — return the validated User
    return { id: raw.id, name: raw.name, age: raw.age };
};
const raw1 = { id: 1, name: "Blur", age: 20 };
const raw2 = { id: "1", name: "Blur", age: 20 };
const raw3 = { name: "Blur", age: 20 };
const raw4 = "hello";
for (const raw of [raw1, raw2, raw3, raw4]) {
    try {
        const user = parseUser(raw);
        console.log("Valid:", user);
    }
    catch (err) {
        console.log("Rejected:", err.message);
    }
}
export {};
//# sourceMappingURL=project_1.js.map