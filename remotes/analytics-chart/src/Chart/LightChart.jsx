import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import SandSignika from "highcharts/themes/brand-light";

export default function LightChart({ optionsChart }) {
  SandSignika(Highcharts);
  Highcharts["_modules"]["Extensions/Themes/BrandLight.js"].apply();

  return (
    <HighchartsReact
      constructorType={"stockChart"}
      highcharts={Highcharts}
      options={optionsChart}
    />
  );
}
