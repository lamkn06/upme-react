import { ReactComponent as EducationIcon } from '../assets/icons/u_book-reader.svg';

export const renderMenuItems = (item: string) => {
  switch (item) {
    case 'education':
      return {
        icon: EducationIcon,
        label: 'Education',
      };
  }
};
