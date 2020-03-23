import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Chart extends Component {

    createChart(){
        let chart = am4core.create("chartdiv", am4charts.XYChart);
// Set up precision for numbers
        chart.numberFormatter.numberFormat = "#,###.####";
        chart.startDuration = 0;

// Create axes
        let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        xAxis.dataFields.category = "value";
//xAxis.renderer.grid.template.location = 0;
        xAxis.renderer.minGridDistance = 50;
        xAxis.title.text = "Price (BTC/ETH)";

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.title.text = "Volume";

// Create series
        let series = chart.series.push(new am4charts.StepLineSeries());
        series.interpolationDuration = 0;
        series.dataFields.categoryX = "value";
        series.dataFields.valueY = "bidstotalvolume";
        series.strokeWidth = 2;
        series.stroke = am4core.color("#0f0");
        series.fill = series.stroke;
        series.fillOpacity = 0.1;
        series.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

        let series2 = chart.series.push(new am4charts.StepLineSeries());
        series2.interpolationDuration = 0;
        series2.dataFields.categoryX = "value";
        series2.dataFields.valueY = "askstotalvolume";
        series2.strokeWidth = 2;
        series2.stroke = am4core.color("#f00");
        series2.fill = series2.stroke;
        series2.fillOpacity = 0.1;
        series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

        let series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.interpolationDuration = 0;
        series3.dataFields.categoryX = "value";
        series3.dataFields.valueY = "bidsvolume";
        series3.strokeWidth = 0;
        series3.fill = am4core.color("#000");
        series3.fillOpacity = 0.2;

        let series4 = chart.series.push(new am4charts.ColumnSeries());
        series4.interpolationDuration = 0;
        series4.dataFields.categoryX = "value";
        series4.dataFields.valueY = "asksvolume";
        series4.strokeWidth = 0;
        series4.fill = am4core.color("#000");
        series4.fillOpacity = 0.2;

// Add cursor
        chart.cursor = new am4charts.XYCursor();
        this.chart = chart;
    }

    componentWillReceiveProps(nextProps){
        console.log("Chart received props", nextProps);
        let data = [];
        if(!this.chart && nextProps.bids.length && nextProps.asks.length){
            this.createChart();
            this.chart.data = this.doChart(nextProps.bids, nextProps.asks);
        } else if(this.chart) {
            this.chart.data = this.doChart(nextProps.bids, nextProps.asks);
            // this.chart.validateData();
        }
    }

    doChart(bids, asks){
        function processData(list, type, desc) {
            console.log(list);
            // Convert to data points
            for(var i = 0; i < list.length; i++) {
                list[i] = {
                    value: Number(list[i]['P']),
                    volume: Number(list[i][['Q']]),
                }
            }

            // Sort list just in case
            list.sort(function(a, b) {
                if (a.value > b.value) {
                    return 1;
                }
                else if (a.value < b.value) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            // Calculate cummulative volume
            if (desc) {
                for(var i = list.length - 1; i >= 0; i--) {
                    if (i < (list.length - 1)) {
                        list[i].totalvolume = list[i+1].totalvolume + list[i].volume;
                    }
                    else {
                        list[i].totalvolume = list[i].volume;
                    }
                    let dp = {};
                    dp["value"] = list[i].value;
                    dp[type + "volume"] = list[i].volume;
                    dp[type + "totalvolume"] = list[i].totalvolume;
                    res.unshift(dp);
                }
            }
            else {
                for(var i = 0; i < list.length; i++) {
                    if (i > 0) {
                        list[i].totalvolume = list[i-1].totalvolume + list[i].volume;
                    }
                    else {
                        list[i].totalvolume = list[i].volume;
                    }
                    let dp = {};
                    dp["value"] = list[i].value;
                    dp[type + "volume"] = list[i].volume;
                    dp[type + "totalvolume"] = list[i].totalvolume;
                    res.push(dp);
                }
            }
        }
        let res = []
        processData(bids, "bids", true);
        processData(asks, "asks", false);
        return res;
    }

    componentDidMount() {
        // this.doChart();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
                <h2>Chart</h2>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </div>
        );
    }
}

Chart.propTypes = {
};

export { Chart };