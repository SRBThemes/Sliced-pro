// Real Estate Dashboard Js

// overview
var options = {
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'column',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
        height: 360,
        type: 'bar',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 4]
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
        {
            seriesName: 'Income',
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#008FFB'
            },
            labels: {
                style: {
                    colors: '#008FFB',
                }
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Cashflow',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#00E396'
            },
            labels: {
                style: {
                    colors: '#00E396',
                }
            },
        },
        {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#FEB019'
            },
            labels: {
                style: {
                    colors: '#FEB019',
                },
            },
        },
    ],
    legend: {
        horizontalAlign: 'left',
        offsetX: 40
    }
};

var chart = new ApexCharts(document.querySelector("#overview"), options);
chart.render();

// pie chart
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        type: 'donut',
        width: '100%',
    },
    legend: {
        show: true,
        position: 'bottom',
        floating: true,
        verticalAlign: 'bottom',
        align: 'center'
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 250,
                height: 200
            },
        },
    }]
};
var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();

// analytics
var options = {
    series: [14, 21, 10, 12, 17, 21],
    chart: {
        type: 'polarArea',
    },
    legend: {
        show: true,
        position: 'bottom',
        floating: true,
        verticalAlign: 'bottom',
        align: 'center'
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#analytics"), options);
chart.render();