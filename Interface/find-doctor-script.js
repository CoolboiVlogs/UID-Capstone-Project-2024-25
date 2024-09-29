function findDoctor(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var specialization = document.getElementById("specialization").value;
    var location = document.getElementById("location").value;
    var availability = document.getElementById("availability").value;
    var date = document.getElementById("date").value;

    // Example doctor data (you could replace this with actual data from a database)
    var doctors = [
        { name: "Dr. Smith", specialization: "Cardiology", location: "New York", availability: "Morning", dates: ["2024-08-09", "2024-08-10"] },
        { name: "Dr. Johnson", specialization: "Dermatology", location: "Los Angeles", availability: "Afternoon", dates: ["2024-08-09"] },
        { name: "Dr. Williams", specialization: "Pediatrics", location: "Chicago", availability: "Evening", dates: ["2024-08-10"] },
        { name: "Dr. Brown", specialization: "General", location: "Houston", availability: "Anytime", dates: ["2024-08-09", "2024-08-11"] }
        // Add more doctors as needed
    ];

    // Filter doctors based on user input
    var filteredDoctors = doctors.filter(function(doctor) {
        return (specialization === "Any" || doctor.specialization === specialization) &&
               (location === "" || doctor.location.toLowerCase().includes(location.toLowerCase())) &&
               (availability === "Anytime" || doctor.availability === availability) &&
               (date === "" || doctor.dates.includes(date));
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredDoctors.length > 0) {
        filteredDoctors.forEach(function(doctor) {
            var doctorInfo = `<p>${doctor.name} - ${doctor.specialization}, ${doctor.location} (${doctor.availability})</p>`;
            resultsDiv.innerHTML += doctorInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No doctors found matching your criteria.</p>";
    }
}
