import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  FluentProvider,
  Text,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import DarkChart from "./Chart/DarkChart";
import LightChart from "./Chart/LightChart";
import { Typography } from "@mui/joy";
// import "./globals.scss";

const App = ({ options, mode }) => {
  console.log(options);

  const groupingUnits = [
    [
      "week", // unit name
      [1], // allowed multiples
    ],
    ["month", [1, 2, 3, 4, 6]],
  ];
  const [{ ohlc, volume }, setState] = useState({ ohlc: [], volume: [] });
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://demo-live-data.highcharts.com/aapl-ohlcv.json"
      ).then((response) => response.json());

      // split the data set into ohlc and volume
      const ohlc = [],
        volume = [],
        dataLength = data.length;
      // set the allowed units for data grouping

      for (let i = 0; i < dataLength; i += 1) {
        ohlc.push([
          data[i][0], // the date
          data[i][1], // open
          data[i][2], // high
          data[i][3], // low
          data[i][4], // close
        ]);

        volume.push([
          data[i][0], // the date
          data[i][5], // the volume
        ]);
      }

      setState({ ohlc, volume });
    };
    getData();
  }, []);

  const optionsChart = {
    rangeSelector: {
      selected: 4,
    },

    title: {
      text: options.chartTitle || "Chart Demo",
    },
    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },
    plotOptions: {
      candlestick: {
        color: "pink",
        lineColor: "red",
        upColor: "lightgreen",
        upLineColor: "green",
      },
      area: {
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        color: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgb(199, 113, 243)"],
            [0.7, "rgb(76, 175, 254)"],
          ],
        },
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: options.chartType || "area",
        name: "AAPL",
        data: ohlc,
        dataGrouping: {
          units: groupingUnits,
        },
      },
      {
        type: "column",
        name: "Volume",
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits,
        },
      },
    ],
  };

  return (
    <Card className="content">
      <Text as="h1" color="red" style={{ fontSize: 24, color: "red" }}>
        Micro App
      </Text>
      {mode == "dark" ? (
        <DarkChart optionsChart={optionsChart} />
      ) : (
        <LightChart optionsChart={optionsChart} />
      )}
    </Card>
  );
};

const AppComponent = ({ ...props }) => {
  const { mode } = props;
  console.log("remote", { mode });
  return (
    <FluentProvider theme={mode == "light" ? webLightTheme : webDarkTheme}>
      <App {...props} />
    </FluentProvider>
  );
};
export default AppComponent;
