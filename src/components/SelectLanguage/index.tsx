import { observer } from 'mobx-react-lite';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { useRootStore } from '../../rootStore';

const select: any = {
  control: (provided: HTMLSelectElement, state: { isFocused: boolean }) => {
    return {
      ...provided,
      boxShadow: state.isFocused ? '0 0 0 1px #06dcff' : 'none',
      minHeigh: 30,
      padding: '0px 8px',
      width: 100,
      ':hover': {
        borderColor: state.isFocused ? '#06DCFF' : '#CBD5E0',
      },
    };
  },
  indicatorsContainer: (provided: HTMLSelectElement) => ({
    ...provided,
    svg: {
      color: 'black',
    },
  }),
  indicatorSeparator: (provided: HTMLSelectElement) => ({
    ...provided,
    display: 'none',
  }),
  menuList: (provided: HTMLSelectElement) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 'lg',
  }),
  option: (provided: HTMLSelectElement) => ({
    ...provided,
    backgroundColor: 'none',
    color: '#3F4647',
    ':hover': {
      color: '#06DCFF',
      cursor: 'pointer',
    },
  }),
  valueContainer: (provided: HTMLSelectElement) => ({
    ...provided,
    fontWeight: 500,
    padding: 0,
  }),
  menuPortal: (base: CSSStyleDeclaration) => ({ ...base, zIndex: 3 }),
};

export const SelectLanguage = observer(
  ({ selectStyles }: { selectStyles?: CSSProperties }) => {
    const { masterStore } = useRootStore();

    const { currentLanguage, setClientCountry, languages } = masterStore;
    const { i18n } = useTranslation();

    return (
      <Select
        isSearchable={false}
        menuPortalTarget={document.body}
        styles={selectStyles || select}
        options={languages}
        value={currentLanguage}
        onChange={(val: { value: string }) => {
          i18n.changeLanguage(val.value);
          setClientCountry(val.value);
        }}
      />
    );
  },
);
