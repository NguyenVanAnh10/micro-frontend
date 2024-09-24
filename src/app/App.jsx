// import './App.css';
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";

import AnalyticsChartApp from "analytics_chart/App";
import SettingApp from "../SettingApp/SettingApp";
import MainLayout from "./Layout/Layout";
import { ColorModeContext } from "./context/ColorModeContext";

const App = () => {
  const [options, setOptions] = useState({});
  const { mode, setMode } = useColorScheme();

  const handleSubmit = (data) => setOptions(data);
  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <MainLayout>
        <AnalyticsChartApp options={options} mode={mode} />
        <SettingApp onSubmit={handleSubmit} mode={mode} />
      </MainLayout>
    </ColorModeContext.Provider>
  );
};

export default () => (
  <CssVarsProvider disableTransitionOnChange>
    <App />
  </CssVarsProvider>
);
