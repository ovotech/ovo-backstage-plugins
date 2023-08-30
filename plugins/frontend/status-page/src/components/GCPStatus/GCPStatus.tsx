import React from 'react';
import axios from 'axios';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat } from '../../utils';
import GCP from '../../assets/gcp.png';

interface Incident {
  id: string;
  service_name: string;
  external_desc: string;
  status_impact: string;
  modified: string;
  uri: string;
  end: string;
}

export const GCPStatus: React.FC = () => {
  const [statusData, setStatusData] = React.useState<Incident[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    async function fetchIncidents() {
      try {
        const response = await axios.get(
          'https://status.cloud.google.com/incidents.json',
        );
        const ongoingIncidents = response.data.filter(
          (incident: Incident) => !incident.end,
        );
        setStatusData(ongoingIncidents);
      } catch (error) {
        <div>Error fetching GCP service status: {error}</div>;
      }
    }
    fetchIncidents();
  }, []);

  return (
    <>
      <StyledTableRow
        service="Google Cloud Platform"
        updated={new Date().toLocaleString()}
        link="https://status.cloud.google.com/"
        logo={GCP}
        incidents={statusData.length > 0}
        onToggle={handleToggle}
      />
      {statusData.length > 0 &&
        statusData.map(incident => (
          <StyledTableExpandedRow
            key={incident.id}
            service={incident.service_name}
            status={
              <>
                <b>{incident.status_impact}</b>
                <br />
                {incident.external_desc}
              </>
            }
            updated={convertToUKDateTimeFormat(incident.modified)}
            link={`https://status.cloud.google.com/${incident.uri}`}
            isOpen={open}
          />
        ))}
    </>
  );
};
