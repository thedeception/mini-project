import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './components/CardSkeleton';
import { HiFilter } from 'react-icons/hi';
import Filter from './components/Filter';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import FullRecipe from './components/FullRecipe';
import Home from './components/Home';


function App() {
const [selectedRecipe,setSelectedRecipe]=useState();


  return (
    <div className="App">
     
<Router>
  <Routes>
  <Route   path="/"  element={<Home setSelectedRecipe={setSelectedRecipe} /> } />
      <Route  path="/:dish" element={<FullRecipe selectedRecipe={selectedRecipe}/>}/>
      </Routes>
      </Router>

     
    </div>
  );
}

export default App;
