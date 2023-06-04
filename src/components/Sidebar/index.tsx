import { Box, Flex, Image } from '@chakra-ui/react';
import { domAnimation, LazyMotion, m } from 'framer-motion';

import Logo from '../../assets/images/logo.svg';
import { AvatarHolder } from './AvatarHolder';
import { SidebarFollow } from './SidebarFollow';
import { SidebarPoint } from './SidebarPoint';

const MotionFlex = m(Flex);
const MotionBox = m(Box);

const Sidebar = () => {
  const isOpen = true;
  return (
    <LazyMotion features={domAnimation}>
      <MotionFlex
        direction={'column'}
        d={['none', 'flex']}
        bg={'black'}
        position={'fixed'}
        top={0}
        bottom={0}
        left={0}
        overflowY={'auto'}
        zIndex={1}
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: isOpen ? 260 : 72,
        }}
        sx={{
          scrollbarWidth: 'none',
        }}
      >
        <Flex align={'center'} h={'64px'} px={isOpen ? '32px' : '24px'}>
          <Image src={Logo} boxSize={'24px'} mx={isOpen ? 0 : 'auto'} />
          <MotionBox
            color={'primary'}
            fontSize={18}
            fontWeight={700}
            ml={'8px'}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
            }}
          >
            Upme
          </MotionBox>
        </Flex>
        <AvatarHolder />
        <SidebarPoint />
        <SidebarFollow />
      </MotionFlex>
    </LazyMotion>
  );
};

export default Sidebar;
