import {
  Box,
  Collapse,
  Flex,
  Input,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ReactComponent as AngleDownIcon } from '../../assets/icons/u_angle-down.svg';
import { ReactComponent as AngleUpIcon } from '../../assets/icons/u_angle-up.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/u_trash-alt.svg';
import { FormController } from '../../commons/FormController';
import { Education } from '../../models/Education';
import { useHookForm } from './useHookForm';

interface Props {
  education: Education;
  onDelete(): void;
}

export const EducationItem = observer((props: Props) => {
  const { t } = useTranslation();
  const { education, onDelete } = props;

  const { validationSchema } = useHookForm(t);

  const { isOpen, onToggle } = useDisclosure();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: useMemo(() => {
      return {
        degree: education?.degree,
        institution: education?.institution,
      };
    }, [education]),
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (!education) {
      return;
    }

    reset({
      degree: education?.degree,
      institution: education?.institution,
    });
  }, [education]);

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      border={'1px solid #C8CFD3'}
      mt={'16px'}
      mb={'24px'}
      p={'16px'}
      onClick={() => onToggle()}
    >
      <Box flexGrow={1}>
        <Flex mb={'4px'}>
          <Flex justifyContent={'left'}>
            <Text
              variant={'displayName'}
              mr={'4px'}
              wordBreak={'break-word'}
              flex={1}
            >
              {`${education.degree} ${t(' at {{institution}}', {
                institution: education.institution,
              })}  `}
            </Text>

            <TrashIcon
              fill={'#C8CFD3'}
              width={'16px'}
              style={{ cursor: 'pointer' }}
              onClick={(event) => {
                event.stopPropagation();
                onDelete();
              }}
            />
          </Flex>

          {isOpen ? (
            <AngleUpIcon
              fill={'#C8CFD3'}
              width={'24px'}
              style={{ cursor: 'pointer', marginLeft: 'auto' }}
            />
          ) : (
            <AngleDownIcon
              fill={'#C8CFD3'}
              width={'24px'}
              style={{ cursor: 'pointer', marginLeft: 'auto' }}
            />
          )}
        </Flex>
        <Collapse in={isOpen}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={[1, 2]} spacing={'16px'} m={'16px 0'}>
              <FormController
                isRequired
                label={'Degree'}
                errors={errors}
                control={control}
                name={'degree'}
                render={(field) => (
                  <Input {...field} placeholder={t('Master')} />
                )}
              />
              <FormController
                isRequired
                label={'Institution'}
                errors={errors}
                control={control}
                name={'institution'}
                render={(field) => (
                  <Input {...field} placeholder={t('Master')} />
                )}
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
        </Collapse>
      </Box>
    </Box>
  );
});
