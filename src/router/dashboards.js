import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Tableros

const Analytics = Loader(lazy(() => import('src/content/dashboards/Analytics')));
const Fitness = Loader(lazy(() => import('src/content/dashboards/Fitness')));
const Learning = Loader(lazy(() => import('src/content/dashboards/Learning')));


const dashboardsRoutes = [
  {
    path: '',
    element: <Analytics />
  },
  {
    path: 'analytics',
    element: <Analytics />
  },
  {
    path: 'fitness',
    element: <Fitness />
  },
  {
    path: 'learning',
    element: <Learning />
  },
];

export default dashboardsRoutes;
