import { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Categories />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
