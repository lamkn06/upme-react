import loadable from '@loadable/component';
import { createBrowserRouter } from 'react-router-dom';

const LandingPage = loadable(() => import('../pages/LandingPage'));
const ProfilePage = loadable(() => import('../pages/ProfilePage'));
const UpmePolicy = loadable(() => import('../pages/UpmeLegal/UpmePolicy'));
const UpmeTerms = loadable(() => import('../pages/UpmeLegal/UpmeTerms'));
const Root = loadable(() => import('../pages/Root'));

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/legal/terms',
        element: <UpmeTerms />,
      },
      {
        path: '/legal/privacy-policy',
        element: <UpmePolicy />,
      },
    ],
  },
]);
