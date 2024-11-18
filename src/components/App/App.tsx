import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentDetails from "../Agents/AgentDetails";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="agents/:id" element={<AgentDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
