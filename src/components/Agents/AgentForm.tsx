import React, { FC, useState } from 'react';
import { IAgent } from '../../types/Agent';
import axios from 'axios';

const AgentForm: FC = () => {
  const [agent, setAgent] = useState({
    firstName: '',
    lastName: '',
    photoUrl: '',
    agentLicence: '',
    address: '',
    practiceAreas: [] as string[],
    aboutMe: ''
  });
  const practiceAreas = ['Los Angeles', 'San Diego', 'New York', 'Miami'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAgent((prevAgent) => ({
      ...prevAgent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const agentData = {...agent, practiceAreas: agent.practiceAreas.join(', ')}
    axios.post('/agents', {agentData})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  const handleCheckboxChange = (area: string) => {
    setAgent((prevAgent) => ({
      ...prevAgent,
      practiceAreas: prevAgent.practiceAreas?.includes(area)
        ? prevAgent.practiceAreas?.filter((pArea) => pArea !== area)
        : [...prevAgent.practiceAreas, area]
    }));
  };

  return (
    <div className="agent-form">
      <h1>Add a New Agent</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4 mb-3">
          <label htmlFor="firstname" className="form-label">First name</label>
          <input type="text" className="form-control" onChange={handleChange} id="firstname" name="firstName" placeholder="First name" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="lastname" className="form-label">Last name</label>
          <input type="text" onChange={handleChange} className="form-control" id="lastname" name="lastName" placeholder="Last name" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="photourl" className="form-label">Photo Url</label>
          <input type="text" onChange={handleChange} className="form-control" id="photourl" name="photoUrl" placeholder="https://image.domain.com/image.png" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="agentLicence" className="form-label">Agent Licence</label>
          <input type="text" onChange={handleChange} className="form-control" id="agentLicence" name="agentLicence" placeholder="1234567890" required />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" onChange={handleChange} className="form-control" id="address" name="address" placeholder="Address" required />
        </div>
        <h4>Select Practice Areas</h4>
        {
          practiceAreas.map((area) => (
            <div className="form-check" key={area}>
              <input
                className="form-check-input"
                onChange={() => handleCheckboxChange(area)}
                type="checkbox"
                checked={agent.practiceAreas?.includes(area)}
                value={area}
                id={area}
              />
              <label className="form-check-label" htmlFor={area}>
                {area}
              </label>
            </div>
          ))
        }
        <div className="col-md-6 mb-3">
          <label htmlFor="aboutMe" className="form-label">About Me</label>
          <textarea onChange={handleChange} className="form-control" id="aboutMe" name="aboutMe" placeholder="About Me" required />
        </div>
        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default AgentForm;