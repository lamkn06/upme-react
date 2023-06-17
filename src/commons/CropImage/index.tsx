import { observer } from 'mobx-react-lite';
import { useRef, useState } from 'react';
import ReactCrop, { type Crop } from 'react-image-crop';

interface Props {
  src: string;
  aspect?: number;
  onCrop(result: string | ArrayBuffer | null): void;
}

export const CropImage = observer((props: Props) => {
  const [crop, setCrop] = useState<Crop>();

  const imageRef = useRef(null);

  const handleCropAndSave = (crop) => {
    setCrop(crop);

    const canvas = document.createElement('canvas');
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY,
    );
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          props.onCrop(reader.result);
        };
      },
      'image/jpeg',
      1,
    );
  };

  return (
    <>
      <ReactCrop
        crop={crop}
        aspect={props.aspect}
        onChange={(crop) => {
          setCrop(crop);
        }}
        onComplete={(crop) => {
          handleCropAndSave(crop);
        }}
      >
        <img src={props.src} ref={imageRef} />
      </ReactCrop>
    </>
  );
});
