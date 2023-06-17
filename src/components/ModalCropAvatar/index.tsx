import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CropImage } from '../../commons/CropImage';
import { useRootStore } from '../../rootStore';
import { ModalWrapper } from '../ModalWrapper';

export const ModalCropAvatar = observer(() => {
  const { t } = useTranslation();

  const { modalStore, userStore } = useRootStore();
  const { isModalCropAvatarOpen, closeModal } = modalStore;
  const { selectingImage, setCropAvatar } = userStore;

  const [cropImage, setCropImage] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  const handleOnClose = () => {
    closeModal('modalCropAvatar');
  };

  const handleCropAndSave = () => {
    setCropAvatar(cropImage);
    handleOnClose();
  };

  useEffect(() => {
    if (!selectingImage) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () =>
      setImgSrc(reader.result?.toString() || ''),
    );
    reader.readAsDataURL(selectingImage);
  }, [selectingImage]);

  return (
    <ModalWrapper
      title={t('Profile Picture')}
      isOpen={isModalCropAvatarOpen}
      onClose={handleOnClose}
      modalBody={
        <>
          <CropImage
            aspect={1}
            src={imgSrc}
            onCrop={(result) => {
              setCropImage(result);
            }}
          />
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

          <Button variant={'primary'} w={'119px'} onClick={handleCropAndSave}>
            {t('Crop & Save')}
          </Button>
        </>
      }
    />
  );
});
