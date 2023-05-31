import { Button, Image } from '@chakra-ui/react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { observer } from 'mobx-react-lite';

import GoogleIcon from '../../assets/images/google.svg';

export const SocialGoogleLogin = observer(() => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
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
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
});
