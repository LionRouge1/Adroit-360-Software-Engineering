import React, { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AgentForm from './AgentForm';
import { MessageContext } from '../../contexts/MessageContext';

const CreateAgent: FC = () => {
  const [agentData, setAgentData] = useState({
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
    const agentDatas = {...agentData, practiceAreas: agentData.practiceAreas.join(', ')}
    axios.post('/agents', {agentDatas})
    .then(({data}) => {
      navigate(`/agents/${data.id}`);
      setMessage({message: 'Agent created successfully', type: 'success'});
    })
    .catch((error) => {
      setMessage({message: 'Error creating agent', type: 'danger'});
    });

  };

  return (
    <AgentForm agentDatas={{agentData, setAgentData}} handleSubmit={handleSubmit} />
  );
}

export default CreateAgent;