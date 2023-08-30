import React from 'react';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat, useStatusData } from '../../utils';
import CircleCI from '../../assets/circleci.png';

export const CircleCIStatus: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const statusData = useStatusData(
    'https://status.circleci.com/api/v2/summary.json',
    'CircleCI',
  );

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {statusData && (
        <StyledTableRow
          service="CircleCI"
          status={statusData.status}
          updated={convertToUKDateTimeFormat(statusData.updated)}
          link="https://status.circleci.com/"
          logo={CircleCI}
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
