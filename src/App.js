import {ColorContextMode, useMode} from "./Theme"
import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { Routes, Route,Router, Switch  } from "react-router-dom";
//import { useState } from "react";
import './App.css';
import HeaderCocktail from "./Component/HeaderCocktail";

function App() {
  const [theme,  colorMode ] = useMode();

  return (
    <ColorContextMode.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
       <CssBaseline />
        <HeaderCocktail />
    <Router>
      <Routes>
      <Route>

</Route>

      </Routes>
    
      <Switch>

      </Switch>

    </Router>
     

       </ThemeProvider>
       </ColorContextMode.Provider>
  );
}

export default App;
