import { Box, Divider, Flex, Link, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Point } from '../../assets/icons/points.svg';
import { ReactComponent as Info } from '../../assets/icons/u_info.svg';

export const SidebarPoint = () => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection={'column'} marginTop={'16px'}>
      <Divider />
      <Link
        href={`https://wiki.upme.cloud/books/upme-points`}
        target="_blank"
        rel="noopener noreferrer"
        outline={'none'}
        _focus={{
          outline: 'none',
        }}
      >
        <Box w="100%" color="white" height={'40px'}>
          <Flex
            justifyContent={'center'}
            alignItems="center"
            flex={1}
            height={'100%'}
            cursor={'pointer'}
          >
            <Point fill={'#FFA64D'} />
            <Text fontSize={'16px'} margin={'0 10px'}>
              {t('My points')}: {0}
            </Text>
            <Info fill={'white'} />
          </Flex>
        </Box>
      </Link>
    </Flex>
  );
};
