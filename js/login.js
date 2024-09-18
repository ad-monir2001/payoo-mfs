document.getElementById('loginBtn').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('clicked');
  const number = document.getElementById('phoneNumber').value;
  const pinNumber = document.getElementById('pin-number').value;

  if (number === '01521544143' || pinNumber === '544143'){
    window.location.href = '/home.html'
  }
});
