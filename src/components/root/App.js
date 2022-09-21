import React from 'react';
import { Container } from "reactstrap";
import CartDetail from '../cart/CartDetail';
import Navi from "../navi/Navi";
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from "../common/NotFound";
import Singup from '../../loginLogout/SignUp';
import Login from '../../loginLogout/Login';
import Main from "../../mainPage/mainPage"
import Footer from "../footer/footer"
function App() {
  return (
    <Container >
      {/* <Navi /> */}
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Singup}/>
        <Route path="/home" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route exact component={NotFound}/>

      </Switch>
      
      <Footer/>
    </Container>
    
  );
}

export default App;
