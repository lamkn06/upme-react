import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { ReactComponent as SuccessIcon } from '../../assets/icons/u_check-circle.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';
import { useRootStore } from '../../rootStore';

const ModalSignUpSuccess = () => {
  const { t } = useTranslation();
  const { modalStore } = useRootStore();
  const { openModal, isSignInSuccessModal } = modalStore;

  const handleOnClose = () => {
    openModal('');
  };

  return (
    <Modal
      isCentered
      scrollBehavior={'inside'}
      isOpen={isSignInSuccessModal}
      onClose={handleOnClose}
    >
      <ModalOverlay />
      <ModalContent
        rounded={'2px'}
        maxW={'464px'}
        mx={'8px'}
        minH={'fit-content'}
      >
        <Box
          as={CloseIcon}
          boxSize={'32px'}
          cursor={'pointer'}
          fill={'#3F4647'}
          m={'26px 26px 32px auto'}
          onClick={handleOnClose}
        />
        <ModalBody p={'0 32px 40px'}>
          <Box as={SuccessIcon} boxSize={'40px'} fill={'#06DCFF'} mb={'20px'} />

          <Text variant={'bodyBig'} mb={'4px'}>
            {t('Account created')}
          </Text>

          <Text variant={'body1'}>
            {t('Check your email and open the link we sent to continue')}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default observer(ModalSignUpSuccess);
