import { Route, Routes, BrowserRouter } from "react-router-dom";
import PageSignin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<>home</>} /> */}
        <Route path="/signin" element={<PageSignin />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
