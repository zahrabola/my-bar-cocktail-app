import {ColorContextMode, useMode} from "./Theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
import './App.css';
import HeaderCocktail from "./Component/HeaderCocktail";
import Home from "./Pages/Home";

function App() {
  const [theme,  colorMode ] = useMode();

  return (
    <ColorContextMode.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
       <CssBaseline />
        <HeaderCocktail />

    
      <Routes>
      <Route path="/" element={<Home/>}/>
      
   { /* not found  <Route path="/" element={<Home/>}/> */}
      </Routes>
     


     

       </ThemeProvider>
       </ColorContextMode.Provider>
  );
}

export default App;
