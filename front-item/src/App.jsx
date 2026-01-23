import ItemDetail from "./ItemDetail"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"
import UpdateForm from "./UpdateForm"

function App() {
  return (
    <div>
      <ItemForm />
      <hr />
      <ItemList />
      <hr />
      <ItemDetail />
      <hr />
      <UpdateForm />

    </div>
  )
}

export default App
