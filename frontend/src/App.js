import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen.js'
import registerScreen from './screens/registerScreen'
import UserListScreen from './screens/UserListScreen.js'
import AddProductScreen from './screens/AddProductScreen.js'
function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path='/admin/addproduct' component={AddProductScreen} />
          <Route path='/register' component={registerScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route exact path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </ Router>
  );
}

export default App;
