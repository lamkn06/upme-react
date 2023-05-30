import { observer } from 'mobx-react-lite';

import { SignInModal } from '../SignInModal';
import { SignUpModal } from '../SignUpModal';

export const ModalWrapper = observer(() => {
  return (
    <>
      <SignInModal />
      <SignUpModal />
    </>
  );
});
