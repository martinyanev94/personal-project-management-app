const fetchData = new Promise((resolve, reject) => {
    let success = true; // Simulating API success
    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Error fetching data.");
    }
});

fetchData
    .then(response => console.log(response)) // Outputs: Data fetched successfully!
    .catch(error => console.log(error));
