import React from 'react';
import { IAgentFilter } from '../../types/Agent';

const AgentFilter: React.FC<IAgentFilter> = ({ practiceAreas, onFilterChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="col-md-4">
      <select
        id="practiceArea"
        onChange={handleChange}
        className="form-select form-select-lg mb-3"
      >
        <option value="">Filter by Practice Area:</option>
        <option value="All">All</option>
        {practiceAreas.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgentFilter;