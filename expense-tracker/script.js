const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
    e.preventDefault();

    if (text.ariaValueMax.trim() === '' || amount.ariaValueMax.trim() === '') return;
    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value
    }

    transactions.push(transaction);
    updateLocalStorage();
    init();
    form.reset();

}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage(id) {
    localStorage.setItem('transactions', JSON.stringify(transactions));

}
function updateValues() {
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
    const income = amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0).toFixed(2);
    const expense = (amounts.filter(a => a < 0).reduce((acc, a) => acc + a, 0) * -1).toFixed(2);


    balance.textContent = `$${total}`;
    moneyPlus.textContent = `+$${income}`;
    moneyMinus.textContent`-$${expense}`;
}

function renderTransactions() {
    list.innerHTML = '';
    transaction.forEach(t => {
        const sign = t.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.classList.add(t.amount < 0 ? 'minus' : 'plus');
        item.innerHTML = `
      ${t.text} <span>${sign}$${Math.abs(t.amount)}</span>
      <button onclick="removeTransaction(${t.id})">x</button>
    `;
        list.appendChild(item);
    })
}

function init() {
    renderTransactions();
    updateValues();
}

form.addEventListener('submit', addTransaction);

init();