import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { MessageContext } from '../../contexts/MessageContext';

const DeleteAgent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setMessage } = useContext(MessageContext);
  console.log(id);
  const handleDelete = async () => {
    axios.delete(`/agents/${id}`)
    .then((data) => {
      console.log(id);
      navigate('/');
      setMessage({message: 'Agent deleted successfully', type: 'success'});
    })
    .catch((error) => {
      setMessage({message: 'Error deleting agent', type: 'danger'});
    });
  };

  useEffect(() => {
    handleDelete();
  }, []);

  return null;
};

export default DeleteAgent;