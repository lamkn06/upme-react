import { observer } from 'mobx-react-lite';

import AboutMe from '../../components/AboutMe';
import MainLayout from '../../components/MainLayout';

const ProfilePage = () => {
  return (
    <MainLayout>
      <AboutMe />
    </MainLayout>
  );
};

export default observer(ProfilePage);
