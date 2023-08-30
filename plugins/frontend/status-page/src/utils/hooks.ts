import { useState, useEffect } from 'react';

export const useStatusData = (fetchURL: string, service: string) => {
  const [statusData, setStatusData] = useState<any | null>(null);

  useEffect(() => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        const { status, page, incidents } = data;
        setStatusData({
          status: status.description,
          updated: page.updated_at,
          incidents: incidents,
        });
      })
      .catch(error => {
        `Error fetching ${service} service status: ${error}`;
      });
  }, []);

  return statusData;
};
