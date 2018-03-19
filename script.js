// import Chart from 'chart.js';

// National Chart
// Regional Chart

const modelsBMW = [
  'X1',
  'X3',
  'X5',
  '2-Series',
  '3-Series',
  '4-Series',
  '5-Series',
  '7-Series'
];
const salesNational = [245, 346, 458, 238, 234, 123, 657, 342];
const regionalGuess = salesNational.map(num => Math.floor(num / 4));
const salesRegional = {
  north: regionalGuess,
  south: regionalGuess,
  east: regionalGuess,
  west: regionalGuess
};

const labels = ['', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'BMW'];
const data = [12, 19, 3, 5, 2, 3, 30];

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: modelsBMW,
    datasets: [
      // {
      //   label: 'National Sales',
      //   data: salesNational,
      //   backgroundColor: [
      //     'rgba(255, 99, 132, 0.2)',
      //     'rgba(54, 162, 235, 0.2)',
      //     'rgba(255, 206, 86, 0.2)',
      //     'rgba(75, 192, 192, 0.2)',
      //     'rgba(153, 102, 255, 0.2)',
      //     'rgba(255, 159, 64, 0.2)',
      //     'rgba(0, 0, 0, 0.2)'
      //   ],
      //   borderColor: [
      //     'rgba(255,99,132,1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //     'rgba(75, 192, 192, 1)',
      //     'rgba(153, 102, 255, 1)',
      //     'rgba(255, 159, 64, 1)',
      //     'rgba(0, 0, 0, 1)'
      //   ],
      //   borderWidth: 5
      // },
      {
        label: 'North',
        data: salesRegional.north,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)',
          'rgba(255,99,132,1)'    ],
        borderWidth: 2
      },
      {
        label: 'South',
        data: salesRegional.south,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 2
      },
      {
        label: 'East',
        data: salesRegional.east,
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2
      },
      {
        label: 'West',
        data: salesRegional.west,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)'   ],
        borderWidth: 2
      }
    ]
  },
  options: {
    title: {display: true, text: "2017 BMW Car Sales",fontSize: 48, fontColor: "white"},
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: '$ in Millions',
            fontSize: 24,
            fontColor: "white"
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Models',
            fontSize: 24,
            fontColor: "white"
          }
        }
      ]
    }
  }
});
