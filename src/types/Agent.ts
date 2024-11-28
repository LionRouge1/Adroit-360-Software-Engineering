export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string[];
  aboutMe: string;
}

export interface IAgentDetails {
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicence: string;
  address: string;
  practiceAreas: string[];
  aboutMe: string;
}

export interface IAgentForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  agentDatas: {agentData: IAgentDetails, setAgentData: React.Dispatch<React.SetStateAction<IAgentDetails>>}
}

export interface IAgentFilter {
  practiceAreas: string[];
  onFilterChange: (selectedArea: string) => void;
}

export interface IAgentEdit {
  editing: IAgent
}