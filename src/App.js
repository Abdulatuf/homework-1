import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/posts";
import { useState } from "react";

 function App() {
  
  return (
    <div className="App">
      <Layout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
