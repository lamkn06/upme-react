import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/u_eye-slash.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';
import { useRootStore } from '../../rootStore';
import { SocialFacebookLogin } from '../SocialFacebookLogin';
import { SocialGoogleLogin } from '../SocialGoogleLogin';

export const SignInModal = observer(() => {
  const { modalStore } = useRootStore();
  const { isSignInModalOpen, openModal } = modalStore;

  const [isPasswordType, setPasswordType] = useState(false);

  const { t } = useTranslation();

  const handleOnClose = () => {
    openModal('');
  };

  const { register } = useForm();

  return (
    <>
      <Modal
        isCentered
        scrollBehavior={'inside'}
        isOpen={isSignInModalOpen}
        onClose={undefined}
      >
        <ModalOverlay />
        <ModalContent rounded={'2px'} minH={'626px'} maxW={'464px'} mx={'8px'}>
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
                onClick={() => openModal('signUpModal')}
              >
                {t('Create Account')}
              </Button>
            </Flex>

            <FormControl isRequired mt={'32px'}>
              <FormLabel mb={'4px'}>{t('Email Address')}</FormLabel>

              <Input
                {...register('email', {
                  required: t('Please input a valid email format'),
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: t('Please input a valid email format'),
                  },
                })}
                type="email"
              />

              {/* {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )} */}
            </FormControl>

            <FormControl isRequired mt={'24px'} mb={'24px'}>
              <FormLabel mb={'4px'} display={'inline-block'}>
                {t('Password')}
              </FormLabel>
              <Button
                pos={'relative'}
                display={'inline-block'}
                float={'right'}
                variant={'unstyled'}
                h={'auto'}
                mt={'6px'}
                ml={'auto'}
                size={'sm'}
                onClick={handleOnClose}
              >
                {t('Forgot Password?')}
              </Button>
              <InputGroup>
                <Input
                  {...register('password', {
                    required: t('Password cannot be empty'),
                  })}
                  type={isPasswordType ? 'text' : 'password'}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      undefined;
                      //  handleSubmit(onSubmit)();
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
              {/* 
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )} */}
            </FormControl>

            <Button
              variant={'primary'}
              w={'100%'}
              h={'48px'}
              onClick={undefined}
            >
              {t('Login Now')}
            </Button>

            <SocialGoogleLogin />
            <SocialFacebookLogin />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
