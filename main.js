var ctx = document.getElementById('stock-graph').getContext('2d');

var chart = new Chart(ctx, {

type: 'line',

data: {

labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

datasets: [{

label: 'AAPL Stock Price',

data: [120, 125, 140, 150, 145, 170, 180],

backgroundColor: 'rgba(0, 255, 120, 0.2)',
borderColor: 'rgba(0, 255, 120, 1)',

borderWidth: 2

},

{

    label: 'GOOGL Stock Price',
    
    data: [120, 130, 100, 150, 180, 150, 130],
    
    backgroundColor: 'rgba(0, 200, 255, 0.2)',
    borderColor: 'rgba(0, 200, 255, 1)',
    
    borderWidth: 2
    
},

{

    label: 'MSFT Stock Price',
    
    data: [110, 115, 150, 140, 135, 170, 201],
    
    backgroundColor: 'rgba(255, 255, 120, 0.2)',
    borderColor: 'rgba(255, 255, 120, 1)',
    
    borderWidth: 2
    
},

{
    label: 'TSLA Stock Price',
    data: [170, 145, 110, 90, 85, 82, 88],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2
}
]

},

options: {

scales: {

y: {

beginAtZero: true

}

}

}

});

