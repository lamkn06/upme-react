import '@fontsource/roboto';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import { ModalWrapper } from './components/ModalWrapper';
import i18n from './i18n';
import { Provider } from './rootStore';
import { router } from './routes';
import theme from './theme';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <Provider>
          <Suspense fallback={<></>}>
            <RouterProvider router={router} fallbackElement={<></>} />
            <ModalWrapper />
          </Suspense>
        </Provider>
      </ChakraProvider>
    </I18nextProvider>
  );
};

export default observer(App);
