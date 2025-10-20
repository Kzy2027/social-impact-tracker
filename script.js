// CO₂ Calculator + Mood + Info Quality
document.getElementById('usage-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const hours = parseFloat(document.getElementById('hours').value);
  const data = parseFloat(document.getElementById('data').value);
  const quality = parseInt(document.getElementById('quality').value);
  const mood = document.getElementById('mood').value;

  const co2 = data * 5;
  const message = `
    <h3>Your Digital Footprint</h3>
    <p>🕒 Time Spent: ${hours} hours</p>
    <p>📶 Data Used: ${data} GB</p>
    <p>🌫️ Estimated CO₂ Emitted: ${co2} grams</p>
    <p>📊 Info Quality Rating: ${quality}/5</p>
    <p>🧠 Mood After Use: ${mood}</p>
    <p>💡 Tip: Try offline activities or set screen limits!</p>
  `;
  document.getElementById('result').innerHTML = message;
});

// Digital Detox Timer
document.getElementById('start-detox').addEventListener('click', () => {
  const minutes = parseInt(document.getElementById('detox-time').value);
  if (isNaN(minutes) || minutes <= 0) return;

  document.getElementById('detox-message').innerHTML = `
    <h3>🌿 Detox in Progress</h3>
    <p>Relax for ${minutes} minutes. Breathe. No scrolling.</p>
  `;

  setTimeout(() => {
    document.getElementById('detox-message').innerHTML = `
      <h3>✅ Detox Complete</h3>
      <p>Great job! Try journaling or going for a walk.</p>
    `;
  }, minutes * 60000);
});

// Impact Stories Wall
document.getElementById('story-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const story = document.getElementById('story-text').value;
  const storyDiv = document.createElement('div');
  storyDiv.innerHTML = `<p>📝 ${story}</p>`;
  document.getElementById('story-wall').appendChild(storyDiv);
  document.getElementById('story-text').value = '';
});

// Eco Score Calculator
document.getElementById('calculate-score').addEventListener('click', () => {
  const hours = parseFloat(document.getElementById('hours').value || 0);
  const data = parseFloat(document.getElementById('data').value || 0);
  const quality = parseInt(document.getElement