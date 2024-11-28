import { FC, useContext, useEffect, useState } from "react";
import { IAgent, IAgentDetails } from "../../types/Agent";
import { useNavigate, useParams } from "react-router-dom";
import { useAgent } from "../../hooks/useAgent";
import AgentForm from "./AgentForm";
import axios from "axios";
import { MessageContext } from "../../contexts/MessageContext";

const EditAgent: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { agent, loading } = useAgent(id as string);
  const navigate = useNavigate()
  const { setMessage } = useContext(MessageContext)

  const [agentData, setAgentData] = useState({
    firstName: agent?.firstName || '',
    lastName: agent?.lastName || '',
    photoUrl: agent?.photoUrl || '',
    agentLicence: agent?.agentLicence || '',
    address: agent?.address || '',
    practiceAreas: agent?.practiceAreas || [],
    aboutMe: agent?.aboutMe || ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('dkdkd dnske');


    const agentDatas = {...agentData, practiceAreas: agentData.practiceAreas.join(', ')}
    axios.put(`/agents/${id}`, { agentDatas })
    .then((data) => {
      console.log(id, data);
      navigate('/');
      setMessage({message: 'Agent updated successful', type: 'success'})
    })
    .catch((error) => {
      console.log(error);
      setMessage({message: error, type: 'danger'})
    })
  };

  useEffect(() => {
    setAgentData({
      firstName: agent?.firstName!,
      lastName: agent?.lastName!,
      photoUrl: agent?.photoUrl!,
      agentLicence: agent?.agentLicence!,
      address: agent?.address!,
      practiceAreas: agent?.practiceAreas!,
      aboutMe: agent?.aboutMe!
    });
  }, [agent]);

  if (loading) return <h2>Loading...</h2>;
  if (!agent) return <h2>Agent not found</h2>;

  return (
    <AgentForm agentDatas={{ agentData, setAgentData }} handleSubmit={handleSubmit} />
  );
};

export default EditAgent;