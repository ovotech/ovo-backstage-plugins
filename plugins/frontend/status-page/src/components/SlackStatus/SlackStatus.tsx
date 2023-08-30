import React from 'react';
import { StyledTableRow, StyledTableExpandedRow } from '../StyledTable';
import { convertToUKDateTimeFormat } from '../../utils';
import Slack from '../../assets/slack.png';

export const SlackStatus: React.FC = () => {
  const [statusData, setStatusData] = React.useState<any | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    fetch('https://status.slack.com/api/v2.0.0/current')
      .then(response => response.json())
      .then(data => {
        const { status, active_incidents, date_updated } = data;
        setStatusData({
          status: status,
          updated: date_updated,
          incidents: active_incidents,
        });
      })
      .catch(error => {
        <div>Error fetching Slack service status: {error}</div>;
      });
  }, []);

  return (
    <>
      {statusData && (
        <StyledTableRow
          service="Slack"
          status={`${statusData.status} ${
            statusData.status === 'ok' ? '' : 'incident'
          }`}
          updated={convertToUKDateTimeFormat(statusData.updated)}
          link="https://status.slack.com/"
          logo={Slack}
          incidents={statusData.incidents.length > 0}
          onToggle={handleToggle}
        />
      )}
      {statusData?.incidents.map((incident: any) => (
        <StyledTableExpandedRow
          key={incident.id}
          service={incident.services.join(', ')}
          status={
            <>
              <b>
                {incident.status} {incident.type}
              </b>
              <br />
              {incident.title}
            </>
          }
          updated={convertToUKDateTimeFormat(incident.date_updated)}
          link={incident.url}
          isOpen={open}
        />
      ))}
    </>
  );
};
