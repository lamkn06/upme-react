import { Button, Image } from '@chakra-ui/react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import GoogleIcon from '../../assets/images/google.svg';
import { useRootStore } from '../../rootStore';
import AuthStore from '../../stores/AuthStore';

export const SocialGoogleLogin = observer(() => {
  const [store] = useState(() => new AuthStore());
  const navigate = useNavigate();
  const location = useLocation();

  const { modalStore, userStore, profileStore } = useRootStore();
  const { openModal } = modalStore;

  const handleOnClose = () => {
    openModal('');
  };

  const responseGoogleSuccess = async (response: any) => {
    const { token } = await store.loginByGoogle(response.profileObj);
    handleOnClose();
    localStorage.setItem('token', token);
    await Promise.all([userStore.fetch(), profileStore.fetch()]);

    if (location.pathname !== '/') {
      return;
    }

    navigate('/profile');
  };

  const responseGoogleFail = (response: any) => {
    console.log(response.profileObj);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      scope="email"
      pluginName="Upme Login"
      render={(renderProps) => (
        <Button
          w={'100%'}
          variant={'secondary'}
          textTransform={'none'}
          fontWeight={'normal'}
          h={'48px'}
          mt={'16px'}
          onClick={renderProps.onClick}
        >
          <Image src={GoogleIcon} boxSize={'24px'} mr={'12px'} />
          Google
        </Button>
      )}
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFail}
      cookiePolicy={'single_host_origin'}
    />
  );
});
