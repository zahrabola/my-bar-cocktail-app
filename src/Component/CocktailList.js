import React from "react";
import { Box } from "@mui/material";
import Cocktail from "./Cocktail";
const CocktailList = ({ cocktails, loading, initial }) => {
  if (initial) {
    return <h1> Type in a cocktail name in search box. </h1>;
  } else {
    if (loading) {
      return <h1> loading </h1>;
    } else {
      return (
        <Box>
          {cocktails.map((element) => {
            return <Cocktail {...element} />;
          })}
        </Box>
      );
    }
  }
};

export default CocktailList;
