import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Connect } from '../../assets/icons/u_connect.svg';
import { ReactComponent as Money } from '../../assets/icons/u_money.svg';
import { ReactComponent as Read } from '../../assets/icons/u_read.svg';
import { ReactComponent as Slide } from '../../assets/icons/u_slide.svg';
import LandingPageOneDesktop from './img/landing-page-1-desktop.png';
import LandingPageOneDesktopWebp from './img/landing-page-1-desktop.webp';
import LandingPageOneMobile from './img/landing-page-1-mobile.png';
import LandingPageOneMobileWebp from './img/landing-page-1-mobile.webp';
import LandingPageBg from './img/landing-page-bg.png';

interface Props {
  onLogin(): void;
  onSignUp(): void;
}

export const LandingPageTop = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection={'column'} flex={1}>
      <Flex
        height={['auto', '804px']}
        backgroundImage={`url(${LandingPageBg})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
        justifyContent={'center'}
        margin={'0 20px'}
        position={'relative'}
        flexDirection={['column', 'column', 'row']}
        zIndex={1}
      >
        <Flex
          flex={1}
          alignItems={'center'}
          flexDirection={'column'}
          marginTop={['50px', '104px']}
          maxW={'1110px'}
        >
          <Heading
            fontSize={['26px', '26px', '56px']}
            color={'#222428'}
            textAlign={'center'}
            textTransform={'uppercase'}
          >
            {t('Social platform for building personal brand')}
          </Heading>
          <Text
            fontSize={['16px', '24px']}
            textAlign={'center'}
            color={'#515966'}
            marginTop={'16px'}
          >
            {t(
              'Upme provides everything you need to fully and creatively introduce yourself to the world',
            )}
          </Text>
          <Flex>
            <Button
              variant={'secondary'}
              bg={'white'}
              h={'48px'}
              w={'140px'}
              mt={['24px', '16px']}
              onClick={() => props.onLogin()}
            >
              {t('Login')}
            </Button>

            <Button
              marginLeft={'8px'}
              variant={'secondary'}
              borderColor={'#06DCFF'}
              color={'#06DCFF'}
              bg={'white'}
              h={'48px'}
              w={'140px'}
              mt={['24px', '16px']}
              onClick={() => props.onSignUp()}
            >
              {t('SignUp')}
            </Button>
          </Flex>
          <Link
            as={RouterLink}
            to={`/profile`}
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
        </Flex>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          position={['relative', 'relative', 'absolute']}
          flex={1}
          top={0}
          bottom={[0, -710]}
          left={0}
          right={0}
          zIndex={-1}
          margin={['20px 0', '20px 0', '0']}
        >
          <Box position={'relative'}>
            <Box flexShrink={0} maxW={['100%', '100%', '782px']}>
              <Image
                width={'100%'}
                height={'auto'}
                src={LandingPageOneDesktop}
                srcSet={LandingPageOneDesktopWebp}
                alt="landing"
                borderRadius={'8px'}
                boxShadow={
                  '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);'
                }
              />
            </Box>
            <Flex
              flexShrink={0}
              position={'absolute'}
              flex={1}
              top={0}
              right={['50px', '50px', '-60px']}
              bottom={0}
              left={0}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Image
                borderRadius={'8px'}
                boxShadow={
                  '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);'
                }
                alt="landing"
                src={LandingPageOneMobile}
                srcSet={LandingPageOneMobileWebp}
                width={['70px', '144px', '144px', '144px']}
                height={'auto'}
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex
        height={['auto', 'auto', '804px']}
        backgroundColor={'#515966'}
        color={'#FFFFFF'}
        alignItems={'flex-end'}
        justifyContent={'center'}
        padding={'0 20px 75px 20px'}
      >
        <Flex
          flex={1}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          maxW={'1110px'}
        >
          <Text
            fontSize={['16px', '24px']}
            maxW={'763px'}
            textAlign={'center'}
            marginTop={['20px']}
          >
            {t(
              'You could be an artist, a programmer, or a photographer. You could have passion for writing, or strategy planning. You are full of creativity and have completed several personal projects',
            )}
            ...
          </Text>
          <Text fontSize={['16px', '24px']} marginTop={'20px'}>
            {t('Upme gives you your own personal space to')}:
          </Text>
          <Flex
            flexDirection={['column', 'column', 'row']}
            justifyContent={['auto', 'space-between']}
            marginTop={'70px'}
            width={'100%'}
            sx={{
              div: {
                maxW: ['100%', '100%', '258px'],
                alignItems: ['center', 'center', 'flex-start'],
              },
            }}
          >
            <Flex flexDirection={'column'}>
              <Slide />
              <Text fontSize={'24px'} margin={'15px 0 8px'}>
                {t('Showcase')}
              </Text>
              <Text
                fontSize={'16px'}
                padding={['0 50px', '0']}
                textAlign={['center', 'center', 'left']}
              >
                {t('Showcase projects, achievements and work experience')}
              </Text>
            </Flex>
            <Flex flexDirection={'column'} marginTop={['50px', '50px', '0']}>
              <Connect />
              <Text fontSize={'24px'} margin={'15px 0 8px'}>
                {t('Connect')}
              </Text>
              <Text
                fontSize={'16px'}
                padding={['0 50px', '0']}
                textAlign={['center', 'center', 'left']}
              >
                {t('Connect with like-minded people')}
              </Text>
            </Flex>
            <Flex flexDirection={'column'} marginTop={['50px', '50px', '0']}>
              <Read />
              <Text fontSize={'24px'} margin={'15px 0 8px'}>
                {t('Learn')}
              </Text>
              <Text
                fontSize={'16px'}
                padding={['0 50px', '0']}
                textAlign={['center', 'center', 'left']}
              >
                {t('Learn from the experts')}
              </Text>
            </Flex>
            <Flex flexDirection={'column'} marginTop={['50px', '50px', '0']}>
              <Money />
              <Text fontSize={'24px'} margin={'15px 0 8px'}>
                {t('Earn')}
              </Text>
              <Text
                fontSize={'16px'}
                textAlign={['center', 'center', 'left']}
                padding={['0 50px', '0']}
              >
                {t('Earn from your talents and abilities')}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
