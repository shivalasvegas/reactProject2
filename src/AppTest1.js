import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstExample from './FirstExample';
import SecondExample from './SecondExample';
import Salary from './Salary';
import Marks from './Results';
import Link from './Links.js';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Welcome my friends!</h1>
        </p> 
      </header>
      <main>
      <div>
        <Salary name="Edna" tax="20" salary="2500"/>
        <Salary name="Carl" tax="15" salary="2000"/>
      </div>
      <br/>
      <div>
        <Marks name="Reeve" physMark="75" chemMark="92" mathMark="89"/>
        <Marks name="Jester" physMark="67" chemMark="49" mathMark="30"/>
        <Marks name="Marksman" physMark="68" chemMark="55" mathMark="70"/>
      </div>
      <br/>
      <br/>
      <div>
        <p>
          <Link url="https://www.bbc.com" text="BBC"/>
        </p>
        <p>
          <Link url="https://www.cnn.com" text="CNN"/>
        </p>
        <p>
          <Link url="https://www.rt.com" text="RT"/>
        </p>
      </div>
      <br/>
      <br/>
      <div>
        <h3>Welcome <Login name="Steve"/></h3>
        <h3>Welcome <Login name="Frank"/></h3>
      </div>
      <FirstExample/>
      <SecondExample/>
      </main>
    </div>
  );
}

export default App;
