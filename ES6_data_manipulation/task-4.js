class BankAccount {
    #balance;
  
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }
  
    deposit(sum) {
        this.#balance += sum;
    }
  
    withdraw(sum) {
        if (this.#balance >= sum) {
            this.#balance -= sum;
        } else {
            console.log("Insufficient funds");
        }
    }
  
    static compareAccounts(account1, account2) {
        if (account1.getBalance() > account2.getBalance()) {
            return "Account 1 has more money.";
        } else if (account1.getBalance() < account2.getBalance()) {
            return "Account 2 has more money.";
        } else {
            return "Both accounts have the same balance.";
        }
    }
  
    // Checking current balance
    getBalance() {
        return this.#balance;
    }
  }
  
  // Example:
  let account1 = new BankAccount(400);
  let account2 = new BankAccount(700);
  
  console.log("Initial Balance:");
  console.log("Account 1:", account1.getBalance());
  console.log("Account 2:", account2.getBalance());
  
  // transactions
  account1.deposit(200);
  account2.withdraw(300);
  
  
  console.log("\nBalance after transactions:");
  console.log("Account 1:", account1.getBalance());
  console.log("Account 2:", account2.getBalance());
  
  // Compare using static method
  console.log("\nComparing accounts:");
  console.log(BankAccount.compareAccounts(account1, account2));