import './App.css';
import '@fontsource/roboto';

import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Navigate, Route, Routes } from 'react-router-dom';

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
            <Routes>
              {router.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
              <Route path="*" element={<Navigate to={'/'} replace />} />
            </Routes>
          </Suspense>
        </Provider>
      </ChakraProvider>
    </I18nextProvider>
  );
};

export default observer(App);
