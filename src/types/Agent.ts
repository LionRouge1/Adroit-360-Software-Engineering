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
  agentData: {agent: IAgentDetails, setAgent: React.Dispatch<React.SetStateAction<IAgentDetails>>}
}

export interface IAgentFilter {
  practiceAreas: string[];
  onFilterChange: (selectedArea: string) => void;
}