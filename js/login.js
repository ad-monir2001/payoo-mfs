document.getElementById('loginBtn').addEventListener('click', function (event) {
  event.preventDefault();

  const number = document.getElementById('phoneNumber').value;
  const pinNumber = document.getElementById('pin-number').value;

  if (number === 'admin' && pinNumber === '1234') {
    window.location.href = '../home.html'
  } else {
    alert('গায়েবুল হাওয়া');
  }
});
