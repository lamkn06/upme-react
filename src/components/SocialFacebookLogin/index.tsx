import { Button, Image } from '@chakra-ui/react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { observer } from 'mobx-react-lite';

import GoogleIcon from '../../assets/images/facebook.svg';

export const SocialFacebookLogin = observer(() => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
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
      onFail={responseGoogle}
    />
  );
});
