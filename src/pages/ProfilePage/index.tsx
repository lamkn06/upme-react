import { observer } from 'mobx-react-lite';

import AboutMe from '../../components/AboutMe';

const ProfilePage = () => {
  return <AboutMe />;
};

export default observer(ProfilePage);
