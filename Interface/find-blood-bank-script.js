function findBloodBank(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var location = document.getElementById("location").value;
    var bloodType = document.getElementById("bloodType").value;

    // Example blood bank data (replace this with actual data from a database)
    var bloodBanks = [
        { name: "Central Blood Bank", location: "New York", bloodType: "O+" },
        { name: "Metro Blood Center", location: "Los Angeles", bloodType: "A+" },
        { name: "City Blood Bank", location: "Chicago", bloodType: "B+" },
        { name: "Northside Blood Bank", location: "Houston", bloodType: "AB-" }
        // Add more blood banks as needed
    ];

    // Filter blood banks based on user input
    var filteredBloodBanks = bloodBanks.filter(function(bloodBank) {
        return (location === "" || bloodBank.location.toLowerCase().includes(location.toLowerCase())) &&
               (bloodType === "Any" || bloodBank.bloodType === bloodType);
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredBloodBanks.length > 0) {
        filteredBloodBanks.forEach(function(bloodBank) {
            var bloodBankInfo = `<p>${bloodBank.name} - ${bloodBank.bloodType}, ${bloodBank.location}</p>`;
            resultsDiv.innerHTML += bloodBankInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No blood banks found matching your criteria.</p>";
    }
}
