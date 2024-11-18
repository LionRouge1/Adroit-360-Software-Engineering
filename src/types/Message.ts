export interface IMessage {
  type: string;
  message: string;
}

export interface IMessageContext {
  message: IMessage;
  setMessage: React.Dispatch<React.SetStateAction<IMessage>>;
  clearMessage: () => void;
}