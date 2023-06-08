import {
  Box,
  Heading,
  Input,
  SimpleGrid,
  Skeleton,
  Textarea,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import debounce from 'lodash/debounce';
import { observer } from 'mobx-react-lite';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormController } from '../../commons/FormController';
import { useRootStore } from '../../rootStore';
import { useHookForm } from './useHookForm';

const AboutMe = () => {
  const { t } = useTranslation();
  const { userStore } = useRootStore();
  const { profile, loading } = userStore;
  const { validationSchema } = useHookForm(t);

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: useMemo(() => {
      return {
        fullName: profile?.fullName,
        personalStatement: '',
        email: profile?.email,
        phoneNumber: '',
        location: '',
        position: '',
      };
    }, [profile]),
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);
  const aboutMe = watch();

  useEffect(() => {
    reset({
      fullName: profile.fullName || '',
      personalStatement: profile.fullName || '',
      email: profile.email || '',
      phoneNumber: '',
      location: '',
      position: '',
    });
  }, [profile]);

  useEffect(() => {
    const subscription = watch(
      debounce((value) => {
        if (isDirty || isValid) {
          return;
        }
        userStore.update(value);
      }, 1000),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Skeleton isLoaded={!loading}>
      <Box flexGrow={1}>
        <Heading size="lg" fontSize="24px" mt={'26px'} mb={'16px'}>
          {t('Personal Statement')}
        </Heading>

        <FormController
          errors={errors}
          control={control}
          name={'personalStatement'}
          render={(field) => (
            <Box mb={'40px'}>
              <Box
                color={
                  aboutMe.personalStatement?.length === 500
                    ? '#E53E3E'
                    : '#C1C9CD'
                }
                position={'absolute'}
                bottom={0}
                right={'5px'}
                fontSize={'14px'}
              >
                {aboutMe.personalStatement?.length}/500
              </Box>
              <Textarea
                {...field}
                paddingBottom={'20px'}
                borderRadius={2}
                resize={'none'}
                placeholder={t('Write something about your self')}
                maxLength={500}
              />
            </Box>
          )}
        />

        <Heading size="lg" fontSize="24px" mb={'16px'}>
          {t('Contact Details')}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={[1, 2]} spacing={'16px'} mb={'16px'}>
            <FormController
              label="Full name"
              errors={errors}
              control={control}
              name={'fullName'}
              render={(field) => (
                <Input {...field} placeholder={'eg. John '} maxLength={46} />
              )}
            />

            <FormController
              label="Position"
              errors={errors}
              control={control}
              name={'position'}
              render={(field) => (
                <Input
                  {...field}
                  placeholder={'eg. Project Manager'}
                  maxLength={46}
                />
              )}
            />

            <FormController
              label={'Email'}
              errors={errors}
              control={control}
              name={'email'}
              render={(field) => (
                <Input
                  {...field}
                  placeholder={'eg. john.doe@upme.cloud'}
                  maxLength={256}
                />
              )}
            />

            <FormController
              errors={errors}
              control={control}
              label={'Phone'}
              name={'phoneNumber'}
              render={(field) => (
                <Input
                  {...field}
                  placeholder={'eg. 0938223490'}
                  maxLength={21}
                />
              )}
            />
          </SimpleGrid>
          <FormController
            errors={errors}
            control={control}
            label={'Address'}
            name={'location'}
            render={(field) => (
              <Input
                {...field}
                placeholder={'eg. 56 Nguyen Dinh Chieu, HCMC'}
                maxLength={256}
              />
            )}
          />
        </form>
      </Box>
    </Skeleton>
  );
};

export default observer(AboutMe);
