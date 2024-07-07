document.addEventListener('DOMContentLoaded', () => {
    const total = document.querySelector('.total-spendings');
    const balance = document.querySelector('.balance');
    var barColors = ["#ec775f", "#ec775f", "cyan", "#ec775f", "#ec775f", "#ec775f", "#ec775f"];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const myBalance = 921.48
            const amountCount = data.map(e => e.amount);
            const daysCount = data.map(e => e.day);
            const amountSum = amountCount.reduce((acc, curr) => acc + curr, 0);
            total.textContent = `$${amountSum}`;
            balance.textContent = `$${myBalance - amountSum}`;

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
                        title: { display: false },
                        legend: { display: false },
                    },
                    scales: {
                        y: { display: false },
                        x: {
                            display: true,
                            border: { color: '#fff' },
                            grid: { display: false }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
