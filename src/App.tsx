
import './App.css'
import { Counter } from './features/counter/Counter'
import ProductList from './features/products/ProductList'
import Sandwich from './features/sandwich/Sandwich'
import { UsersList } from './features/users/UsersList'


function App() {
  
  return (
   <>
   <ProductList/>
      <Counter/>
      <Sandwich/>
      <UsersList/>

    </>
  )
}

export default App
