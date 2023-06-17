import { Box, Button, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { ReactComponent as PlusIcon } from '../../assets/icons/u_plus.svg';
import { COLOR_MAIN } from '../../constants/color';
import { useRootStore } from '../../rootStore';
import { ModalWrapper } from '../ModalWrapper';

export const ModalAddSection = observer(() => {
  const { t } = useTranslation();
  const { modalStore } = useRootStore();
  const { openModal, isModalAddSectionOpen } = modalStore;

  const handleOnClose = () => {
    openModal('');
  };

  const handleAddSection = (modal: 'modalEducation') => {
    openModal('');
    openModal(modal);
  };

  const sections = [
    {
      name: 'Education',
      onClick: () => handleAddSection('modalEducation'),
    },

    {
      name: 'Skill',
      onClick: undefined,
    },
  ];

  return (
    <ModalWrapper
      title={t('Add Section')}
      isOpen={isModalAddSectionOpen}
      onClose={handleOnClose}
      modalBody={
        <>
          <Flex flexDirection={'column'} alignItems={'center'} flex={1}>
            {sections.map((section) => (
              <Box
                key={section.name}
                h={'48px'}
                w={['130px', '130px', '196px']}
                pos={'relative'}
                m={'8px 0'}
              >
                <Button
                  w={'100%'}
                  variant={'secondary'}
                  color={'black'}
                  fontSize={16}
                  fontWeight={'bold'}
                  h={'full'}
                  onClick={section.onClick}
                >
                  <Box
                    as={PlusIcon}
                    fill={COLOR_MAIN}
                    mr={'12px'}
                    pos={'absolute'}
                    left={'12px'}
                  />
                  {t(section.name)}
                </Button>
              </Box>
            ))}
          </Flex>
        </>
      }
    />
  );
});
