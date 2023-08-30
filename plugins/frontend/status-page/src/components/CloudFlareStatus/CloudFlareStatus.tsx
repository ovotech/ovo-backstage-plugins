import React from 'react';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat, useStatusData } from '../../utils';
import CloudFlare from '../../assets/cloudflare.png';

export const CloudFlareStatus: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const statusData = useStatusData(
    'https://www.cloudflarestatus.com/api/v2/summary.json',
    'CloudFlare',
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {statusData && (
        <StyledTableRow
          service="CloudFlare"
          status={statusData.status}
          updated={convertToUKDateTimeFormat(statusData.updated)}
          link="https://www.cloudflarestatus.com/"
          logo={CloudFlare}
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
          link=""
          isOpen={open}
        />
      ))}
    </>
  );
};
