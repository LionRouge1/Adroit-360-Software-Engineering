import { useState, useEffect } from 'react';
import { IAgent } from '../types/Agent';
import axios from 'axios';

export const useAgent = (id: string) => {
  const [agent, setAgent] = useState<IAgent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgent = async () => {
      axios.get(`/agents/${id}`)
        .then((response) => {
          setLoading(false);
          setAgent(response.data);
        })
        .catch((error) =>{
          setLoading(false);
          console.error('Error fetching agent:', error);
        });
    };

    fetchAgent();
  }, [id]);

  return { agent, loading };
};

export const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};