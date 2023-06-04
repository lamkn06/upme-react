import { Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const MainLayout = (props: any) => {
  return (
    <Flex minH={'100vh'} w={'100vw'}>
      <Sidebar />
      <Flex flex={1} flexDirection={'column'}>
        <Navbar />
        <Flex flex={1} justifyContent={'center'} padding={'65px 0'}>
          <Flex flex={1} flexDirection={'column'} maxW={730}>
            {props.children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default observer(MainLayout);
