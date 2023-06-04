import { Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import emptyPicture from '../../assets/images/avatar-placeholder.svg';

export const NavbarProfile = () => {
  const { t } = useTranslation();

  return (
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
        <MenuItem>{t('Settings')}</MenuItem>
      </MenuList>
    </Menu>
  );
};
