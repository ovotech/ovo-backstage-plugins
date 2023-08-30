# Installation

Add the package to your frontend application:

```bash
npm install @ovotech/backstage-plugin-status-page
```

Modify your app routes in `packages/app/src/App.tsx`:

```diff
+ import { StatusPage } from '@ovotech/backstage-plugin-status-page';

const routes = (

  <FlatRoutes>
    ...
+   <Route path="/status-page" element={<StatusPage />} />
    ...
  </FlatRoutes>
);
```

Add the **Status Page** icon to the Sidebar in `packages/app/src/components/Root/Root.tsx`:

```diff
+ import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

  <SidebarGroup label="Menu" icon={<MenuIcon />}>
    ...
+   <SidebarItem icon={CheckCircleOutlineIcon} to="status-page" text="Status Page" />
    ...
  </SideGroup>
```
