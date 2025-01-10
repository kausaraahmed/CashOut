var rateDict = {
    bPrio: 0.0149,
    bM: 0.0185,
    bATM: 0.0185,
    nM: 0.0125,
    rM: 0.018,
    rATM: 0.009,
};

selectedRate = 0.0;
const b = document.getElementById('b')
const n = document.getElementById('n')
const r = document.getElementById('r')
const b_option = document.getElementById('b-option')
const n_option = document.getElementById('n-option')
const r_option = document.getElementById('r-option')

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
    document.getElementById('show_charge').innerText = selectedRate * 1000;
    document.getElementById(id).style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", () => {
    b.style.opacity = '1'
    n.style.opacity = '0.2'
    r.style.opacity = '0.2'
    setDefault();
});

document.getElementById('b').addEventListener('click', () => {
    b.style.opacity = '1'
    n.style.opacity = '0.2'
    r.style.opacity = '0.2'
    b_option.style.display = 'flex'
    n_option.style.display = 'none'
    r_option.style.display = 'none'
    setDefault();
});

document.getElementById('n').addEventListener('click', () => {
    n.style.opacity = '1'
    b.style.opacity = '0.2'
    r.style.opacity = '0.2'
    b_option.style.display = 'none'
    n_option.style.display = 'flex'
    r_option.style.display = 'none'
    setDefault();
});

document.getElementById('r').addEventListener('click', () => {
    r.style.opacity = '1'
    n.style.opacity = '0.2'
    b.style.opacity = '0.2'
    b_option.style.display = 'none'
    n_option.style.display = 'none'
    r_option.style.display = 'flex'
    setDefault();
});

document.getElementById('calculate').addEventListener('click', () => {
    let balance = document.getElementById('balance').value;
    let remainingValue = document.getElementById('remaining').value;
    let rate = selectedRate;
    if (rate == 0.0) {
        alert('Please Select Rate');
        return;
    }

    if (!balance) {
        alert('Please Enter Current Balance');
        return;
    }
    if (!remainingValue) {
        alert('Please Enter Remaining Value');
        return;
    }

    if (balance < 0) {
        alert('Current Balance cannot be negative');
        return;
    }
    if (remainingValue < 0) {
        alert('Remaining Value cannot be negative');
        return;
    }

    try {
        balance = parseFloat(balance);
    } catch (error) {
        alert('Current Balance must be a number');
        return;
    }
    try {
        remainingValue = parseFloat(remainingValue);
    } catch (error) {
        alert('Remaining Value must be a number');
        return;
    }
    balance -= remainingValue;
    const cashout = balance / (1 + rate);
    const charge = cashout * rate;
    const remain = (balance + remainingValue) - (parseFloat(cashout) + parseFloat(charge));

    document.getElementById('cashout').innerText = cashout.toFixed(2);
    document.getElementById('charge').innerText = charge.toFixed(2);
    document.getElementById('reBal').innerText = remain.toFixed(2);
});
