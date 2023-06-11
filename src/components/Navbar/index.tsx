import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../../assets/icons/u_align.svg';
import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/u_home.svg';
import { ReactComponent as HamburgerLeftIcon } from '../../assets/icons/u_left-indent.svg';
import { useRootStore } from '../../rootStore';
import { SelectLanguage } from '../SelectLanguage';
import { NavbarProfile } from './NavbarProfile';

const MotionFlex = m(Flex);

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { masterStore, modalStore, userStore } = useRootStore();
  const { isSideBarOpen, setSideBarOpen } = masterStore;
  const { loading, isAuthenticated, setting } = userStore;
  const isProfilePage = location.pathname.includes('/profile');
  return (
    <>
      <LazyMotion features={domAnimation}>
        <MotionFlex
          align={'center'}
          bg={'white'}
          borderBottom={'1px solid #F8F8F9'}
          direction={'row'}
          d={['none', 'flex']}
          h={'64px'}
          pl={'16px'}
          pr={'40px'}
        >
          <Box
            as={isSideBarOpen ? HamburgerLeftIcon : MenuIcon}
            boxSize={'24px'}
            cursor={'pointer'}
            zIndex={99}
            fill={'black'}
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          />
          <Spacer />

          {!loading && (
            <>
              {isAuthenticated ? (
                <NavbarProfile />
              ) : (
                <>
                  <Button
                    variant={'ghost'}
                    mr={'8px'}
                    _focus={{}}
                    _hover={{
                      bg: '#F8F8F9',
                      color: '#06DCFF',
                    }}
                    onClick={() => modalStore.openModal('modalSignIn')}
                  >
                    {t('SignIn')}
                  </Button>

                  <Button
                    variant={'primary'}
                    mr={'24px'}
                    minW={'138px'}
                    _focus={{}}
                    onClick={() => modalStore.openModal('modalSignUp')}
                  >
                    {t('SignUp')}
                  </Button>
                </>
              )}
            </>
          )}

          <Button variant={'ghost'} w={'fit-content'} _hover={{}}>
            <SelectLanguage />
          </Button>

          {isAuthenticated && (
            <>
              {isProfilePage ? (
                <Button
                  as={Link}
                  to={`/${setting.page}`}
                  leftIcon={<EyeIcon fill={'black'} />}
                  background={'transparent'}
                  textTransform={'none'}
                  ml={'16px'}
                >
                  {t('View as public')}
                </Button>
              ) : (
                <Button
                  as={Link}
                  to={`/profile`}
                  leftIcon={<HomeIcon fill={'black'} />}
                  background={'transparent'}
                  textTransform={'none'}
                  ml={'16px'}
                >
                  {t('View my profile')}
                </Button>
              )}
            </>
          )}
        </MotionFlex>
      </LazyMotion>
    </>
  );
};

export default observer(Navbar);
