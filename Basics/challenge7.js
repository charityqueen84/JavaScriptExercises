function ATM (number) {
    let accountNumber = number;
    let balance = 0;
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount; //to increase the balance 
                return 'Your deposit of ' + amount + ' was successful';
            }else{
                return 'Deposit amount must be greater than 0'
            }
        },
        withdrawal: function(amount) {
            if(amount > 0) { //first tests if amount is greater than 0. If not, goes to second return. If it is, tests to make sure balance is not going below 0. If it is, tells you NSF, if not, it'll just do the balance calc.
                if((balance - amount < 0)) { //if the balance minues the amount is less than 0
                    return 'You have insufficient funds for this withdrawal';
                }else{
                    balance -= amount;
                    return 'Please take your cash from the dispenser';
                }
            }else{ 
                return 'Withdrawal amount must be greater than 0';
            }
        }, 
        getBalance: function() {
            return 'The balance in your account is ' + balance;
        },
        getAccountNo: function() {
            return 'Your account number is ' + accountNumber;
        }
    }
}
//closure is completed, but you've got to set a variable and call the closure
let banking = ATM('12345'); // once that initial call is made, all those inner blocks are now available. Set a variable. Call closure below. 
console.log(banking.withdrawal(60));     //try to withdraw $60. NSF so we need to deposit
console.log(banking.deposit(100));
console.log(banking.withdrawal(20)); //undefined b/c we forgot a return statement after line 18. added that. 
console.log(banking.getBalance());
console.log(banking.getAccountNo());

    