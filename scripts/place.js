
// Wind chill calculation function for Fahrenheit
function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
        // Apply the wind chill formula
        return (
            35.74 + 
            0.6215 * tempF - 
            35.75 * Math.pow(windSpeedMph, 0.16) + 
            0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
        ).toFixed(1); // Returns the wind chill factor rounded to 1 decimal place
    } else {
        return "N/A"; // Wind chill is not applicable
    }
}

// Static values for temperature and wind speed
const temperature = 40; // in Fahrenheit (adjust as needed)
const windSpeed = 10; // in miles per hour (adjust as needed)

// Call the function only if the conditions are met and display the result
const windChillFactor = calculateWindChill(temperature, windSpeed);

// Display the result in the "wind-chill" span
document.getElementById("wind-chill").textContent = windChillFactor;
