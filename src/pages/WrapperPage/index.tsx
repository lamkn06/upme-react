import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

import MainLayout from '../../components/MainLayout';

const WrapperPage = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default observer(WrapperPage);
