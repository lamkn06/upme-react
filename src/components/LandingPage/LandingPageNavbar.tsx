import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { SelectLanguage } from '../SelectLanguage';

interface Props {
  onLogin(): void;
  onSignUp(): void;
}

const selectStyles = {
  control: (provided: HTMLSelectElement) => {
    return {
      ...provided,
      width: 121,
      height: 48,
      background: 'transparent',
      color: '#06DCFF',
      borderColor: '#06DCFF',
      borderRadius: '0px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#06DCFF',
      },
      cursor: 'pointer',
    };
  },
  indicatorSeparator: (provided: HTMLSelectElement) => ({
    ...provided,
    display: 'none',
  }),
  option: (provided: HTMLSelectElement) => ({
    ...provided,
    backgroundColor: 'none',
    color: '#3F4647',
    ':hover': {
      color: '#06DCFF',
      cursor: 'pointer',
    },
  }),
  singleValue: (base: HTMLSelectElement) => ({
    ...base,
    padding: '0 5px',
    color: '#06DCFF',
    fontWeight: 600,
  }),
  indicatorsContainer: (provided: HTMLSelectElement) => ({
    ...provided,
    svg: {
      color: '#06DCFF',
    },
  }),
} as CSSProperties;

export const LandingPageNavbar = observer((props: Props) => {
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
            <SelectLanguage selectStyles={selectStyles} />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
});
