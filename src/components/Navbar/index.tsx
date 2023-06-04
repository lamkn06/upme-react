import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import emptyPicture from '../../assets/images/avatar-placeholder.svg';
import { useRootStore } from '../../rootStore';
import { SelectLanguage } from '../SelectLanguage';

const MotionFlex = m(Flex);

const Navbar = () => {
  const { t } = useTranslation();
  const { modalStore } = useRootStore();

  const [isUserSettingModalOpen, setUserSettingModalOpen] = useState(false);

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
          pos={'fixed'}
          top={0}
          right={0}
          zIndex={2}
        >
          <Box boxSize={'24px'} cursor={'pointer'} fill={'black'} />

          <Spacer />

          {false ? (
            <>
              <Menu>
                <MenuButton>
                  <Image
                    border={'1px solid #fff'}
                    boxShadow={'0px 0px 0px 2px #06DCFF'}
                    borderRadius={'full'}
                    boxSize={'38px'}
                    src={emptyPicture}
                    mr={'24px'}
                    cursor={'pointer'}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setUserSettingModalOpen(true)}>
                    {t('Settings')}
                  </MenuItem>
                  {/* <MenuItem
                onClick={() => {
                  handleLinkToBusiness({ email });
                }}
              >
                {t("Upme Business")}
              </MenuItem> */}
                  {/* <MenuItem onClick={() => setQrCodeModalOpen(true)}>
                    {t('QR Code')}
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>{t('Sign out')}</MenuItem> */}
                </MenuList>
              </Menu>
              {/* {flags.notification && <Notification />} */}
            </>
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
                onClick={() => modalStore.openModal('signInModal')}
              >
                {t('SignIn')}
              </Button>

              <Button
                variant={'primary'}
                mr={'24px'}
                minW={'138px'}
                _focus={{}}
                onClick={() => modalStore.openModal('signUpModal')}
              >
                {t('SignUp')}
              </Button>
            </>
          )}

          <Button variant={'ghost'} w={'fit-content'} _hover={{}}>
            <SelectLanguage />
          </Button>

          {false && (
            <Button
              leftIcon={<EyeIcon fill={'black'} />}
              background={'transparent'}
              textTransform={'none'}
              ml={'16px'}
            >
              {t('View as public')}
            </Button>
          )}
        </MotionFlex>
      </LazyMotion>
    </>
  );
};

export default Navbar;
