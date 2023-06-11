import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/u_eye-slash.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';
import { FormController } from '../../commons/FormController';
import { useRootStore } from '../../rootStore';
import AuthStore from '../../stores/AuthStore';
import { SocialFacebookLogin } from '../SocialFacebookLogin';
import { SocialGoogleLogin } from '../SocialGoogleLogin';
import { useHookForm } from './useHookForm';

export const ModalSignIn = observer(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [store] = useState(() => new AuthStore());

  const { modalStore, userStore } = useRootStore();
  const { isModalSignInOpen, openModal } = modalStore;

  const [isPasswordType, setPasswordType] = useState(false);

  const { validationSchema } = useHookForm(t);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    setError,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const handleOnClose = () => {
    reset();
    openModal('');
  };

  const onSubmit = async (data) => {
    try {
      const { token } = await store.loginByEmail(data);
      openModal('');
      userStore.setToken(token);
      await userStore.fetch();

      if (location.pathname !== '/') {
        return;
      }

      navigate('/profile');
    } catch (error) {
      setError('email', { message: 'Your email or password is incorrect' });
    }
  };

  return (
    <>
      <Modal
        isCentered
        scrollBehavior={'inside'}
        isOpen={isModalSignInOpen}
        onClose={undefined}
      >
        <ModalOverlay />
        <ModalContent minH={'626px'} maxW={'464px'} mx={'8px'}>
          <Box
            as={CloseIcon}
            boxSize={'32px'}
            cursor={'pointer'}
            fill={'#3F4647'}
            m={'26px 26px 32px auto'}
            onClick={handleOnClose}
          />

          <ModalBody p={'0 32px 40px'}>
            <Heading variant={'h5'}>
              {t('Log in to save your progress')}
            </Heading>

            <Flex
              align={'center'}
              mt={'16px'}
              flexDirection={['column', 'row']}
            >
              <Text variant={'body1'}>{t('Are you new to Upme?')}</Text>
              <Button
                variant={'unstyled'}
                h={'auto'}
                ml={'0.25em'}
                _focus={{}}
                onClick={() => openModal('modalSignUp')}
              >
                {t('Create Account')}
              </Button>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mt={'32px'}>
                <FormController
                  isRequired
                  label="Email"
                  errors={errors}
                  control={control}
                  name={'email'}
                  render={(field) => <Input {...field} />}
                />
              </Box>
              <Box mt={'24px'}>
                <FormController
                  isRequired
                  label="Password"
                  errors={errors}
                  control={control}
                  name={'password'}
                  render={(field) => (
                    <>
                      <InputGroup>
                        <Input
                          {...field}
                          type={isPasswordType ? 'text' : 'password'}
                          onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                              handleSubmit(onSubmit)();
                            }
                          }}
                        />

                        <InputRightElement
                          children={
                            <Box
                              as={isPasswordType ? EyeIcon : EyeSlashIcon}
                              cursor={'pointer'}
                              fill={'#3F4647'}
                              onClick={() => setPasswordType(!isPasswordType)}
                            />
                          }
                        />
                      </InputGroup>
                    </>
                  )}
                />
              </Box>
              <Button
                mt={'24px'}
                variant={'primary'}
                w={'100%'}
                h={'48px'}
                type="submit"
                isDisabled={!isValid || isSubmitting}
              >
                {t('Login Now')}
              </Button>
            </form>
            <SocialGoogleLogin />
            <SocialFacebookLogin />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
