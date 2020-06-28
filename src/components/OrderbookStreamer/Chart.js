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
        xAxis.renderer.labels.template.fontSize = 12;
        xAxis.title.text = "Price (BTC/ETH)";

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.title.text = "Volume";
        yAxis.max = 40;
        yAxis.min = 0;
        yAxis.keepSelection = true;
        yAxis.start = 0;
        yAxis.end = 1;

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
        let data = [];
        // nextProps.bids.reverse();
        nextProps.bids.sort(function (a, b) {
            return a.value - b.value;
        });
        nextProps.asks.sort(function (a, b) {
            return a.value - b.value;
        });
        data = nextProps.bids.slice(-40).concat(nextProps.asks.slice(0,40));
        if(!this.chart && nextProps.bids.length && nextProps.asks.length){
            this.createChart();
            this.chart.data = data;
        } else if(this.chart) {
            this.chart.data = data;
            // this.chart.validateData();
        }
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
            <div className={"row"} style={{marginTop:"20px", position:"relative"}}>
                <div className="col-md-12" style={{ position: "absolute", height:"400px", width:"100%", paddingTop:"70px"}}>
                    <div className="row">
                        <div
                            className="col-md-4 text-right"
                            style={{color: "#5cb85c"}}
                        >
                            bid
                        </div>
                        <div
                            className="col-md-4 text-center"
                            style={{fontSize:"20px", fontWeight:"bold"}}
                        >
                            mid
                        </div>
                        <div
                            className="col-md-4 text-left"
                            style={{color: "#d44d3d"}}
                        >
                            ask
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right">Buy</div>
                        <div
                            className="col-md-4 text-center">Spread
                        </div>
                        <div className="col-md-4 text-left">Sell</div>
                    </div>
                </div>
                <div id="chartdiv"className="col-md-12" style={{ width: "100%", height: "400px" }}></div>
            </div>
        );
    }
}

Chart.propTypes = {
};

export { Chart };