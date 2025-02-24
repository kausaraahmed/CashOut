const rateDict = {
    bPrio: 0.0149,
    bM: 0.0185,
    bATM: 0.0185,
    nM: 0.0125,
    rM: 0.018,
    rATM: 0.009,
};

let selectedRate = 0.0;

const b = document.getElementById('b');
const n = document.getElementById('n');
const r = document.getElementById('r');
const b_option = document.getElementById('b-option');
const n_option = document.getElementById('n-option');
const r_option = document.getElementById('r-option');

function setDefault() {
    selectedRate = 0.0;
    document.getElementById('show_charge').innerText = '___';

    const buttons = document.querySelectorAll('.charge-option');
    buttons.forEach((button) => {
        button.style.opacity = 0.4;
    });
}

function isSelected(id) {
    setDefault();
    selectedRate = rateDict[id];
    document.getElementById('show_charge').innerText = (selectedRate * 1000).toFixed(1);
    document.getElementById(id).style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", () => {
    b.style.opacity = '1';
    n.style.opacity = '0.2';
    r.style.opacity = '0.2';
    setDefault();
});

b.addEventListener('click', () => {
    b.style.opacity = '1';
    n.style.opacity = '0.2';
    r.style.opacity = '0.2';
    b_option.style.display = 'flex';
    n_option.style.display = 'none';
    r_option.style.display = 'none';
    setDefault();
});

n.addEventListener('click', () => {
    n.style.opacity = '1';
    b.style.opacity = '0.2';
    r.style.opacity = '0.2';
    b_option.style.display = 'none';
    n_option.style.display = 'flex';
    r_option.style.display = 'none';
    setDefault();
});

r.addEventListener('click', () => {
    r.style.opacity = '1';
    n.style.opacity = '0.2';
    b.style.opacity = '0.2';
    b_option.style.display = 'none';
    n_option.style.display = 'none';
    r_option.style.display = 'flex';
    setDefault();
});

document.getElementById('calculate').addEventListener('click', () => {
    const balanceInput = document.getElementById('balance').value;
    var remainingValueInput = document.getElementById('remaining').value;

    if (!balanceInput) {
        alert('Please enter the current balance.');
        return;
    }

    if (selectedRate === 0.0) {
        alert('Please select a Merchant type.');
        return;
    }

    if (!remainingValueInput) {
        remainingValueInput = '0.0';
    }

    let balance, remainingValue;

    try {
        balance = parseFloat(balanceInput);
        remainingValue = parseFloat(remainingValueInput);

        if (balance < 0) {
            alert('Current balance cannot be negative.');
            return;
        }
        if (remainingValue < 0) {
            alert('Remaining value cannot be negative.');
            return;
        }
    } catch (error) {
        alert('Both current balance and remaining value must be valid numbers.');
        return;
    }

    balance -= remainingValue;
    const cashout = balance / (1 + selectedRate);
    const charge = cashout * selectedRate;
    const remain = (balance + remainingValue) - (cashout + charge);

    document.getElementById('cashout').innerText = cashout.toFixed(2);
    document.getElementById('charge').innerText = charge.toFixed(2);
    document.getElementById('reBal').innerText = remain.toFixed(2);
});