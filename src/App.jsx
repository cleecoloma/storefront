import { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Categories />
        <Products />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
