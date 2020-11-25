import './App.css';
import React from 'react'
import Footer from './views/Footer';
import Body from './views/Body';
import Header from './views/Header';


function App() {
  return (
    <div className="App">
      <header >
        <Header />
        
      </header>
      <div>
        <Body />
      </div>
      <footer >
        <Footer />
      </footer>
    </div >
  )
}


export default App;
