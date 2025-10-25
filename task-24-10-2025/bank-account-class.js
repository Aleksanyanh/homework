//  2) BankAccount Class — Task Requirements
// Task: Create a class called BankAccount to simulate a simple bank account.

// Requirements:
// 1. The class must have a constructor with two properties: owner (string) and balance (number, default 0).
// 2. Add a method deposit(amount) that increases the balance.
// 3. Add a method withdraw(amount) that decreases the balance — only if there’s enough money. Otherwise, print    "Insufficient funds".
// 4. Create one account, make a deposit and a withdrawal, and print the final balance.


class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error(`${amount} is not valid!`);
        }

        this.balance += amount;
    }

    withdraw(amount) {
        if (amount < 0) {
            throw new Error(`${amount} is not valid!`);
        }

        if (this.balance < amount) {
            console.log('Insufficient funds"');
            return;
        }

        this.balance -= amount;
    }
}

const myAccount = new BankAccount('Bob');
myAccount.deposit(100);
myAccount.withdraw(20);

console.log(`The balance is ${myAccount.balance}`);




