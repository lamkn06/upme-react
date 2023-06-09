import { Box, Button, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

// import { ReactComponent as EducationIcon } from '../../images/icons/u_book-reader.svg';
// import { ReactComponent as BlogIcon } from '../../images/icons/u_clipboard-alt.svg';
// import { ReactComponent as TimelineIcon } from '../../images/icons/u_clock.svg';
// import { ReactComponent as ProjectIcon } from '../../images/icons/u_cube.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/u_home-alt.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/u_plus.svg';
import { COLOR_MAIN } from '../../constants/color';
import { renderMenuItems } from '../../utils/renderMenuItems';
// import { ReactComponent as SkillIcon } from '../../images/icons/u_layer-group.svg';
// import { ReactComponent as WorkshopIcon } from '../../images/icons/u_workshop.svg';

interface Props {
  sections: any;
  isSideBarOpen: boolean;
  openModal: (modal: 'modalAddSection') => void;
}

const MenuItems = (props: Props) => {
  const { t } = useTranslation();
  const { isSideBarOpen, openModal, sections } = props;
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
        {sections.map((section: string) => {
          const menu = renderMenuItems(section);
          return (
            <HStack cursor={'pointer'} key={section}>
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
                <Box as={menu.icon} fill={COLOR_MAIN} />
              </Tooltip>

              {isSideBarOpen && <Text color={'white'}>{t(menu.label)}</Text>}
            </HStack>
          );
        })}
        {/* <HStack cursor={'pointer'}>
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
        </HStack> */}

        <HStack cursor={'pointer'}>
          <Tooltip
            isDisabled={isSideBarOpen}
            hasArrow
            shouldWrapChildren
            gutter={32}
            placement={'right'}
            label={t('Add Section')}
            bg="#666666"
            color="white"
            sx={{
              '.chakra-tooltip__arrow': {
                bg: '#666666',
              },
            }}
          >
            <Box as={PlusIcon} fill={COLOR_MAIN} />
          </Tooltip>

          {isSideBarOpen && (
            <Button
              style={{
                border: 0,
                background: 'transparent',
                margin: 0,
              }}
              onClick={() => openModal('modalAddSection')}
            >
              <Text
                color={'white'}
                style={{
                  fontWeight: 'normal',

                  textTransform: 'capitalize',
                }}
              >
                Add Section
              </Text>
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default observer(MenuItems);
