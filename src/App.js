

import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.min.js";

import './App.css';

// Importa i componenti e le librerie necessarie
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./common/NavBar";
import AccountView from "./components/account/AccountView";
import AddAccount from "./components/account/Addaccount";
import AccountProfile from "./components/account/AccountProfile";

// Definizione del componente App
function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-accounts" element={<AccountView />} />
          <Route exact path="/add-account" element={<AddAccount />} />
          <Route exact path="/account-profile/:id" element={<AccountProfile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;


