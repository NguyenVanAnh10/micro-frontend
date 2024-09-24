import React from "react";
import HighchartsReact from "highcharts-react-official";
import DarkUnica from "highcharts/themes/dark-unica";
import Highcharts from "highcharts/highstock";

export default function DarkChart({ optionsChart }) {
  DarkUnica(Highcharts);
  Highcharts["_modules"]["Extensions/Themes/DarkUnica.js"].apply();
  console.log("DarkChart");

  return (
    <HighchartsReact
      constructorType={"stockChart"}
      highcharts={Highcharts}
      options={optionsChart}
    />
  );
}
