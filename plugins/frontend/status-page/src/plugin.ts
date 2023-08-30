import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const statusPagePlugin = createPlugin({
  id: 'status-page',
  routes: {
    root: rootRouteRef,
  },
});

export const StatusPage = statusPagePlugin.provide(
  createRoutableExtension({
    name: 'StatusPage',
    component: () => import('./components/DataTable').then(m => m.DataTable),
    mountPoint: rootRouteRef,
  }),
);
