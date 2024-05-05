import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import TemplatesListing from './Pages/Templates/TemplatesListing';
import AddTemplate from './Pages/Forms/AddTemplate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/template' element={<TemplatesListing />} />
          <Route path='/template/add' element={<AddTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
