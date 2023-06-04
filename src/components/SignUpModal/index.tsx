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
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as EyeIcon } from '../../assets/icons/u_eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/u_eye-slash.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/u_times.svg';
import { useRootStore } from '../../rootStore';
import { SocialFacebookLogin } from '../SocialFacebookLogin';
import { SocialGoogleLogin } from '../SocialGoogleLogin';

export const SignUpModal = observer(() => {
  const { modalStore } = useRootStore();
  const { isSignUpModalOpen, openModal } = modalStore;

  const [isPasswordType, setPasswordType] = useState(false);

  const { t } = useTranslation();
  const { register, reset } = useForm();

  const handleOnClose = () => {
    reset();
    openModal('');
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
              <FormControl isRequired mt={'24px'} mb={'32px'}>
                <FormLabel mb={'4px'}>{t('Password')}</FormLabel>

                <InputGroup>
                  <Input
                    {...register('password', {
                      required: t('Password cannot be empty'),
                      minLength: {
                        value: 8,
                        message: t('Minimum 8 characters'),
                      },
                    })}
                    type={isPasswordType ? 'text' : 'password'}
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

                {/* {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )} */}
              </FormControl>
              <Button
                w={'100%'}
                variant={'primary'}
                h={'48px'}
                onClick={undefined}
              >
                {t('Create your account free')}
              </Button>
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
