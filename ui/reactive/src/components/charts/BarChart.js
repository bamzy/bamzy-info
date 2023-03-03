import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.url = props.url
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }
  reloadData(){
    console.log("url:"+this.props.url)
    axios.get(this.props.url).then((resp)=>{
      debugger;
      let newdata = resp.data.map((item)=>{
        return item.value;
      });
      let xAxix = resp.data.map((item)=>{
        return item.x;
      });
      let final = [{name: "Daily traffic",data: newdata}];
      console.dir("reload called:"+final)
      this.setState({
        chartData: final,
        // chartData: this.props.chartData,
        chartOptions: this.getOptions(xAxix),
        // chartOptions: this.props.chartOptions,
      });
    });
  }
  componentDidMount() {
    console.log('did mount')
    if(this.props.url) this.reloadData();

  }

  getOptions(cats){
    return {
      chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
        onDatasetHover: {
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
        },
        theme: "dark",
      },
      xaxis: {
        categories: cats,
        show: false,
        labels: {
          show: true,
          style: {
            colors: "#A3AED0",
            fontSize: "14px",
            fontWeight: "500",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        color: "black",
        labels: {
          show: true,
          style: {
            colors: "#CBD5E0",
            fontSize: "14px",
          },
        },
      },
      grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: true,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            [
              {
                offset: 0,
                color: "#4318FF",
                opacity: 1,
              },
              {
                offset: 100,
                color: "rgba(67, 24, 255, 1)",
                opacity: 0.28,
              },
            ],
          ],
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "40px",
        },
      },
    };
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type='bar'
        width='100%'
        height='100%'
      />
    );
  }
}

export default ColumnChart;