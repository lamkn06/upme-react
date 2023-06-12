import { Button, Flex, Image, Input } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import AvatarPlaceholder from '../../assets/images/avatar-placeholder.svg';
import { useRootStore } from '../../rootStore';
import { ModalWrapper } from '../ModalWrapper';

export const ModalEditProfile = observer(() => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const { modalStore, userStore } = useRootStore();
  const { isModalEditProfileOpen, openModal } = modalStore;
  const { setAvatar } = userStore;

  const handleOnClose = () => {
    openModal('');
  };

  const handleSelectFile = (e) => {
    const file = e.target.files[0] as File;
    setAvatar(file);
    openModal('modalCropAvatar');
  };

  return (
    <ModalWrapper
      title={t('Profile')}
      isOpen={isModalEditProfileOpen}
      onClose={handleOnClose}
      modalBody={
        <>
          <Flex justifyContent={'space-between'} align={'center'}>
            <Image
              src={AvatarPlaceholder}
              bg={'#F8F8F9'}
              boxSize={112}
              border={'2px solid white'}
              borderRadius={24}
              loading="lazy"
            />
            <Flex flexFlow={'row wrap'} justifyContent={'center'}>
              <Button
                variant={'primary'}
                w={['153px', '106px']}
                mr={'16px'}
                h={'uploadFileInput'}
                onClick={() => inputRef.current.click()}
              >
                {t('Browse')}
              </Button>
              <Input
                ref={inputRef}
                hidden={true}
                id={'uploadFileInput'}
                type={'file'}
                display={'none'}
                accept={'.png, .jpg, .jpeg'}
                onChange={handleSelectFile}
              />

              <Button
                variant={'secondary'}
                w={['153px', '106px']}
                _hover={{ bg: '#fcfcfc' }}
              >
                {t('Delete')}
              </Button>
            </Flex>
          </Flex>
        </>
      }
      modalFooter={
        <>
          <Button
            variant={'secondary'}
            w={'130px'}
            _hover={{ bg: '#fcfcfc' }}
            onClick={handleOnClose}
          >
            {t('Cancel')}
          </Button>

          <Button variant={'primary'} w={'119px'} onClick={undefined}>
            {t('Save')}
          </Button>
        </>
      }
    />
  );
});
