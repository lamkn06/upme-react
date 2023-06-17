import * as yup from 'yup';

export const useHookForm = (t) => {
  const validationSchema = yup.object({
    degree: yup
      .string()
      .nullable()
      .required('This field is required')
      .max(50, t('Max length is {{length}}', { length: '50' })),
    institution: yup
      .string()
      .nullable()
      .required('This field is required')
      .max(90, t('Max length is {{length}}', { length: '90' })),
  });

  return { validationSchema };
};
