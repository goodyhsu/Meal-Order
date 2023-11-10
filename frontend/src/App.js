import logo from './logo.svg';
import './App.css';
import CustomerNavBar from './components/CustomerNavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Pages/Home';
import { Orders } from './components/Pages/Orders';

// const result = await fetch('http://localhost:8081/allMeals').then((res) => {return res.json();});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;