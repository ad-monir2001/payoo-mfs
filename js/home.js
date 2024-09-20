// ! Add money function
// document.getElementById('money-el').addEventListener('click', function () {
//   const addMoney = document.getElementById('add-money');
//   addMoney.classList.remove('hidden');
//   document.getElementById('cash-out-container').classList.add('hidden');
// });

// ! Cash out function
// document.getElementById('cash-out').addEventListener('click', function () {
//   document.getElementById('cash-out-container').classList.remove('hidden');
//   document.getElementById('add-money').classList.add('hidden');
// });

// ! log out functionality

document.getElementById('logout-btn').addEventListener('click', function () {
  window.location.href = '../index.html';
});

// ! add money functionality
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

      // transaction history save
      const p = document.createElement('p');
      p.innerText = `Money added ${amountNumber}, Main balance ${newBalance}`;
      const transactionContainer = document.getElementById(
        'transaction-container'
      );
      transactionContainer.appendChild(p);
    } else {
      const alertMessage = document.getElementById('pin-alert');
      alertMessage.innerText = 'আমার ভুল হচে ক্ষমা করে দেন';
    }
  });

// ! cash out functionality

document
  .getElementById('cash-out-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const pinEl = document.getElementById('pin-number-cash-out').value;
    console.log(pinEl);
    if (pinEl === '1234') {
      const cashAmount = document.getElementById('amount-cash-out').value;
      const cashNumber = parseFloat(cashAmount);
      const balanceEl = document.getElementById('balance').innerText;
      const balanceNumber = parseFloat(balanceEl);
      const newBalance = balanceNumber - cashNumber;
      document.getElementById('balance').innerText = newBalance;

      // cash out history save on transaction section
      const p = document.createElement('p');
      p.innerText = `You have cash out ${cashNumber}tk , Now new balance ${newBalance}`;
      const transactionContainer = document.getElementById(
        'transaction-container'
      );
      transactionContainer.appendChild(p);
    } else {
      alert('তোমার টাকা উঠবেনা');
    }
  });

// ! functionality hidden and block / toggle on cards

document.getElementById('money-el').addEventListener('click', function () {
  showSectionId('add-money');
});

document.getElementById('cash-out').addEventListener('click', function () {
  showSectionId('cash-out-container');
});

document
  .getElementById('transaction-card')
  .addEventListener('click', function () {
    showSectionId('transaction-container');
  });
