// import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';

import AnalyticsChartApp from "analytics_chart/App";
import SettingApp from "../SettingApp/SettingApp";
import MainLayout from "./Layout/Layout";

const App = () => {
  const [options, setOptions] = useState({});
  const handleSubmit = (data) => setOptions(data);
  return (
    <MainLayout>
      <Typography level="h1">App shell</Typography>
      <AnalyticsChartApp options={options} />
      <SettingApp onSubmit={handleSubmit} />
    </MainLayout>
  );
};

export default App;
