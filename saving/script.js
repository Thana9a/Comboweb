
let additionalExpenses = []; // Array to store additional expenses

function addExpense() {
    // Create a new input field for an additional expense
    const expenseContainer = document.getElementById("additionalExpensesContainer");
    const expenseInput = document.createElement("input");
    expenseInput.type = "number";
    expenseInput.placeholder = "Enter additional expense amount";
    expenseInput.className = "additionalExpense";
    expenseContainer.appendChild(expenseInput);
    additionalExpenses.push(expenseInput);
}

function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    const weeklyGas = parseFloat(document.getElementById("weeklyGas").value);

    // Validate inputs
    if (isNaN(monthlyIncome) || monthlyIncome <= 0) {
        alert("Please enter a valid monthly income.");
        return;
    }
    if (isNaN(weeklyGas) || weeklyGas < 0) {
        alert("Please enter a valid weekly gas expense.");
        return;
    }

    // Calculate monthly gas expense (weekly gas * 4)
    const monthlyGas = weeklyGas * 4;

    // Sum up additional expenses
    let totalAdditionalExpenses = 0;
    additionalExpenses.forEach(expenseInput => {
        const expense = parseFloat(expenseInput.value);
        if (!isNaN(expense) && expense > 0) {
            totalAdditionalExpenses += expense;
        }
    });

    // Divide income into 30%, 20%, and 50%
    const essentials = monthlyIncome * 0.30;
    const savings = monthlyIncome * 0.20;
    const wantsBeforeExpenses = monthlyIncome * 0.50;

    // Calculate final wants after gas and additional expenses
    const wants = wantsBeforeExpenses - monthlyGas - totalAdditionalExpenses;

    // Calculate daily spend allowance for the adjusted wants (50% portion after expenses)
    const dailyWantsSpend = wants / 30;

    // Display results
    document.getElementById("essentials").innerText = essentials.toFixed(2);
    document.getElementById("savings").innerText = savings.toFixed(2);
    document.getElementById("wants").innerText = wants > 0 ? wants.toFixed(2) : "0.00";
    document.getElementById("dailyWantsSpend").innerText = dailyWantsSpend > 0 ? dailyWantsSpend.toFixed(2) : "0.00";
}