import { LandingPageContent } from '../../components/LandingPage/LandingPageContent';
import { LandingPageFooter } from '../../components/LandingPage/LandingPageFooter';
import { LandingPageNavbar } from '../../components/LandingPage/LandingPageNavbar';
import { LandingPageTop } from '../../components/LandingPage/LandingPageTop';

interface Props {
  onLogin(): void;
  onSignUp(): void;
}

const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar onLogin={undefined} onSignUp={undefined} />
      <LandingPageTop onLogin={undefined} onSignUp={undefined} />
      <LandingPageContent onLogin={undefined} />
      <LandingPageFooter onLogin={undefined} onSignUp={undefined} />
    </>
  );
};

export default LandingPage;
