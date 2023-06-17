import { Heading, Skeleton } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { useRootStore } from '../../rootStore';
import { EducationItem } from './item';

const Education = () => {
  const { t } = useTranslation();
  const { userStore, profileStore } = useRootStore();
  const { loading, isAuthenticated } = userStore;

  const { educations, deleteEducation: onDelete, update } = profileStore;

  const handleOnDelete = (index: number) => {
    onDelete(index);

    if (isAuthenticated) {
      update();
    }
  };

  return (
    <Skeleton isLoaded={!loading}>
      <Heading size="lg" fontSize="24px" mb={'16px'}>
        {t('Học Vấn')}
      </Heading>

      {educations.map((education, i) => (
        <EducationItem
          education={education}
          key={i}
          onDelete={() => handleOnDelete(i)}
        />
      ))}
    </Skeleton>
  );
};

export default observer(Education);
