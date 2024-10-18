document.getElementById('calculate').addEventListener('click', () => {
    let balance = document.getElementById('balance').value;
    let remainingValue = document.getElementById('remaining').value;

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
    const cashout = (balance / (1 + 0.0149)).toFixed(2);
    const charge = (cashout * 0.0149).toFixed(2);
    const remain = ((balance + remainingValue) - (parseFloat(cashout) + parseFloat(charge))).toFixed(2);

    document.getElementById('cashout').innerText = cashout;
    document.getElementById('charge').innerText = charge;
    document.getElementById('reBal').innerText = remain;
});

const b = document.getElementById('b')
const n = document.getElementById('n')
const r = document.getElementById('r')
const b_option = document.getElementById('b-option')
const n_option = document.getElementById('n-option')
const r_option = document.getElementById('r-option')

document.addEventListener("DOMContentLoaded", () => {
    b.style.borderColor = 'red'
    n.style.borderColor = 'black'
    r.style.borderColor = 'black'
    b.style.opacity = '1'
    n.style.opacity = '0.2'
    r.style.opacity = '0.2'
});

document.getElementById('b').addEventListener('click', () => {
    b.style.borderColor = 'red'
    n.style.borderColor = 'black'
    r.style.borderColor = 'black'
    b.style.opacity = '1'
    n.style.opacity = '0.2'
    r.style.opacity = '0.2'
    b_option.style.display = 'flex'
    n_option.style.display = 'none'
    r_option.style.display = 'none'
});
document.getElementById('n').addEventListener('click', () => {
    n.style.borderColor = 'red'
    b.style.borderColor = 'black'
    r.style.borderColor = 'black'
    n.style.opacity = '1'
    b.style.opacity = '0.2'
    r.style.opacity = '0.2'
    b_option.style.display = 'none'
    n_option.style.display = 'flex'
    r_option.style.display = 'none'
});
document.getElementById('r').addEventListener('click', () => {
    r.style.borderColor = 'red'
    b.style.borderColor = 'black'
    n.style.borderColor = 'black'
    r.style.opacity = '1'
    n.style.opacity = '0.3'
    b.style.opacity = '0.3'
    b_option.style.display = 'none'
    n_option.style.display = 'none'
    r_option.style.display = 'flex'
});
