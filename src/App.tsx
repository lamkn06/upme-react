import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { router } from './routes';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  );
};

export default observer(App);
