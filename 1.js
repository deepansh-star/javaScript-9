class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Money Is.${amount}. New Bank balance Is: Rs.${this.balance}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive amount.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn money Is.${amount}. New balance Is: Rs.${this.balance}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }

    checkBalance() {
        console.log(`Account balance for ${this.accountHolder}: Rs.${this.balance}`);
    }
}
const myAccount = new BankAccount('Sahil', 3000);
myAccount.checkBalance(); 
myAccount.deposit(700);
myAccount.deposit(-250); 
myAccount.withdraw(400);
myAccount.withdraw(2500); 
myAccount.withdraw(-900);    
myAccount.checkBalance(); 

