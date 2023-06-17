import { Box, Divider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import AboutMe from '../../components/AboutMe';
import Education from '../../components/Education';
import { useRootStore } from '../../rootStore';

const ProfilePage = () => {
  const { sessionStore } = useRootStore();
  return (
    <>
      <Box mb={'75px'}>
        <AboutMe />
      </Box>
      {sessionStore.hasEducation && (
        <>
          <Divider />
          <Box mt={'75px'}>
            <Education />
          </Box>
        </>
      )}
    </>
  );
};

export default observer(ProfilePage);
