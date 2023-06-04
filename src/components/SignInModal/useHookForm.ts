import * as yup from 'yup';

import { REGEX_EMAIL } from '../../constants/regex';

export const useHookForm = (t) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .nullable()
      .required('This field is required')
      .matches(REGEX_EMAIL, t('Please input a valid email format')),
    password: yup.string().nullable().required('This field is required'),
  });

  return { validationSchema };
};
