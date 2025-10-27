const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Data received!";
        resolve(data);
    }, 2000);
});

fetchData
    .then(result => {
        console.log(result); // Output: Data received!
    })
    .catch(error => {
        console.error(error);
    });
