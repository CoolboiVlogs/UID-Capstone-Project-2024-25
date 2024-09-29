document.addEventListener('DOMContentLoaded', () => {
    let db;

    // Open (or create) the database
    const request = indexedDB.open('reportsDB', 1);

    // Create the schema
    request.onupgradeneeded = function(event) {
        db = event.target.result;
        const objectStore = db.createObjectStore('reports', { keyPath: 'id', autoIncrement: true });
        objectStore.createIndex('title', 'title', { unique: false });
        objectStore.createIndex('timestamp', 'timestamp', { unique: false });
        objectStore.createIndex('content', 'content', { unique: false });
        console.log('Object store created');
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log('Database opened successfully');
    };

    request.onerror = function(event) {
        console.error('Database error:', event.target.errorCode);
    };

    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submission prevented');

        const fileInput = document.getElementById('report-file');
        const file = fileInput.files[0];
        console.log('Selected file:', file);

        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = function(event) {
                const result = event.target.result;
                const timestamp = new Date().toLocaleString();
                console.log('File read successfully:', result);

                const reportData = {
                    title: file.name,
                    timestamp: timestamp,
                    content: result
                };

                const transaction = db.transaction(['reports'], 'readwrite');
                const objectStore = transaction.objectStore('reports');
                const request = objectStore.add(reportData);

                request.onsuccess = function(event) {
                    console.log('Report saved to IndexedDB with id:', event.target.result);
                    alert('Report uploaded successfully!');
                    window.location.href = 'reports-list.html';
                };

                request.onerror = function(event) {
                    console.error('Transaction error:', event.target.errorCode);
                };
            };
            fileReader.readAsDataURL(file);

            fileInput.value = '';
        } else {
            alert('Please choose a file to upload.');
        }
    });
});
