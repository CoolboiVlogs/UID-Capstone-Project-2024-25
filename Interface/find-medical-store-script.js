function findMedicalStore(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var location = document.getElementById("location").value;
    var storeType = document.getElementById("storeType").value;

    // Example medical store data (replace this with actual data from a database)
    var medicalStores = [
        { name: "HealthPlus Pharmacy", location: "New York", storeType: "Pharmacy" },
        { name: "MedCare Drug Store", location: "Los Angeles", storeType: "Drug Store" },
        { name: "City Supermarket", location: "Chicago", storeType: "Supermarket" },
        { name: "Wellness Pharmacy", location: "Houston", storeType: "Pharmacy" }
        // Add more medical stores as needed
    ];

    // Filter medical stores based on user input
    var filteredStores = medicalStores.filter(function(store) {
        return (location === "" || store.location.toLowerCase().includes(location.toLowerCase())) &&
               (storeType === "Any" || store.storeType === storeType);
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredStores.length > 0) {
        filteredStores.forEach(function(store) {
            var storeInfo = `<p>${store.name} - ${store.storeType}, ${store.location}</p>`;
            resultsDiv.innerHTML += storeInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No medical stores found matching your criteria.</p>";
    }
}
