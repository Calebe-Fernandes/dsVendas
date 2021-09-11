import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';

type SeriesData = {
    name: string;
    data: number [];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const Barchart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/succes-by-seller`)
            .then(response => {

                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited,1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Success",
                            data: mySeries                  
                        }
                    ]
                });
            });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
        
    return (
        <Chart
            options = {{ ...options, xaxis: chartData.labels }}
            series = {chartData.series}
            type = "bar"
            height = "240"
        />
    );
};

export default Barchart;