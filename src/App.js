import Home from "./pages/home/Home";
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  >
            <Route index element={<Home/>} ></Route>
            <Route path="login" element={ <Login/> } ></Route>
            <Route path="users" >
              <Route index element={ <List /> } ></Route>
              <Route path=":userId" element={ <Single /> }  ></Route>
              <Route path="new" element={ <New inputs ={userInputs} title="Add new Users" /> }  > </Route>
            </Route>

            <Route path="products" >
              <Route index element={ <List /> } ></Route>
              <Route path=":productId" element={ <Single /> }  ></Route>
              <Route path="new" element={ <New inputs={productInputs} title="Add new Product" /> }  > </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
