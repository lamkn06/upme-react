import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Facebook } from '../../assets/icons/facebook-circle.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram-circle.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin-circle.svg';
import LandingPageFooterBg from './img/landing-page-footer-bg.png';
interface Props {
  onLogin(): void;
  onSignUp(): void;
}
export const LandingPageFooter = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Flex
      as="footer"
      height={['auto', 'auto', '600px']}
      position={'relative'}
      p={['20px', 'auto']}
    >
      <Flex
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        backgroundImage={`url(${LandingPageFooterBg})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
        backgroundColor={'rgba(0, 0, 0, 1)'}
      />
      <Container role="contentinfo" maxW={'1110px'} zIndex={1}>
        <Flex height={'100%'} justifyContent="center" alignItems={'center'}>
          <Stack direction={'column'} alignItems="center" spacing={'20px'}>
            <Heading
              textAlign={'center'}
              fontSize={['20px', '20px', '38px']}
              color={'#ffffff'}
              textTransform={'uppercase'}
            >
              {t('Upme promotes unlimited creativity and')}
              <br />
              {` ${t('your personal brand altogether')}`}
            </Heading>
            <Text
              fontSize={['16px', '16px', '24px']}
              color={'#ffffff'}
              textAlign={'center'}
            >
              {t('Always free for starters - Try Upme now!')}
            </Text>
            <HStack>
              <Facebook />
              <Linkedin />
              <Instagram />
            </HStack>
            <Link
              as={RouterLink}
              to={`/edit-profile`}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                marginTop={'16px'}
                variant={'primary'}
                h={'48px'}
                w={'288px'}
              >
                {t('Create new free resume')}
              </Button>
            </Link>

            <HStack>
              <Button
                variant={'secondary'}
                bg={'white'}
                h={'48px'}
                w={'140px'}
                onClick={() => props.onLogin()}
              >
                {t('Login')}
              </Button>

              <Button
                marginLeft={'8px'}
                variant={'secondary'}
                borderColor={'#06DCFF'}
                color={'#06DCFF'}
                background={'transparent'}
                h={'48px'}
                w={'140px'}
                onClick={() => props.onSignUp()}
              >
                {t('SignUp')}
              </Button>
            </HStack>
            <HStack>
              <Link
                href="https://about.upme.cloud"
                fontSize={'16px'}
                color={'#ffffff'}
                target={'_blank'}
                textTransform={'uppercase'}
              >
                {t('About us')}
              </Link>
              <Box height={'16px'} p={'0 40px'}>
                <Divider orientation="vertical" />
              </Box>
              <Link
                href="https://news.upme.cloud"
                fontSize={'16px'}
                color={'#ffffff'}
                target={'_blank'}
                textTransform={'uppercase'}
              >
                {t('News')}
              </Link>
            </HStack>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};
