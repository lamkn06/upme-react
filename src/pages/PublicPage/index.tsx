import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import PublicInfo from '../../components/PublicInfo';
import PublicProfileStore from '../../stores/PublicProfileStore';

const MotionFlex = m(Flex);

const PublicPage = () => {
  const location = useLocation();
  const { page } = useParams<{ page: string }>();

  const [store] = useState(() => new PublicProfileStore());
  const { publicProfile, loading } = store;

  useEffect(() => {
    store.fetch(page);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <MotionFlex
          key={location.pathname}
          direction={'column'}
          grow={1}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          zIndex={0}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
            },
          }}
        >
          <Box w={['100vw', '100%']} pt={'24px'} px={['20px', 0]} mx={'auto'}>
            <Flex direction={'column'} alignItems={'center'}>
              <Flex align={'center'} grow={1} w={'100%'}>
                <Flex grow={1}>
                  <PublicInfo publicProfile={publicProfile} loading={loading} />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </MotionFlex>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default observer(PublicPage);
