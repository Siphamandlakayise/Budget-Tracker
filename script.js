let balance = 0;
function addTransaction() {
  const desc = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  if (!desc || isNaN(amount)) return;
  

  balance += amount;
  document.getElementById('balance').innerText = `Balance: R${balance}`;

  const li = document.createElement('li');
  li.textContent = `${desc}: R${amount}`;
  document.getElementById('transactions').appendChild(li);

  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}
function resetTransactions() {
  balance = 0;
  document.getElementById('balance').innerText = 'Balance: R0';
  document.getElementById('transactions').innerHTML = '';
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}
