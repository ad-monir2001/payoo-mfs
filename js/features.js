function showSectionId(id) {
  document.getElementById('add-money').classList.add('hidden');
  document.getElementById('cash-out-container').classList.add('hidden');
  document.getElementById('transaction-container').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}
