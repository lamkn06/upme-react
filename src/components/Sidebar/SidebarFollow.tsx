import { Box, Center, Divider, Flex, Text, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const SidebarFollow = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Flex flexDirection={'column'}>
        <Divider />
        <Box w="100%" p={{ base: '8px', sm: '8px 25px' }} color="white">
          <Flex>
            <Tooltip label="View more detail" fontSize="md">
              <Flex
                flexDirection={'column'}
                alignItems="center"
                flex={1}
                className="box"
              >
                <Text fontSize={['12px', '14px']}>{0}</Text>
                <Text
                  sx={{
                    '.box:hover &': {
                      textDecoration: 'underline',
                    },
                  }}
                  fontSize={['12px', '14px']}
                >
                  {t('Followers')}
                </Text>
              </Flex>
            </Tooltip>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Tooltip
              label="View more detail"
              fontSize="md"
              _hover={{
                bg: 'none',
                color: 'primary',
                fill: 'primary',
              }}
            >
              <Flex
                flexDirection={'column'}
                alignItems="center"
                flex={1}
                cursor={'pointer'}
                className="box"
              >
                <Text fontSize={['12px', '14px']}>{0}</Text>
                <Text
                  sx={{
                    '.box:hover &': {
                      textDecoration: 'underline',
                    },
                  }}
                  fontSize={['12px', '14px']}
                >
                  {t('Following')}
                </Text>
              </Flex>
            </Tooltip>
          </Flex>
        </Box>
        <Divider />
      </Flex>
    </>
  );
};
