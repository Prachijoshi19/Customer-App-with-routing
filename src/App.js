import axios from 'axios';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import CustomerList from './components/CustomerList';
import { useState,useEffect } from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  let [customer,setCustomer] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3005/customer')
    .then((response)=>{
      setCustomer(response.data)
    })
    .catch((err)=>{
      console.log('Some error!!!'+err)
    })
  },[])
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path='/' element={<Login></Login>}></Route>
          <Route exact path='/Home' element={
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>}>
          </Route>
          <Route exact path='/newCustomer' element={
            <PrivateRoute>
              <AddCustomer customer={customer} setCustomer={setCustomer}></AddCustomer>
            </PrivateRoute>} >
          </Route>
          <Route exact path='/edit/:id' element={<PrivateRoute>
            <UpdateCustomer customer={customer} setCustomer={setCustomer}></UpdateCustomer>
          </PrivateRoute>} >
          </Route>
          <Route exact path='/list' element={<PrivateRoute>
            <CustomerList customer={customer} setCustomer={setCustomer}></CustomerList>
          </PrivateRoute>}>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
