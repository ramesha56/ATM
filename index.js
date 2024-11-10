
// var correctPin = prompt("Set your new PIN:");
// var userBalance = 5000;

// function validatePin() {

//     var pin = prompt("Enter your PIN:");
//     if (pin === correctPin) {
//         atmMachine();  
//     } else {
//         alert("Incorrect PIN. Please try again.");
//         validatePin(); 
//     }
// }

// function atmMachine() {
//     var option = prompt("Welcome to ATM!\nChoose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

//     switch(option) {
//         case '1': 
//             alert("Your current balance is: "  + userBalance );
//             break;
//         case '2': 
//             var depositAmount = parseFloat(prompt("Enter the amount to deposit:"));
//             if (!depositAmount || depositAmount <= 0) {
//                 alert("Invalid amount. Please enter a valid number.");
//             } else {
//                 userBalance += depositAmount;
//                 alert("You have deposited: " + depositAmount + "\nNew balance is: " + userBalance);

//             }
//             break;
//         case '3': 
//             var withDrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));
           
//                 if (!withDrawAmount || withDrawAmount <= 0) {
//                 alert("Invalid amount Please enter a valid number.");
//             } else if (withDrawAmount > userBalance) {
//                 alert("Insufficient balance!");
//             } else {
//                 userBalance -= withDrawAmount;
//                 alert( " You have withdrawn: " + withDrawAmount + "\nRemaining balance is: " + userBalance);
//             }
//             break;
//         case '4':
//             alert("Thank you for using the ATM. Goodbye!");
//             return; 
//         default: 
//             alert("Invalid option. Please choose again.");
//     }

//     atmMachine();  
// }
// validatePin();

    var correctPin = "";
    var userBalance = 5000;

    function setPin() {
        correctPin = prompt("Set your new PIN:");
        document.getElementById("display").textContent = "Please enter your PIN to start.";
    }

    function validatePin() {
        var pinInput = document.getElementById("pinInput").value;
        var message = document.getElementById("message");
        if (pinInput === correctPin) {
            document.getElementById("display").textContent = "Welcome! Choose an option.";
            message.textContent = ""; 
            document.getElementById("atmOptions").style.display = "block";
            document.getElementById("pinInput").style.display = "none";
            document.querySelector(".button.blue").style.display = "none";
        } else {
            message.textContent = "Incorrect PIN. Please try again.";
            document.getElementById("pinInput").value = "";
        }
    }

    
    function checkBalance() {
        document.getElementById("display").textContent = "Your current balance is: $" + userBalance;
        hideAmountInputs();
    }

 
    function showDeposit() {
        hideAmountInputs();
        document.getElementById("depositSection").style.display = "block";
        document.getElementById("display").textContent = "Enter the amount to deposit:";
    }


    function deposit() {
        var depositAmount = parseFloat(document.getElementById("depositAmount").value);
        var message = document.getElementById("message");

        if (!depositAmount || depositAmount <= 0) {
            message.textContent = "Invalid amount. Please enter a valid number.";
        } else {
            userBalance += depositAmount;
            document.getElementById("display").textContent = "You deposited: $" + depositAmount + ". New balance: $" + userBalance;
            message.textContent = "";
        }
        document.getElementById("depositAmount").value = ""; 
        hideAmountInputs();
    }

  
    function showWithdraw() {
        hideAmountInputs();
        document.getElementById("withdrawSection").style.display = "block";
        document.getElementById("display").textContent = "Enter the amount to withdraw:";
    }

  
    function withdraw() {
        var withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        var message = document.getElementById("message");

        if (!withdrawAmount || withdrawAmount <= 0) {
            message.textContent = "Invalid amount. Please enter a valid number.";
        } else if (withdrawAmount > userBalance) {
            message.textContent = "Insufficient balance!";
        } else {
            userBalance -= withdrawAmount;
            document.getElementById("display").textContent = "You withdrew: $" + withdrawAmount + ". Remaining balance: $" + userBalance;
            message.textContent = "";
        }
        document.getElementById("withdrawAmount").value = "";
        hideAmountInputs();
    }


    function exitATM() {
        document.getElementById("display").textContent = "Thank you for using the ATM. Goodbye!";
        document.getElementById("atmOptions").style.display = "none";
        document.getElementById("pinInput").style.display = "block";
        document.querySelector(".button.blue").style.display = "block";
        document.getElementById("pinInput").value = ""; 
        hideAmountInputs();
    }

    function hideAmountInputs() {
        document.getElementById("depositSection").style.display = "none";
        document.getElementById("withdrawSection").style.display = "none";
    }

    setPin(); 
