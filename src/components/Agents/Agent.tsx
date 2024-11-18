import type { FC } from "react";
import { Link } from "react-router-dom";
import { IAgent } from "../../types/Agent";
import { truncateText } from "../../hooks/useAgent";

import './Agent.css'


const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  const { id, firstName, lastName, photoUrl, aboutMe } = agent;
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={photoUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">{truncateText(aboutMe, 30)}</p>
        <Link to={`/agents/${id}`} className="btn btn-primary">Read more...</Link>
      </div>
    </div>
  );
};

export default Agent;
