import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header&Footer/Header";
import NavBar from "../components/Navbar/NavBar";
import Accueil from "../pages/Accueil";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/search" element={"Search"} />
          <Route path="/disconnect" element={"Disconnect"} />
          <Route path="/profile" element={"Profile"} />
          <Route path="*" element={"Error 404"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
