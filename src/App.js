import "./Components_Css/master.css"
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import { Register } from "./Components/Register";
import { AuthProvider } from "./context/authContext";
import { ProtectedRouter } from "./Components/ProtectedRouter";


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;