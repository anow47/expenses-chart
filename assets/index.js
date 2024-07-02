const total = document.querySelector('.total-spendings')
var barColors = ["#ec775f", "#ec775f", "cyan", "#ec775f", "#ec775f", "#ec775f", "#ec775f"];

const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]		
const amountCount = data.map(e => e.amount)
const daysCount = data.map(e => e.day)
const amountSum = amountCount.reduce((acc, curr) => acc + curr, 0)
total.textContent = `$${amountSum}`

new Chart("myChart", {
    type: "bar",
    data: {
        labels: daysCount,
        datasets: [{
            backgroundColor: barColors,
            borderRadius: 5,
            data: amountCount,
        }]
    },
    options: {
        plugins: {
            title: {display: false},
            legend: {display: false},
        },
        scales: {
            y: {display: false,},
            x: {
                display: true,
                border: {color: '#fff'},
                grid: {display: false}
            }
        }
    }
});

