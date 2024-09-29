document.addEventListener('DOMContentLoaded', () => {
    let db;

    // Open (or create) the database
    const request = indexedDB.open('reportsDB', 1);

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log('Database opened successfully');
        displayReports();
    };

    request.onerror = function (event) {
        console.error('Database error:', event.target.errorCode);
    };

    function displayReports() {
        const transaction = db.transaction(['reports'], 'readonly');
        const objectStore = transaction.objectStore('reports');

        const reportList = document.getElementById('report-list');
        reportList.innerHTML = ''; // Clear existing content

        objectStore.openCursor().onsuccess = function (event) {
            const cursor = event.target.result;
            if (cursor) {
                const report = cursor.value;
                console.log('Report retrieved:', report);

                const reportItem = document.createElement('div');
                reportItem.className = 'report-item';

                const reportLink = document.createElement('a');
                reportLink.href = report.content; // Assuming content holds the data URL
                reportLink.textContent = report.title;
                reportLink.style.fontWeight = 'bold';
                reportItem.appendChild(reportLink);

                const timestamp = document.createElement('p');
                timestamp.textContent = 'Uploaded on: ' + report.timestamp;
                reportItem.appendChild(timestamp);

                reportList.appendChild(reportItem);

                cursor.continue();
            } else {
                if (reportList.children.length === 0) {
                    reportList.textContent = 'No reports available.';
                }
            }
        };

        objectStore.openCursor().onerror = function (event) {
            console.error('Cursor error:', event.target.errorCode);
        };
    }
});
