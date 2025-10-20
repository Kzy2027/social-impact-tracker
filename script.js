document.getElementById('themeSelector').addEventListener('change', function () {
  document.body.className = this.value;
});

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tabContent');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}
