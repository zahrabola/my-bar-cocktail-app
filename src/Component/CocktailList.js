import React from "react";
import { Grid, Fade } from "@mui/material";
import Cocktail from "./Cocktail";
const CocktailList = ({ cocktails, loading, initial }) => {
  if (initial) {
    return <h1> Type in a cocktail name in search box. </h1>;
  } else {
    if (loading) {
      return <h1> Loading </h1>;
    } else {
      if (!cocktails.length) {
        return <h1> Not a cocktail, try again </h1>;
      } else {
        return (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
            justifyContent="center"
          >
            {cocktails.map((element) => {
              return (
                <Fade in={true} key={element.id}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Cocktail {...element} />
                  </Grid>
                </Fade>
              );
            })}
          </Grid>
        );
      }
    }
  }
};
export default CocktailList;
