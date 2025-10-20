document.getElementById('impact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const co2 = parseFloat(document.getElementById('co2').value);
  const hours = parseFloat(document.getElementById('hours').value);
  const donations = parseFloat(document.getElementById('donations').value);

  const summary = `
    <h3>Your Impact Summary</h3>
    <ul>
      <li>🌿 CO₂ Saved: ${co2} kg</li>
      <li>⏱️ Hours Volunteered: ${hours}</li>
      <li>💸 Donations Made: $${donations}</li>
    </ul>
  `;
  document.getElementById('summary').innerHTML = summary;
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
