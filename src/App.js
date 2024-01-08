
import React from 'react';
import styles from './App.module.css';
import Counter from './components/Counter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import CreateDay from './components/CreateDay';
import EmptyPage from './components/EmptyPage';
import DayList from './components/DayList';
import Day from './components/Day';
import CreateWord from './components/CreateWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<DayList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
          <Route path="/create_word" element={<CreateWord/>}></Route>
          <Route path="/create_day" element={<CreateDay/>}></Route>
          <Route path="*" element={<EmptyPage/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
