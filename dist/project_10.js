async function getWeather(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        return {
            city: city,
            temperature: Number(data.current_condition[0].temp_C),
            condition: data.current_condition[0].weatherDesc[0].value,
        };
    }
    catch (err) {
        throw new Error(`Failed to fetch weather: ${err.message}`);
    }
}
async function main() {
    try {
        const weather = await getWeather("Indore");
        console.log(weather);
    }
    catch (err) {
        console.log(err.message);
    }
}
main();
export {};
//# sourceMappingURL=project_10.js.map