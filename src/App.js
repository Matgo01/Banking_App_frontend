

import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.min.js";

import './App.css';

// Importa i componenti e le librerie necessarie
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AccountView from "./components/account/AccountView";
import AddAccount from "./components/account/Addaccount";
import AccountProfile from "./components/account/AccountProfile";
import StartHome from "./components/StartHome";
import Register from "./login/Register";
import Login from "./login/Login";

// Definizione del componente App
function App() {
  return (
    <main className="container mt-5">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartHome/>}/>
          <Route exact path="/startHome" element={<Home/>} />
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login"   element={<Login/>}/>
          <Route exact path="/view-accounts" element={<AccountView />} />
          <Route exact path="/add-account" element={<AddAccount />} />
          <Route exact path="/account-profile/:id" element={<AccountProfile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;


