class BankAccount {
    #balance;

    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.#balance = 0; // private property
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        }
    }

    getBalance() {
        return this.#balance; // allow access to private property
    }
}

const myAccount = new BankAccount('123456789');
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 500
