import Chart from 'react-apexcharts';

const Barchart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Calebe', 'Luanda', 'Santiago', 'Valadares']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6]                   
            }
        ]
    };
    
    return (
        <Chart
            options = {{ ...options, xaxis: mockData.labels }}
            series = {mockData.series}
            type = "bar"
            height = "240"
        />
    );
};

export default Barchart;