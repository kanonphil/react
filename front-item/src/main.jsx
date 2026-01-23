import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ItemForm from './ItemForm.jsx'
import ItemList from './ItemList.jsx'
import ItemDetail from './ItemDetail.jsx'
import UpdateForm from './UpdateForm.jsx'

createRoot(document.getElementById('root')).render(
  <App />
  // <ItemForm />
  // <ItemList />
  // <ItemDetail />
  // <UpdateForm />
)
