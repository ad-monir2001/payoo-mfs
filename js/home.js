// ! Add money function
document.getElementById('money-el').addEventListener('click', function () {
  const addMoney = document.getElementById('add-money');
  addMoney.setAttribute('class', 'block');
  document.getElementById('cash-out-container').classList.add('hidden')
});

// ! Cash out function
document.getElementById('cash-out').addEventListener('click',function(){
  document.getElementById('cash-out-container').classList.remove('hidden')
  document.getElementById('add-money').classList.add('hidden')
})

document.getElementById('logout-btn').addEventListener('click', function () {
  window.location.href = '../index.html';
});

document
  .getElementById('addMoney-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const amountNumber = document.getElementById('amount').value;
    const pin = document.getElementById('pin-number').value;
    if (pin === '1234') {
      let balance = document.getElementById('balance').innerText;
      const newBalance = parseInt(balance) + parseInt(amountNumber);
      const mainBalance = document.getElementById('balance');
      mainBalance.innerText = newBalance;
    } else {
      const alertMessage = document.getElementById('pin-alert')
      alertMessage.innerText = 'আমার ভুল হচে ক্ষমা করে দেন'
    }
  });
