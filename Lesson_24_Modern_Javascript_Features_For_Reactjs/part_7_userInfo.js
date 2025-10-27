const user = {
    name: 'Alice',
    address: {
        city: 'Wonderland'
    }
};

console.log(user.address?.city); // 'Wonderland'
console.log(user.contact?.phone); // undefined
const userName = user.name ?? 'Guest';
