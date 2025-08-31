import React               from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM            from 'react-dom/client';
import { Provider }        from 'react-redux';

import './index.css';
import '@mantine/core/styles.css';
import { BrowserRouter }   from 'react-router-dom';

import App       from './App';
import { store } from './store/store';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <MantineProvider>
            <App />
          </MantineProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}

