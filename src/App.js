import { BrowserRouter, Route, Routes } from "react-router-dom"; 

import Admin from "./pages/Admin/index";
function App() { 
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </div>
  ); 
}

export default App;