const basicSettings = {
    id: 1,
    username: "blur",
};
const customSettings = {
    id: 2,
    username: "realblackblur",
    bio: "Building software and products.",
    theme: "dark",
    fontSize: "small",
};
function describeSettings(settings) {
    const knownKeys = ["id", "username", "bio"];
    const customKeys = Object.keys(settings).filter((key) => !knownKeys.includes(key));
    return `Username: ${settings.username}, Custom preferences: ${customKeys.length}`;
}
console.log(describeSettings(basicSettings));
console.log(describeSettings(customSettings));
export {};
//# sourceMappingURL=project_5.js.map