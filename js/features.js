function showSectionId(id) {
  document.getElementById('add-money-container').classList.add('hidden');
  document.getElementById('cash-out-container').classList.add('hidden');
  document.getElementById('transaction-container').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}
