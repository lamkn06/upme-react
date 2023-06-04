import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
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
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/u_eye-slash.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';
import { FormController } from '../../commons/FormController';
import { useRootStore } from '../../rootStore';
import AuthStore from '../../stores/AuthStore';
import { SocialFacebookLogin } from '../SocialFacebookLogin';
import { SocialGoogleLogin } from '../SocialGoogleLogin';
import { useHookForm } from './useHookForm';

export const ModalSignUp = observer(() => {
  const { t } = useTranslation();

  const [store] = useState(() => new AuthStore());

  const { modalStore } = useRootStore();
  const { isSignUpModalOpen, openModal } = modalStore;

  const [isPasswordType, setPasswordType] = useState(false);

  const { validationSchema } = useHookForm(t);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
    setError,
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
      await store.registerByEmail(data);
      openModal('signInSuccessModal');
    } catch (error) {
      setError('email', { message: 'Your email or password is incorrect' });
    }
  };

  return (
    <>
      <Modal
        isCentered
        scrollBehavior={'inside'}
        isOpen={isSignUpModalOpen}
        onClose={() => openModal('')}
      >
        <ModalOverlay />
        <ModalContent rounded={'2px'} maxW={'464px'} mx={'8px'}>
          <Box
            as={CloseIcon}
            boxSize={'32px'}
            cursor={'pointer'}
            fill={'#3F4647'}
            m={'26px 26px 32px auto'}
            onClick={handleOnClose}
          />
          <ModalBody p={'0 32px 40px'}>
            <>
              <Heading variant={'h5'}>
                {t('Create an account to save your progress')}
              </Heading>
              <Flex
                align={'center'}
                mt={'16px'}
                flexDirection={['column', 'row']}
              >
                <Text variant={'body1'}>
                  {t('Do you already have an account?')}
                </Text>
                <Button
                  variant={'unstyled'}
                  h={'auto'}
                  ml={'0.25em'}
                  _focus={{}}
                  onClick={() => openModal('signInModal')}
                >
                  {t('Login Now')}
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
                  {t('Create your account free')}
                </Button>
              </form>
              <SocialGoogleLogin />
              <SocialFacebookLogin />

              <Box mt={'16px'} color={'mono1'} fontSize={'lg'}>
                <Trans>
                  By signing up I agree to the{' '}
                  <Link
                    as={RouterLink}
                    to={'/legal/terms'}
                    target={'_blank'}
                    color={'primary'}
                    fontWeight={'semibold'}
                  >
                    Terms
                  </Link>{' '}
                  &{' '}
                  <Link
                    as={RouterLink}
                    to={'/legal/privacy-policy'}
                    target={'_blank'}
                    color={'primary'}
                    fontWeight={'semibold'}
                  >
                    Privacy Policy
                  </Link>
                </Trans>
              </Box>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
