
var correctPin = prompt("Set your new PIN:");
var userBalance = 5000;

function validatePin() {

    var pin = prompt("Enter your PIN:");
    if (pin === correctPin) {
        atmMachine();  
    } else {
        alert("Incorrect PIN. Please try again.");
        validatePin(); 
    }
}

function atmMachine() {
    let option = prompt("Welcome to ATM!\nChoose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

    switch(option) {
        case '1': 
            alert("Your current balance is: "  + userBalance );
            break;
        case '2': 
            let depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
            if (!depositAmount || depositAmount <= 0) {
                alert("Invalid amount. Please enter a valid number.");
            } else {
                userBalance += depositAmount;
                alert("You have deposited: " + depositAmount + "\nNew balance is: " + userBalance);

            }
            break;
        case '3': 
            let withDrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
           
                if (!withDrawAmount || withDrawAmount <= 0) {
                alert("Invalid amount Please enter a valid number.");
            } else if (withDrawAmount > userBalance) {
                alert("Insufficient balance!");
            } else {
                userBalance -= withDrawAmount;
                alert( " You have withdrawn: " + withDrawAmount + "\nRemaining balance is: " + userBalance);
            }
            break;
        case '4':
            alert("Thank you for using the ATM. Goodbye!");
            return; 
        default: 
            alert("Invalid option. Please choose again.");
    }

    atmMachine();  
}
validatePin();
