const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const data = { name: "Jane", age: 25 };
            resolve(data); // or reject(new Error("Failed to fetch data"));
        }, 2000);
    });
};
const MyComponent = () => {
    const [user, setUser] = useState(null);

    const fetchUserData = async () => {
        const data = await fetchData();
        setUser(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []); // Fetch user data on component mount
    
    return (
        <>
            {user ? <h1>{user.name}</h1> : <p>Loading...</p>}
        </>
    );
};
