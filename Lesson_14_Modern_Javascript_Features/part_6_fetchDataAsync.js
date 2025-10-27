const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Data received!";
            resolve(data);
        }, 2000);
    });
};

async function handleData() {
    const result = await fetchData();
    console.log(result); // Output: Data received!
}

handleData();
