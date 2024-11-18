import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import AgentFilter from "./AgentFilter";
import { Link } from "react-router-dom";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const practiceAreas = ['Los Angeles', 'San Diego', 'New York', 'Miami'];
  const originalAgents = useRef<IAgent[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const { data } = await axios.get("/agents");
      setAgents(data);
      originalAgents.current = data;
    }
    fetchInitialData();
  }, [originalAgents]);

  const onFilterChange = (filter: string) => {
    if(filter === 'All') return setAgents(originalAgents.current);
    if(!filter) return

    const filteredAgents = originalAgents.current.filter((agent) => agent.practiceAreas.includes(filter));
    setAgents(filteredAgents);
    console.log(filteredAgents)
  };

  return (
    <section className="container">
      <div className="row">
        <AgentFilter practiceAreas={practiceAreas} onFilterChange={onFilterChange} />
        <Link to={'/agent/create'} className="btn btn-primary col-md-3">Join Team</Link>
      </div>
      <div className="agents">
        {agents.map((agent) => (
          <Agent key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default Agents;
