import React, { useContext } from 'react';
import { MessageContext } from '../../contexts/MessageContext';

const MessageDisplay: React.FC = () => {
  const { message, clearMessage } = useContext(MessageContext);

  if(!message.type) return null;
  return (
    <div className={`alert alert-${message.type}`} role="alert">
      <span>{message.message}</span>
      <button type="button" onClick={clearMessage} className="btn btn-outline-dark">Dismiss</button>
    </div>
  );
};

export default MessageDisplay;