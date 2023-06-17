import { Button, Input, SimpleGrid } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { FormController } from '../../commons/FormController';
import { Education } from '../../models/Education';
import { useRootStore } from '../../rootStore';
import { ModalWrapper } from '../ModalWrapper';
import { useHookForm } from './useHookForm';

export const ModalEducation = observer(() => {
  const { t } = useTranslation();
  const { modalStore, profileStore, userStore } = useRootStore();
  const { isAuthenticated } = userStore;
  const { openModal, isModalEducationOpen } = modalStore;
  const { createEducation, update } = profileStore;

  const handleOnClose = () => {
    openModal('');
  };

  const { validationSchema } = useHookForm(t);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      degree: '',
      institution: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (value: Education) => {
    createEducation(value);

    if (isAuthenticated) {
      update();
    }

    handleOnClose();
  };

  return (
    <ModalWrapper
      options={{ maxW: '750px' }}
      title={t('Education')}
      isOpen={isModalEducationOpen}
      onClose={handleOnClose}
      modalBody={
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={[1, 2]} spacing={'16px'} m={'16px 0'}>
            <FormController
              isRequired
              label={'Degree'}
              errors={errors}
              control={control}
              name={'degree'}
              render={(field) => <Input {...field} placeholder={t('Master')} />}
            />
            <FormController
              isRequired
              label={'Institution'}
              errors={errors}
              control={control}
              name={'institution'}
              render={(field) => <Input {...field} placeholder={t('Master')} />}
            />
            {/* <FormController
              label={'From'}
              errors={errors}
              control={control}
              name={'educateFrom'}
              render={(field) => (
                <Input {...field} placeholder={t('Master')} maxLength={50} />
              )}
            />
            <FormController
              label={'To'}
              errors={errors}
              control={control}
              name={'educateTo'}
              render={(field) => (
                <Input {...field} placeholder={t('Master')} maxLength={50} />
              )}
            /> */}
          </SimpleGrid>
          <button
            type="submit"
            id={'education-submit'}
            style={{ display: 'none' }}
          >
            Submit
          </button>
        </form>
      }
      modalFooter={
        <>
          <Button
            variant={'secondary'}
            w={'130px'}
            _hover={{ bg: '#fcfcfc' }}
            onClick={handleOnClose}
          >
            {t('Cancel')}
          </Button>

          <Button
            variant={'primary'}
            w={'119px'}
            type="submit"
            onClick={() => document.getElementById(`education-submit`).click()}
          >
            {t('Save')}
          </Button>
        </>
      }
    />
  );
});
