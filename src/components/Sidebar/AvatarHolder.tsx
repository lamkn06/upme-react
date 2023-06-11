import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { ReactComponent as EditIcon } from '../../assets/icons/u_edit-alt.svg';
import AvatarPlaceholder from '../../assets/images/avatar-placeholder.svg';

interface Props {
  avatar: string;
  onEditProfile(): void;
}

export const AvatarHolder = observer((props: Props) => {
  return (
    <Flex direction={'column'} align={'center'} mt={'44px'}>
      <Box position={'relative'}>
        <Image
          src={props.avatar || AvatarPlaceholder}
          bg={'#F8F8F9'}
          boxSize={112}
          border={'2px solid white'}
          borderRadius={24}
          mx={'auto'}
          loading="lazy"
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
          onClick={props.onEditProfile}
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
});
