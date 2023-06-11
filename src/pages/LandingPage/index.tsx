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
        onLogin={() => modalStore.openModal('modalSignIn')}
        onSignUp={() => modalStore.openModal('modalSignUp')}
      />
      <LandingPageTop
        onLogin={() => modalStore.openModal('modalSignIn')}
        onSignUp={() => modalStore.openModal('modalSignUp')}
      />
      <LandingPageContent onLogin={() => modalStore.openModal('modalSignIn')} />
      <LandingPageFooter
        onLogin={() => modalStore.openModal('modalSignIn')}
        onSignUp={() => modalStore.openModal('modalSignUp')}
      />
    </>
  );
};

export default observer(LandingPage);
