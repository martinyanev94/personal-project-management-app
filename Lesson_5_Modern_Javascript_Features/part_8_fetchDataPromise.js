const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { success: true, message: 'Data fetched successfully!' };
        if (data.success) {
            resolve(data.message);
        } else {
            reject('Error fetching data.');
        }
    }, 2000);
});

fetchData
    .then(result => console.log(result)) // Data fetched successfully!
    .catch(error => console.error(error));
