const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched!'), 2000);
    });
};

fetchData().then(data => console.log(data)); // Output after 2 seconds: Data fetched!
const fetchUser = async () => {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
};

fetchUser().then(user => console.log(user));
