import { Flex, Heading, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { PublicProfile } from '../../models/PublicProfile';

interface Props {
  publicProfile: PublicProfile;
}

export const Follower = observer((props: Props) => {
  const { t } = useTranslation();
  const totalFollowing = 0;
  const totalFollower = 0;
  const publicProfile = props.publicProfile;

  return (
    <>
      <Flex
        direction={'column'}
        alignItems={['flex-start', 'center']}
        width={{ base: '50%', sm: '100%' }}
        flex={1}
      >
        <Heading
          mb={'4px'}
          fontSize={{ base: '20px', sm: '24px' }}
          fontWeight={'700'}
        >
          {publicProfile?.displayName || '?'}
        </Heading>
        {publicProfile?.fullName && (
          <Text variant={'subtitle2'} mb={{ base: ' 5px', sm: '24px' }}>
            {publicProfile?.fullName}
          </Text>
        )}
        <Flex
          marginTop={{ base: '5px', sm: '16px' }}
          width={'100%'}
          maxW={'310px'}
          fontSize={{ base: '12px', sm: '18px' }}
        >
          <Flex
            alignItems="center"
            flex={1}
            justifyContent={{ base: 'flex-start', sm: 'center' }}
            cursor={'pointer'}
          >
            <Text as={'strong'} marginRight={['8px', '10px']}>
              {totalFollower}
            </Text>
            <Text>{t('Followers')}</Text>
          </Flex>
          <Flex
            alignItems="center"
            flex={1}
            justifyContent={{ base: 'flex-start', sm: 'center' }}
            cursor={'pointer'}
          >
            <Text as={'strong'} marginRight={['8px', '10px']}>
              {totalFollowing}
            </Text>
            <Text>{t('Following')}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
});
