import React from 'react';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat, useStatusData } from '../../utils';
import Atlassian from '../../assets/atlassian.png';

export const AtlassianStatus: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const statusData = useStatusData(
    'https://status.atlassian.com/api/v2/summary.json',
    'Atlassian',
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {statusData && (
        <StyledTableRow
          service="Atlassian"
          status={statusData.status}
          updated={convertToUKDateTimeFormat(statusData.updated)}
          link="https://status.atlassian.com/"
          logo={Atlassian}
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
