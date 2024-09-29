function findHospital(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var location = document.getElementById("location").value;
    var specialty = document.getElementById("specialty").value;

    // Example hospital data (replace this with actual data from a database)
    var hospitals = [
        { name: "City Hospital", location: "New York", specialty: "Cardiology" },
        { name: "Sunrise Medical Center", location: "Los Angeles", specialty: "Pediatrics" },
        { name: "Downtown Health Clinic", location: "Chicago", specialty: "Neurology" },
        { name: "Lakeside Hospital", location: "Houston", specialty: "Orthopedics" }
        // Add more hospitals as needed
    ];

    // Filter hospitals based on user input
    var filteredHospitals = hospitals.filter(function(hospital) {
        return (location === "" || hospital.location.toLowerCase().includes(location.toLowerCase())) &&
               (specialty === "Any" || hospital.specialty === specialty);
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredHospitals.length > 0) {
        filteredHospitals.forEach(function(hospital) {
            var hospitalInfo = `<p>${hospital.name} - ${hospital.specialty}, ${hospital.location}</p>`;
            resultsDiv.innerHTML += hospitalInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No hospitals found matching your criteria.</p>";
    }
}
