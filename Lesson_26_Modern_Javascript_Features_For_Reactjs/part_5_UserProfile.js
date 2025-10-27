const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://api.example.com/user');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Failed to fetch user", error);
            }
        };

        fetchUser();
    }, []);
    
    return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
};
