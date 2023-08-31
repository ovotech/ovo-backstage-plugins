import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { statusPagePlugin, StatusPage } from '../src/plugin';

createDevApp()
  .registerPlugin(statusPagePlugin)
  .addPage({
    element: <StatusPage />,
    title: 'Root Page',
    path: '/status-page',
  })
  .render();
