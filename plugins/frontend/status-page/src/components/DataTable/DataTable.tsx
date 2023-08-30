import React from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { Table, makeStyles } from '@material-ui/core';
import {
  AtlassianStatus,
  CircleCIStatus,
  CloudFlareStatus,
  DataDogStatus,
  GitHubStatus,
  GCPStatus,
  SlackStatus,
} from '..';

const useStyles = makeStyles({
  content: {
    padding: '40px 80px 40px 80px',
  },
});

export const DataTable = () => {
  const classes = useStyles();

  return (
    <Page themeId="home">
      <Header
        title="Status Page"
        subtitle="Ongoing incidents and status updates for third-party services."
      />
      <Content className={classes.content}>
        <Table>
          <AtlassianStatus />
          <CloudFlareStatus />
          <CircleCIStatus />
          <DataDogStatus />
          <GitHubStatus />
          <GCPStatus />
          <SlackStatus />
        </Table>
      </Content>
    </Page>
  );
};
