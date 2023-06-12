import { observer } from 'mobx-react-lite';

import { ModalCropAvatar } from '../ModalCropAvatar';
import { ModalEditProfile } from '../ModalEditProfile';
import { ModalSignIn } from '../ModalSignIn';
import { ModalSignUp } from '../ModalSignUp';
import { ModalSignUpSuccess } from '../ModalSignUpSuccess';

export const Modals = observer(() => {
  return (
    <>
      <ModalSignIn />
      <ModalSignUp />
      <ModalSignUpSuccess />
      <ModalEditProfile />
      <ModalCropAvatar />
    </>
  );
});
