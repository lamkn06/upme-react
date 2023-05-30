import { observer } from 'mobx-react-lite';

import { LandingPageContent } from '../../components/LandingPage/LandingPageContent';
import { LandingPageFooter } from '../../components/LandingPage/LandingPageFooter';
import { LandingPageNavbar } from '../../components/LandingPage/LandingPageNavbar';
import { LandingPageTop } from '../../components/LandingPage/LandingPageTop';
import { useRootStore } from '../../rootStore';

const LandingPage = () => {
  const { modalStore } = useRootStore();

  return (
    <>
      <LandingPageNavbar
        onLogin={() => modalStore.openModal('signInModal')}
        onSignUp={() => modalStore.openModal('signUpModal')}
      />
      <LandingPageTop
        onLogin={() => modalStore.openModal('signInModal')}
        onSignUp={() => modalStore.openModal('signUpModal')}
      />
      <LandingPageContent onLogin={undefined} />
      <LandingPageFooter onLogin={undefined} onSignUp={undefined} />
    </>
  );
};

export default observer(LandingPage);
