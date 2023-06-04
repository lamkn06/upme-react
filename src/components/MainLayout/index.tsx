import { Flex } from '@chakra-ui/react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const MainLayout = (props: any) => {
  return (
    <>
      <Sidebar />
      <Flex minH={'100vh'} maxW={'100vw'}>
        <Navbar />
        {props.children}
      </Flex>
    </>
  );
};

export default MainLayout;
