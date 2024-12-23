import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAgent } from '../../hooks/useAgent';
import Reviews from '../Reviews/Reviews';

const AgentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { agent, loading } = useAgent(id as string);
  const navigate = useNavigate();

  const confirmDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this agent?');

    if (confirm) {
      // delete agent
      navigate(`/agents/${id}/delete`);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!agent) return <h2>Agent not found</h2>;
  return (
    <div className="container">
      <div className="row" style={{ height: '150px' }}>
        <img
          className="col-md-3"
          src={agent?.photoUrl}
          alt={`${agent?.firstName}'s photo`}
          style={{ height: '100%' }}
        />
        <div className="col-md-8">
          <h3>{`${agent?.firstName} ${agent?.lastName}`}</h3>
          <p className="d-flex justify-content-space-between"><span><strong>Address: </strong> {agent?.address} </span><span><strong>Licence: </strong> {agent?.agentLicence} </span></p>
        </div>
      </div>
      <div className="row">
        <ul className="col-md-3 list-group">
          <h4>Practice Areas</h4>
          {agent?.practiceAreas?.map((area) => (
            <li key={area} className="list-group-item">{area}</li>
          ))}
        </ul>
        <div className="col-md-8">
          <h4>About Me</h4>
          <p>{agent?.aboutMe}</p>
        </div>
        <div className="d-flex space-between">
        <Link to={`/agents/${id}/edit`} className="btn btn-primary">Edit</Link>
        <button type="button" onClick={confirmDelete} className='btn btn-danger'>Delete</button>
        </div>
      </div>

      <div>
        <Reviews agent={agent} />
      </div>
    </div>
  );
};

export default AgentDetails;