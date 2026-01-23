import { useState } from "react"
import ItemDetail from "./ItemDetail"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"
import UpdateForm from "./UpdateForm"

function App() {
  const [refreshKey, setRefreshKey] = useState(0)
  
  const handleItemAdded = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div>
      <ItemForm onItemAdded={handleItemAdded} />
      <hr />
      <ItemList key={refreshKey} />
      <hr />
      <ItemDetail />
      <hr />
      <UpdateForm onItemAdded={handleItemAdded} />

    </div>
  )
}

export default App
