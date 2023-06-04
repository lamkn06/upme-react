import { observer } from 'mobx-react-lite';

import { ModalSignIn } from '../ModalSignIn';
import { ModalSignUp } from '../ModalSignUp';
import ModalSignUpSuccess from '../ModalSignUpSuccess';

export const ModalWrapper = observer(() => {
  return (
    <>
      <ModalSignIn />
      <ModalSignUp />
      <ModalSignUpSuccess />
    </>
  );
});
