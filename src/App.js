import "./Components_Css/master.css"
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import { AuthProvider } from "./context/authContext";
function App() {

  return (
    <div className="AppContainer">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
