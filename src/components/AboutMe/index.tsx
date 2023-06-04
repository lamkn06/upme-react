import { Box, Heading, Input, SimpleGrid, Textarea } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormController } from '../../commons/FormController';
import { useHookForm } from './useHookForm';

const AboutMe = () => {
  const { t } = useTranslation();

  const { validationSchema } = useHookForm(t);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      personalStatement: '',
      email: '',
      phoneNumber: '',
      location: '',
      position: '',
    },
    resolver: yupResolver(validationSchema),
  });

  console.log(errors);
  const onSubmit = (data) => console.log(data);
  const aboutMe = watch();

  return (
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
                aboutMe.personalStatement.length === 500 ? '#E53E3E' : '#C1C9CD'
              }
              position={'absolute'}
              bottom={0}
              right={'5px'}
              fontSize={'14px'}
            >
              {aboutMe.personalStatement.length}/500
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
            errors={errors}
            control={control}
            name={'fullName'}
            render={(field) => {
              console.log(field);
              return (
                <Input {...field} placeholder={'eg. John '} maxLength={46} />
              );
            }}
          />

          <FormController
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
            name={'phoneNumber'}
            render={(field) => (
              <Input {...field} placeholder={'eg. 0938223490'} maxLength={21} />
            )}
          />
        </SimpleGrid>
        <FormController
          errors={errors}
          control={control}
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
  );
};

export default AboutMe;
