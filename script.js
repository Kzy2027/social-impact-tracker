const ctx = document.getElementById('co2Chart').getContext('2d');

const co2Chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'CO₂ ppm',
      data: [399.4, 404.2, 406.5, 408.5, 411.4, 414.2, 416.7],
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      borderColor: 'rgba(46, 204, 113, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
