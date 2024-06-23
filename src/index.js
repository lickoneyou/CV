import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
