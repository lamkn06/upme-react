import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCrop, { type Crop } from 'react-image-crop';

import { useRootStore } from '../../rootStore';
import { ModalWrapper } from '../ModalWrapper';

export const ModalCropAvatar = observer(() => {
  const { t } = useTranslation();

  const { modalStore, userStore } = useRootStore();
  const { isModalCropAvatarOpen, closeModal } = modalStore;
  const { selectingAvatar } = userStore;

  const [crop, setCrop] = useState<Crop>();
  const [imgSrc, setImgSrc] = useState('');
  const [image, setImage] = useState(null);

  const handleOnClose = () => {
    closeModal('modalCropAvatar');
  };

  const handleCropAndSave = () => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    // Converting to base64
    const base64Image = canvas.toDataURL('image/jpeg');
    console.log(base64Image);
  };

  useEffect(() => {
    if (!selectingAvatar) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () =>
      setImgSrc(reader.result?.toString() || ''),
    );
    reader.readAsDataURL(selectingAvatar);
  }, [selectingAvatar]);

  return (
    <ModalWrapper
      title={t('Profile Picture')}
      isOpen={isModalCropAvatarOpen}
      onClose={handleOnClose}
      modalBody={
        <>
          <ReactCrop
            crop={crop}
            onChange={(crop) => {
              setCrop(crop);
            }}
            onComplete={(crop) => {
              setCrop(crop);
            }}
          >
            <img src={imgSrc} onLoad={setImage} />
          </ReactCrop>
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
