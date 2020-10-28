// to look out for button click, and then do something
document.querySelector('#update_budget').addEventListener('click', updateBudget);
document.querySelector('#add_expense').addEventListener('click', addExpense);

// # sign to look for id elements
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expenses');

let monthlyIncome = 0;
let expenses = []; // array
let expenseTotal = 0;
let balance = 0;

function updateBudget(event) {
    event.preventDefault(); // stop page from reloading when we click the button that submits the data
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    incomeInput.value = '';
    updateBalance(); // calling updateBalance function
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;

    if (balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    }
}

function addExpense(event) {
    event.preventDefault();
    let expense = {
        expenseName: nameInput.value,
        expenseAmount: amountInput.value
    }
    // creates new html element and assigns to variable, we have to add to our page
    let newExpense = document.createElement('p'); 
    // add element this way
    newExpense.innerText = expense.expenseName + ": $" + expense.expenseAmount;
    expenseList.appendChild(newExpense); // appendchild, appends to existing list
    expenseAmount = parseInt(amountInput.value); //parseInt, to make sure we have a number
    expenses.push(expenseAmount); //push, 
    nameInput.value = ''; // empty string
    amountInput.value = ''; // empty string
    updateExpenseTotal();
}

function updateExpenseTotal() {
    expenseTotal = 0;

    // expenses is an array, here we are accessing the array
    // lenth is an attribute, the count, number of items in the array
    // i++ increment by 1
    // expenses = [900, 100, 300]
    //              0    1    2
    // first iteration expenseTotal = 900
    // scnd iteration  expenseTotal = 1000
    // third iteration expenseTotal = 1300
    for (let i = 0; i < expenses.length; i++) {
        expenseTotal = expenseTotal + expenses[i];
    }
    totalExpenses.innerText = "$" + expenseTotal; // 
    updateBalance(); // to update the balance, and show remainder balance, and change color of remainder based on results
}