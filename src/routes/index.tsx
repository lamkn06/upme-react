import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Unauthorized page
const LandingPage = lazy(() => import('../pages/LandingPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);
