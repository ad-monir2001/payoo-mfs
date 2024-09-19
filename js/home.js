document.getElementById('money-el').addEventListener('click', function () {
  const addMoney = document.getElementById('add-money');
  addMoney.setAttribute('class', 'block');
});

document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = '../index.html'
})