import { lazy } from 'react';

// Unauthorized page
const LandingPage = lazy(() => import('../pages/LandingPage'));

interface RouteProp {
  name: string;
  key: string;
  path?: string;
  component?: React.ReactElement;
  redirect?: string;
  routes?: {
    name: string;
    key: string;
    path: string;
    redirect?: string;
    component: React.ReactElement;
  }[];
}

export const routes: RouteProp[] = [
  {
    path: '/',
    name: 'Landing Page',
    key: 'landing-page',
    component: <LandingPage />,
  },
];

export const router: Omit<RouteProp, 'routes'>[] = routes.reduce(
  (acc: any, { routes, ...rest }) => {
    acc = [...acc, rest];
    if (Array.isArray(routes)) {
      acc = [...acc, ...routes];
    }
    return acc;
  },
  [],
);
