import loadable from '@loadable/component';
import { createBrowserRouter } from 'react-router-dom';

const Root = loadable(() => import('../pages/Root'));
const LandingPage = loadable(() => import('../pages/LandingPage'));

const WrapperPage = loadable(() => import('../pages/WrapperPage'));
const ProfilePage = loadable(() => import('../pages/ProfilePage'));
const PublicPage = loadable(() => import('../pages/PublicPage'));

const UpmePolicy = loadable(() => import('../pages/UpmeLegal/UpmePolicy'));
const UpmeTerms = loadable(() => import('../pages/UpmeLegal/UpmeTerms'));

export const routers = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/legal/terms',
        element: <UpmeTerms />,
      },
      {
        path: '/legal/privacy-policy',
        element: <UpmePolicy />,
      },
      {
        path: '/',
        element: <WrapperPage />,
        children: [
          {
            path: '/profile',
            element: <ProfilePage />,
          },
          {
            path: '/:page',
            element: <PublicPage />,
          },
        ],
      },
    ],
  },
]);
