import { FormControl, FormErrorMessage, Text } from '@chakra-ui/react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props {
  errors: FieldErrors<{
    [type: string]: any;
  }>;
  control: Control<any, any>;
  name: string;

  isRequired?: boolean;
  defaultValue?: string | number;

  render: (props: any) => JSX.Element;
}

export const FormController = (props: Props) => {
  const { t } = useTranslation();

  const { isRequired, errors, control, name, defaultValue } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      <Controller
        render={({ field }) => props.render(field)}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
      <FormErrorMessage mt={'4px'}>
        {!!errors[name] && <Text>{t(errors[name]?.message as string)}</Text>}
      </FormErrorMessage>
    </FormControl>
  );
};
