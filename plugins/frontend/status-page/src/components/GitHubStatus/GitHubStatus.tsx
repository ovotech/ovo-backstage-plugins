import React from 'react';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat, useStatusData } from '../../utils';
import Github from '../../assets/github.png';

export const GitHubStatus: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const statusData = useStatusData(
    'https://www.githubstatus.com/api/v2/summary.json',
    'GitHub',
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {statusData && (
        <StyledTableRow
          service="GitHub"
          status={statusData.status}
          updated={convertToUKDateTimeFormat(statusData.updated)}
          link="https://www.githubstatus.com"
          logo={Github}
          incidents={statusData.incidents.length > 0}
          onToggle={handleToggle}
        />
      )}
      {statusData?.incidents.map((incident: any) => (
        <StyledTableExpandedRow
          key={incident.incident_id}
          service={incident.components[0].name}
          status={
            <>
              <b>{incident.name}</b>
              <br />
              {incident.incident_updates[0].body}
            </>
          }
          updated={convertToUKDateTimeFormat(incident.updated_at)}
          link={incident.shortlink}
          isOpen={open}
        />
      ))}
    </>
  );
};
