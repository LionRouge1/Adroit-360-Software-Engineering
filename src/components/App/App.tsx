import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgentDetails from "../Agents/AgentDetails";
import CreateReview from "../Reviews/CreateReview";
import MessageDisplay from "../message/MessageDisplay";
import CreateAgent from "../Agents/CreateAgent";

const App: FC = () => {
  return (
      <BrowserRouter>
        <MessageDisplay />
        <Routes>
          <Route path="/" element={<Agents />} />
          <Route path="agents/:id" element={<AgentDetails />} />
          <Route path="/agent/create" element={<CreateAgent />} />
          <Route path="/agents/:id/reviews/create" element={<CreateReview />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
