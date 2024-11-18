import React, { FC, useState } from 'react';
import axios from 'axios';
import AgentForm from './AgentForm';

const CreateAgent: FC = () => {
  const [agent, setAgent] = useState({
    firstName: '',
    lastName: '',
    photoUrl: '',
    agentLicence: '',
    address: '',
    practiceAreas: [] as string[],
    aboutMe: ''
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const agentData = {...agent, practiceAreas: agent.practiceAreas.join(', ')}
    axios.post('/agents', {agentData})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  };

  return (
    <AgentForm agentData={{agent, setAgent}} handleSubmit={handleSubmit} />
  );
}

export default CreateAgent;