function findTestCentre(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var location = document.getElementById("location").value;
    var testType = document.getElementById("testType").value;

    // Example test centre data (replace this with actual data from a database)
    var testCentres = [
        { name: "Health Diagnostics", location: "New York", testType: "Blood Test" },
        { name: "City Imaging Centre", location: "Los Angeles", testType: "X-Ray" },
        { name: "Metro Medical Lab", location: "Chicago", testType: "MRI" },
        { name: "Wellness Ultrasound", location: "Houston", testType: "Ultrasound" }
        // Add more test centres as needed
    ];

    // Filter test centres based on user input
    var filteredCentres = testCentres.filter(function(centre) {
        return (location === "" || centre.location.toLowerCase().includes(location.toLowerCase())) &&
               (testType === "Any" || centre.testType === testType);
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredCentres.length > 0) {
        filteredCentres.forEach(function(centre) {
            var centreInfo = `<p>${centre.name} - ${centre.testType}, ${centre.location}</p>`;
            resultsDiv.innerHTML += centreInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No test centres found matching your criteria.</p>";
    }
}
