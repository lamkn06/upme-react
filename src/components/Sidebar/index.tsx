import { Box, Flex, Image } from '@chakra-ui/react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { observer } from 'mobx-react-lite';

import Logo from '../../assets/images/logo.svg';
import { useRootStore } from '../../rootStore';
import { AvatarHolder } from './AvatarHolder';
import MenuItems from './MenuItem';
import { SidebarFollow } from './SidebarFollow';
import { SidebarPoint } from './SidebarPoint';

const MotionFlex = m(Flex);
const MotionBox = m(Box);

const Sidebar = () => {
  const { masterStore } = useRootStore();
  const { isSideBarOpen } = masterStore;

  return (
    <LazyMotion features={domAnimation}>
      <MotionFlex
        direction={'column'}
        d={['none', 'flex']}
        bg={'black'}
        zIndex={1}
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: isSideBarOpen ? 260 : 72,
        }}
        sx={{
          scrollbarWidth: 'none',
        }}
      >
        <Flex align={'center'} h={'64px'} px={isSideBarOpen ? '32px' : '24px'}>
          <Image src={Logo} boxSize={'24px'} mx={isSideBarOpen ? 0 : 'auto'} />
          <MotionBox
            color={'primary'}
            fontSize={18}
            fontWeight={700}
            ml={'8px'}
            animate={isSideBarOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
            }}
          >
            Upme
          </MotionBox>
        </Flex>
        <MotionBox
          animate={isSideBarOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: '-100%', display: 'none' },
          }}
        >
          <AvatarHolder />
          <SidebarPoint />
          <SidebarFollow />
        </MotionBox>

        <MenuItems />
      </MotionFlex>
    </LazyMotion>
  );
};

export default observer(Sidebar);
