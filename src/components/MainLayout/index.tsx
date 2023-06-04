import { Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const MainLayout = (props: any) => {
  return (
    <Flex minH={'100vh'} w={'100vw'}>
      <Sidebar />
      <Flex flex={1} flexDirection={'column'}>
        <Navbar />
        <Flex flex={1} flexDirection={'column'}>
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default observer(MainLayout);
