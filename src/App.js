/* eslint-disable react/jsx-no-undef */
import './App.css';
import HomePage from "./Tatumotions/Pages/HomePage";
import AnimationPage from './Tatumotions/Pages/Animation';
import GraphicDesignPage from './Tatumotions/Pages/GraphicDesign';
import WebDesignPage from './Tatumotions/Pages/WebDesign';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage/>}/>
          <Route path="Animation" element={<AnimationPage/>}/>
          <Route path="GraphicDesign" element={<GraphicDesignPage/>}/>
          <Route path="WebDesign" element={<WebDesignPage/>}/>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
