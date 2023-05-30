import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

function SignUpModal() {
  return (
    <>
      <Modal
        isCentered
        scrollBehavior={'inside'}
        isOpen={true}
        onClose={undefined}
      >
        <ModalOverlay />
        <ModalContent rounded={'2px'} maxW={'464px'} mx={'8px'}></ModalContent>
      </Modal>
    </>
  );
}

export default SignUpModal;
