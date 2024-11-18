import { createContext, useState } from 'react';
import { IMessage, IMessageContext } from '../types/Message';

export const MessageContext = createContext({} as IMessageContext);

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<IMessage>({
    type: '',
    message: ''
  } as IMessage);

  const clearMessage = () => setMessage({type: '', message: ''});

  return (
    <MessageContext.Provider value={{message, setMessage, clearMessage}}>
      {children}
    </MessageContext.Provider>
  );
}


