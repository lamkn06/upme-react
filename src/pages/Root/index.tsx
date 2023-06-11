import { Outlet } from 'react-router-dom';

import { Modals } from '../../components/Modals';

const Root = () => {
  return (
    <>
      <Outlet />
      <Modals />
    </>
  );
};

export default Root;
