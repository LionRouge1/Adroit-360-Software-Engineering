import React, { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AgentForm from './AgentForm';
import { MessageContext } from '../../contexts/MessageContext';

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
  const { setMessage } = useContext(MessageContext);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const agentData = {...agent, practiceAreas: agent.practiceAreas.join(', ')}
    axios.post('/agents', {agentData})
    .then(({data}) => {
      navigate(`/agents/${data.id}`);
      setMessage({message: 'Agent created successfully', type: 'success'});
    })
    .catch((error) => {
      setMessage({message: 'Error creating agent', type: 'danger'});
    });

  };

  return (
    <AgentForm agentData={{agent, setAgent}} handleSubmit={handleSubmit} />
  );
}

export default CreateAgent;