import logo from './logo.svg';
import styles from './App.css';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import React from 'react';
import Footer from './Footer/Footer';

function App() {
  return (
    <React.Fragment>
    <Header />
    <Homepage />
    <Footer />
    </React.Fragment>
  );
}


export default App;
