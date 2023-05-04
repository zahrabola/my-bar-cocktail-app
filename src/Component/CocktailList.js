import React from "react";
import { Box } from "@mui/material";
import Cocktail from "./Cocktail";
const CocktailList = ({ cocktails, loading, initial }) => {
  if (initial) {
    return <h1> Type in a cocktail name in search box. </h1>;
  } else {
    if (loading) {
      return <h1> Loading </h1>;
    } else {
      if (!cocktails.length) {
        return <h1> Not a cocktail, try again </h1>;;
      } else {
        return (
          <Box >
            {cocktails.map((element, index) => {
              return <Cocktail {...element} key={ index }/>;
            })}
          </Box>
        );
      }
    }
  }
};
export default CocktailList;
