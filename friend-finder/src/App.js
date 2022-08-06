import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Leftsidebar from './components/Leftsidebar/Leftsidebar';
import Main from './components/MainContent/Main';
import Righrsidebar from './components/Rightsidebar/Rightsidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Leftsidebar />
      <Main />
      <Righrsidebar />
    </div>
  );
}

export default App;
