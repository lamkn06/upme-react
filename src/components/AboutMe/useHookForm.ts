import * as yup from 'yup';

import { REGEX_EMAIL, REGEXP_PHONE_NUMBER } from '../../constants/regex';

export const useHookForm = (t) => {
  const validationSchema = yup.object({
    personalStatement: yup
      .string()
      .nullable()
      .max(500, t('Max length is {{length}}', { length: '500' })),
    fullName: yup
      .string()
      .nullable()
      .max(45, t('Max length is {{length}}', { length: '45' })),
    position: yup
      .string()
      .nullable()
      .max(45, t('Max length is {{length}}', { length: '45' })),
    email: yup
      .string()
      .nullable()
      .required('This field is required')
      .matches(REGEX_EMAIL, t('Please input a valid email format'))
      .max(255, t('Max length is {{length}}', { length: '255' })),
    phoneNumber: yup
      .string()
      .nullable()
      .matches(REGEXP_PHONE_NUMBER, 'Phone number is not valid')

      .max(20, t('Max length is {{length}}', { length: '20' })),
    location: yup
      .string()
      .nullable()
      .max(255, t('Max length is {{length}}', { length: '255' })),
  });

  return { validationSchema };
};
