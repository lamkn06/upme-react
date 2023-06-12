import {
  Box,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';

interface Props {
  title: string;
  isOpen: boolean;
  modalBody: JSX.Element;
  modalFooter?: JSX.Element;

  onClose(): void;
}

export const ModalWrapper = observer((props: Props) => {
  return (
    <>
      <Modal
        isCentered
        scrollBehavior={'inside'}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent maxW={'464px'} mx={'8px'}>
          <ModalHeader p={'16px 24px'}>
            <Flex justifyContent={'space-between'}>
              <Heading variant={'h5'}>{props.title}</Heading>
              <Box
                as={CloseIcon}
                boxSize={'32px'}
                cursor={'pointer'}
                fill={'#3F4647'}
                onClick={props.onClose}
              />
            </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody>{props.modalBody}</ModalBody>
          {props.modalFooter && (
            <ModalFooter
              justifyContent={'space-between'}
              pt={'40px'}
              pb={'24px'}
            >
              {props.modalFooter}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
