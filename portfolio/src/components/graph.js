// INITIAL STATE DATA
var x_data = ['0', 'ka', 'ba'];
var y_data = [0,2,4];

// GLOBALS
var activePoint = null;
var canvas = null;

// DRAW A LINE CHART ON CANVAS
window.onload = function () {

    // DRAW GRAPH
    var ctx = document.getElementById("canvas").getContext("2d");
    canvas = document.getElementById("canvas");
    window.myChart = Chart.Line(ctx, {
        data: {
            labels: ['0', 'ka', '2ka'],
            datasets: [
                {
                    data: [0,2, null],
                    label: "imaginary component",
                    borderColor: "#000000",
                    pointBackgroundColor: 'rgb(0,0,0)',
                    pointRadius: 8,
                    fill: false
                },
                {
                    data: [ null ,null, 4],
                    label: "imaginary component",
                    borderColor: "#FFFFFF",
                    pointBackgroundColor: 'rgb(255,255,255)',
                    fill: false
                }
            ]
        },
        options: {
            animation: {duration: 200},
            tooltips: {
                mode: 'nearest',
                enabled: false},
            hover: {mode: null},
            legend: {display: false},
            scales: {
                xAxes: [{display: false}],
                yAxes: [{display: false}]
            },
            elements: {
                line: {
                    tension: 0
                }
            }
        }
    });

    // SET POINTER EVENT HANDLERS FOR CANVAS ELEMENT 
    canvas.onpointerdown = down_handler;
    canvas.onpointerup = up_handler;
    canvas.onpointermove = null;
};


function down_handler(event) {
    // check for data point near event location
    const points = window.myChart.getElementAtEvent(event, {intersect: false});
    if (points.length > 0) {
        // grab nearest point, start dragging
        activePoint = points[0];
        canvas.onpointermove = move_handler;
    };
};

function up_handler(event) {
    // release grabbed point, stop dragging
    activePoint = null;
    canvas.onpointermove = null;
};

function move_handler(event)
{
    // locate grabbed point in chart data
    if (activePoint != null) {
        var data = activePoint._chart.data;
        var datasetIndex = activePoint._datasetIndex;

        // read mouse position
        const helpers = Chart.helpers;
        var position = helpers.getRelativePosition(event, myChart);

        // convert mouse position to chart y axis value 
        var chartArea = window.myChart.chartArea;
        var yAxis = window.myChart.scales["y-axis-0"];
        var yValue = map(position.y, chartArea.bottom, chartArea.top, yAxis.min, yAxis.max);

        // update y value of active data point
        data.datasets[datasetIndex].data[activePoint._index] = yValue;
        window.myChart.update();

        if (2.7 < yValue &&  2.8 > yValue){
            data.datasets[0].pointBackgroundColor = 'rgb(255,0,0)';
            data.datasets[0].borderColor = 'rgb(255,0,0)';
            window.myChart.update();
        } else {
            data.datasets[0].pointBackgroundColor = 'rgb(0,0,0)';
            data.datasets[0].borderColor = 'rgb(0,0,0)';
            window.myChart.update();
        }
    };
};

// MAP VALUE TO OTHER COORDINATE SYSTEM
function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
};