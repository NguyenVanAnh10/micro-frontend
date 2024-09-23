// import './App.css';
import AnalyticsChartApp from "analytics_chart/App";

import { Button } from "@carbon/react";
import SettingApp from "../SettingApp/SettingApp";
import { useState } from "react";
import "./globals.scss";

const App = () => {
  const [options, setOptions] = useState({});
  const handleSubmit = (data) => setOptions(data);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button>Button</Button>
      <AnalyticsChartApp options={options} />
      <SettingApp onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
