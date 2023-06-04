import {
  Box,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  const {
    register,

    formState: { errors },
  } = useForm();

  return (
    <Box flexGrow={1}>
      <Heading size="lg" fontSize="24px" mt={'26px'} mb={'16px'}>
        {t('Personal Statement')}
      </Heading>

      <FormControl mb={'40px'} position={'relative'}>
        <Box
          position={'absolute'}
          bottom={0}
          right={'5px'}
          fontSize={'14px'}
        ></Box>
        <Textarea
          {...register('personalStatement')}
          paddingBottom={'20px'}
          borderRadius={2}
          resize={'none'}
          placeholder={t('Write something about your self')}
          maxLength={501}
          sx={{
            '::-webkit-scrollbar': {
              w: 0,
            },
          }}
        />
        <FormErrorMessage mt={'10px'}>
          {errors?.personalStatement && <Text></Text>}
        </FormErrorMessage>
      </FormControl>

      <Heading size="lg" fontSize="24px" mb={'16px'}>
        {t('Contact Details')}
      </Heading>

      <SimpleGrid columns={[1, 2]} spacing={'16px'} mb={'16px'}>
        <Input
          {...register('fullName')}
          id={'fullName'}
          placeholder={'eg. John Doe'}
          maxLength={46}
        />

        <Input
          {...register('position')}
          id={'position'}
          placeholder={'eg. Project Manager'}
          maxLength={46}
        />

        <Input
          {...register('email')}
          id={'email'}
          placeholder={'eg. john.doe@upme.cloud'}
          maxLength={256}
        />

        <Input
          {...register('phoneNumber')}
          id={'phoneNumber'}
          placeholder={'eg. 0938223490'}
          maxLength={21}
        />
      </SimpleGrid>

      <Input
        {...register('location')}
        id={'location'}
        placeholder={'eg. 56 Nguyen Dinh Chieu, HCMC'}
        maxLength={256}
      />
    </Box>
  );
};

export default AboutMe;
