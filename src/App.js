import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Feed} from "./features/feed/Feed";
import {NavBar} from "./features/navbar/NavBar";
import {SideBar} from "./features/sidebar/SideBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
           <section className={'main'}>
            <Feed/>
            <SideBar/>
           </section>
    </div>
  );


}

export default App;
