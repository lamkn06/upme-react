import { Box, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

// import { ReactComponent as EducationIcon } from '../../images/icons/u_book-reader.svg';
// import { ReactComponent as BlogIcon } from '../../images/icons/u_clipboard-alt.svg';
// import { ReactComponent as TimelineIcon } from '../../images/icons/u_clock.svg';
// import { ReactComponent as ProjectIcon } from '../../images/icons/u_cube.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/u_home-alt.svg';
import { COLOR_MAIN } from '../../constants/color';
import { useRootStore } from '../../rootStore';
// import { ReactComponent as SkillIcon } from '../../images/icons/u_layer-group.svg';
// import { ReactComponent as WorkshopIcon } from '../../images/icons/u_workshop.svg';

const MenuItems = () => {
  const { t } = useTranslation();
  const { masterStore } = useRootStore();
  const { isSideBarOpen } = masterStore;

  return (
    <Box p={'0 32px'}>
      <VStack
        direction={'column'}
        alignItems={'flex-start'}
        spacing={'22px'}
        marginTop={'24px'}
        id={'menu-items'}
      >
        <HStack cursor={'pointer'}>
          <Tooltip
            isDisabled={isSideBarOpen}
            hasArrow
            shouldWrapChildren
            gutter={32}
            placement={'right'}
            label={t('AboutMe')}
            bg="#666666"
            color="white"
            sx={{
              '.chakra-tooltip__arrow': {
                bg: '#666666',
              },
            }}
          >
            <Box as={HomeIcon} fill={COLOR_MAIN} />
          </Tooltip>

          {isSideBarOpen && <Text color={'white'}>{t('AboutMe')}</Text>}
        </HStack>
      </VStack>
    </Box>
  );
};

export default MenuItems;
