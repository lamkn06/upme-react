import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useCallback } from 'react';

import { ReactComponent as EditIcon } from '../../assets/icons/u_edit-alt.svg';
import AvatarPlaceholder from '../../assets/images/avatar-placeholder.svg';

export const AvatarHolder = () => {
  const handleOpenProfileModal = useCallback((isOpen: boolean) => {
    console.log(isOpen);
  }, []);

  return (
    <Flex direction={'column'} align={'center'} mt={'44px'}>
      <Box position={'relative'}>
        <Image
          src={AvatarPlaceholder}
          bg={'#F8F8F9'}
          boxSize={112}
          border={'2px solid white'}
          borderRadius={24}
          mx={'auto'}
          pt={'12px'}
          px={'12px'}
        />

        <Box
          as={EditIcon}
          fill={'black'}
          boxSize={'32px'}
          borderRadius={'full'}
          bg={'primary'}
          cursor={'pointer'}
          p={'6px'}
          position={'absolute'}
          right={'-3px'}
          bottom={'-3px'}
          onClick={() => handleOpenProfileModal(true)}
        />
      </Box>
      <Text
        isTruncated
        variant={'displayName'}
        color={'white'}
        mt={'12px'}
        textAlign={'center'}
      >
        {'?'}
      </Text>
    </Flex>
  );
};
