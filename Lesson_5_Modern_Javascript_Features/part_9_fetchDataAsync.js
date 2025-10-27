const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data!");
        }, 2000);
    });
};

const getData = async () => {
    const result = await fetchData();
    console.log(result); // Fetched data!
};

getData();
