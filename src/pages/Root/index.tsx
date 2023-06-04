import { Outlet } from 'react-router-dom';

import { ModalWrapper } from '../../components/ModalWrapper';

const Root = () => {
  return (
    <>
      <Outlet />
      <ModalWrapper />
    </>
  );
};

export default Root;
