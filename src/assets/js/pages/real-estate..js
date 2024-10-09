// Real Estate Dashboard Js

// Chart Widget 1
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#50cd89"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Chart Widget 2
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#f1416c"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// Chart Widget 3
var options = {
    series: [
        {
            data: [0, 82, 60, 65, 0, 10, 80, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#50cd89"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();

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
        height: 400,
    },
    legend: {
        show: true,
        position: 'bottom',
        verticalAlign: 'bottom',
        align: 'center'
    },
};
var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();

// analytics
var options = {
    series: [14, 21, 10, 12, 17, 21],
    chart: {
        type: 'polarArea',
        height: 400,
    },
    legend: {
        show: true,
        position: 'bottom',
        verticalAlign: 'bottom',
        align: 'center'
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
};
var chart = new ApexCharts(document.querySelector("#analytics"), options);
chart.render();