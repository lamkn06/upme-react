import { Box, Button, Flex, Heading, Img, Link, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Illustration } from '../../assets/icons/illustration.svg';
import LandingPageTwo from './img/landing-page-2.png';
import LandingPageTwoWeb from './img/landing-page-2.webp';
import LandingPageThree from './img/landing-page-3.png';
import LandingPageThreeWebp from './img/landing-page-3.webp';
import LandingPageFour from './img/landing-page-4.png';
import LandingPageFourWebp from './img/landing-page-4.webp';
import LandingPageFive from './img/landing-page-5.png';
import LandingPageFiveWebp from './img/landing-page-5.webp';

const ImageWrapper = (props: { src: string; srcSet: string }) => {
  return (
    <Flex flexShrink={0} maxW={['100%', '100%', '400px', '500px', '558px']}>
      <Img
        width={['100%', '100%', '400px', '500px', '558px']}
        alt="landing"
        srcSet={props.srcSet}
        src={props.src}
        borderRadius={'8px'}
        boxShadow={
          '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);'
        }
      />
    </Flex>
  );
};

interface PropCol {
  orderLeft?: number[];
  orderRight?: number[];
  renderLeft(): ReactNode;
  renderRight(): ReactNode;
}

const Col = (props: PropCol) => {
  return (
    <Flex
      flex={1}
      flexDirection={['column', 'column', 'row']}
      _notLast={{
        marginBottom: ['40px', '40px', '210px'],
      }}
    >
      <Flex
        flex={1}
        order={props.orderLeft}
        justifyContent={['center', 'center', 'center', 'flex-start']}
      >
        {props.renderLeft()}
      </Flex>
      <Flex
        flex={1}
        order={props.orderRight || []}
        justifyContent={['center', 'center', 'center', 'flex-start']}
      >
        {props.renderRight()}
      </Flex>
    </Flex>
  );
};

interface PropInfo {
  title: string;
  content(): ReactNode;
}

const Info = (props: PropInfo) => {
  return (
    <Flex
      marginBottom={['20px', '20px', 0]}
      flexDirection={'column'}
      alignItems={['center', 'center', 'center', 'flex-start']}
    >
      <Heading fontSize={['28px', '34px']} maxW={['100%', '100%', '400px']}>
        {props.title}
      </Heading>
      <Flex
        marginTop={'10px'}
        fontWeight={500}
        flexDirection={'column'}
        alignItems={['center', 'center', 'flex-start']}
      >
        {props.content()}
      </Flex>
    </Flex>
  );
};

interface Props {
  onLogin(): void;
}

export const LandingPageContent = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Flex flex={1} justifyContent={'center'}>
      <Flex
        flexDirection={'column'}
        flex={1}
        maxW={'1110px'}
        padding={['50px 20px', '50px 20px', '110px 20px']}
      >
        <Col
          renderLeft={() => (
            <Box marginRight={[0, 0, '80px']}>
              <Info
                title={t('Multiple ways to share your profile')}
                content={() => (
                  <>
                    <Text>
                      {t(
                        'Everyone can use Upme to quickly create a resume without having to log in.',
                      )}
                      <br />
                      <br />
                      {t(
                        'You can share your profile easily via an URL, or export your profile to PDF and share it with recruiters.',
                      )}
                    </Text>
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
                        {t('Create a guest profile')}
                      </Button>
                    </Link>
                  </>
                )}
              />
            </Box>
          )}
          renderRight={() => (
            <ImageWrapper src={LandingPageTwo} srcSet={LandingPageTwoWeb} />
          )}
        />
        <Col
          orderLeft={[2, 2, 1]}
          orderRight={[1, 1, 2]}
          renderRight={() => (
            <Box marginLeft={[0, 0, '80px']}>
              <Info
                title={t('Upload multimedia projects')}
                content={() => (
                  <>
                    <Text>
                      {t(
                        'No matter which industry you are working on, with Upme, you can always upload and share your projects with multiple formats',
                      )}
                      : {t('images, video, podcasts')}...
                    </Text>
                    <Button
                      marginTop={'16px'}
                      variant={'primary'}
                      h={'48px'}
                      w={'202px'}
                      onClick={() => props.onLogin()}
                    >
                      {t('Login')}
                    </Button>
                  </>
                )}
              />
            </Box>
          )}
          renderLeft={() => (
            <ImageWrapper
              src={LandingPageThree}
              srcSet={LandingPageThreeWebp}
            />
          )}
        />
        <Col
          renderLeft={() => (
            <Box marginRight={[0, 0, '80px']}>
              <Info
                title="Workshop"
                content={() => (
                  <>
                    <Text>
                      {t(
                        'Upme members can create and sell workshop tickets directly on Upme platform. All procedures are automated, which helps you focus on your work and deliver the most values.',
                      )}
                    </Text>
                    <Button
                      marginTop={'16px'}
                      variant={'primary'}
                      h={'48px'}
                      w={'202px'}
                      onClick={() => props.onLogin()}
                    >
                      {t('Login')}
                    </Button>
                  </>
                )}
              />
            </Box>
          )}
          renderRight={() => (
            <ImageWrapper src={LandingPageFour} srcSet={LandingPageFourWebp} />
          )}
        />
        <Col
          orderLeft={[2, 2, 1]}
          orderRight={[1, 1, 2]}
          renderRight={() => (
            <Box marginLeft={[0, 0, '80px']}>
              <Info
                title={t('Community Features')}
                content={() => (
                  <>
                    <Text>
                      {t(
                        'You can easily find, view and interact with other Upme users, as well as follow to keep contact with the users that you are interested in.',
                      )}
                    </Text>
                    <Button
                      marginTop={'16px'}
                      variant={'primary'}
                      h={'48px'}
                      w={'202px'}
                      onClick={() => props.onLogin()}
                    >
                      {t('Login')}
                    </Button>
                  </>
                )}
              />
            </Box>
          )}
          renderLeft={() => (
            <ImageWrapper src={LandingPageFive} srcSet={LandingPageFiveWebp} />
          )}
        />
        <Col
          renderLeft={() => (
            <Box marginRight={[0, 0, '80px']}>
              <Info
                title={t('Upme Credit')}
                content={() => (
                  <>
                    <Text>
                      {t(
                        'Become a part of Upme community, you will have chance to earn Upme Points based on your activities, and exchange the points to other products and services.',
                      )}
                    </Text>
                    <Button
                      marginTop={'16px'}
                      variant={'primary'}
                      h={'48px'}
                      w={'202px'}
                      onClick={() => props.onLogin()}
                    >
                      {t('Login')}
                    </Button>
                  </>
                )}
              />
            </Box>
          )}
          renderRight={() => (
            <Box
              maxW={['100%', '100%', '400px', '500px', '558px']}
              marginTop={[0, '40px', '-60px']}
              marginRight={[0, '60px', 0]}
              as={Illustration}
            ></Box>
          )}
        />
      </Flex>
    </Flex>
  );
};
