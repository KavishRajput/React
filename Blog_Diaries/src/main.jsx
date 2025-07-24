import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Pages/Layout.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Layout />
    </Provider>
  </StrictMode>
)
