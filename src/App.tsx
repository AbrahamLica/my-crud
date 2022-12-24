import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";



function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
