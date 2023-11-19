import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Product from './Components/Productview/Product';
import Sub from './Components/Submenu/Sub';
function App() {
  return <>
      <Routes>
        <Route path="/" element={<Main/>}>
        <Route index element={<Sub/>} />
        <Route path="/productview" element={<Product/>}/>
        </Route>
        </Routes>
  </>
}

export default App;
