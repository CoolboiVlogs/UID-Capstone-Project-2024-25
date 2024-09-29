document.getElementById('emergencyServicesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var serviceType = document.getElementById("serviceType").value;
    var location = document.getElementById("location").value;

    // Example emergency services data (replace this with actual data from a database)
    var services = [
        { name: "City Ambulance Service", type: "Ambulance", location: "New York", phone: "123-456-7890" },
        { name: "Metro Fire Brigade", type: "Fire Department", location: "Los Angeles", phone: "098-765-4321" },
        { name: "Central Police Station", type: "Police", location: "Chicago", phone: "567-890-1234" },
        { name: "Health Care Hospital", type: "Hospital", location: "Houston", phone: "234-567-8901" }
        // Add more services as needed
    ];

    // Filter services based on user input
    var filteredServices = services.filter(function(service) {
        return (serviceType === service.type) &&
               (location === "" || service.location.toLowerCase().includes(location.toLowerCase()));
    });

    // Display the results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredServices.length > 0) {
        filteredServices.forEach(function(service) {
            var serviceInfo = `
                <div class="service-card">
                    <h2>${service.name}</h2>
                    <p>Type: ${service.type}</p>
                    <p>Location: ${service.location}</p>
                    <p>Phone: ${service.phone}</p>
                    <div class="buttons">
                        <a href="tel:${service.phone}" class="button call">Call</a>
                        <a href="#" class="button help" onclick="askForHelp('${service.name}')">Ask for Help</a>
                    </div>
                </div>`;
            resultsDiv.innerHTML += serviceInfo;
        });
    } else {
        resultsDiv.innerHTML = "<p>No services found matching your criteria.</p>";
    }
});

function askForHelp(serviceName) {
    alert(`Help requested from ${serviceName}.`);
}
