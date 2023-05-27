import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

interface Props {
  onLogin(): void;
  onSignUp(): void;
}
export const LandingPageNavbar = (props: Props) => {
  const { t, i18n } = useTranslation();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" position={'sticky'} top={0} zIndex={10}>
      <Box as="nav" background={'#000'}>
        <Container py={3} maxH={'72px'} maxW={'1110px'}>
          <HStack spacing="16px" justify="space-between">
            <Flex alignItems={'center'} justify={'space-between'} flex={1}>
              <Logo />
            </Flex>
            {isDesktop ? (
              <Flex justify="space-between">
                <HStack spacing="16px">
                  <Button
                    variant={'secondary'}
                    bg={'transparent'}
                    h={'48px'}
                    w={'121px'}
                    color={'primary'}
                    borderColor={'primary'}
                    onClick={() => props.onLogin()}
                  >
                    {t('Login')}
                  </Button>

                  <Link
                    as={RouterLink}
                    to={`/edit-profile`}
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Button
                      variant={'primary'}
                      h={'48px'}
                      w={i18n.language === 'vi' ? '121px' : '210px'}
                    >
                      {t('Create a guest profile')}
                    </Button>
                  </Link>
                </HStack>
              </Flex>
            ) : (
              <></>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
