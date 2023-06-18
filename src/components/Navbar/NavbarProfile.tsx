import { Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import emptyPicture from '../../assets/images/avatar-placeholder.svg';
import { useRootStore } from '../../rootStore';

export const NavbarProfile = observer(() => {
  const { t } = useTranslation();
  const { profileStore, userStore } = useRootStore();

  const handleSignOut = () => {
    userStore.signOut();
    profileStore.signOut();
  };

  return (
    <Menu>
      <MenuButton>
        <Image
          border={'1px solid #fff'}
          boxShadow={'0px 0px 0px 2px #06DCFF'}
          borderRadius={'full'}
          boxSize={'38px'}
          src={profileStore.profile?.profilePicture || emptyPicture}
          mr={'24px'}
          cursor={'pointer'}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>{t('Settings')}</MenuItem>
        <MenuItem onClick={handleSignOut}>{t('Sign out')}</MenuItem>
      </MenuList>
    </Menu>
  );
});
