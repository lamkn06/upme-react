import { Box, Button, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Flex
      align={'center'}
      justifyContent={'center'}
      bg={'white'}
      boxShadow={'4px 0px 8px rgba(0, 0, 0, 0.1)'}
      h={'80px'}
    >
      <Flex flex={1} maxWidth={730}>
        <Flex justifyContent={'space-between'} flex={1}>
          <Box h={'48px'} w={['130px', '130px', '196px']} pos={'relative'}>
            <Button
              w={'100%'}
              variant={'secondary'}
              color={'black'}
              fontSize={16}
              fontWeight={'bold'}
              h={'full'}
              rounded={0}
              textTransform={'uppercase'}
            >
              {t('Contact Us')}
            </Button>
          </Box>

          <Flex justifyContent={'center'}>
            <Box h={'48px'} w={['140px', '140px', '205px']} pos={'relative'}>
              <Button
                w={'100%'}
                fontSize={['14px', '16px']}
                fontWeight={'bold'}
                h={'full'}
                variant={'primary'}
              >
                {t('Export resume')}
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default observer(Footer);
