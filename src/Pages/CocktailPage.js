import {
  CardContent,
  CardMedia,
  Card,
  Container,
  Grid,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import { tokens } from "../Theme";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CocktailPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktaildrinks, setCocktailDrinks] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const result = await (
          await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          )
        ).json();
        if (result.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strAlcoholic: alcoholic,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure14,
            strMeasure15,
          } = result.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient14,
            strIngredient15,
          ].filter((element) => {
            return element != null;
          });
          const measure = [
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure14,
            strMeasure15,
          ]
            .slice(0, ingredients.length)
            .map((element) => {
              return element;
            });

          const newCocktail = {
            name,
            image,
            category,
            alcoholic,
            glass,
            instructions,
            ingredients,
            measure,
          };
          setCocktailDrinks(newCocktail);
        } else {
          setCocktailDrinks(null);
        }
      } catch (error) {
        console.log("error");
      }
      setLoading(false);
    };
    getCocktail();
  }, [id]);

  if (loading) {
    return <h1> Loading....</h1>;
  } else {
    if (!cocktaildrinks) {
      return (
        <h1>
          {" "}
          Not a cocktail, try again <NoDrinksIcon />{" "}
        </h1>
      );
    } else {
      const {
        name,
        image,
        category,
        alcoholic,
        glass,
        instructions,
        ingredients,
        measure,
      } = cocktaildrinks;

      return (
        <Container maxWidth="lg" m="20px">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <CardMedia
                sx={{
                  height: 660,
                  margin: "5px",
                  borderRadius: 5,
                  marginTop: "20px",
                }}
                image={image}
                alt={name}
                title="drinks"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h2" margin={2}>
                    {name}
                  </Typography>
                  {category ? (
                    <Typography
                      variant="h4"
                      margin={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box padding={2}>
                          <LabelIcon
                            style={{ fill: colors.greenAccent[600] }}
                          />
                        </Box>

                        <Typography variant="h4" color={colors.grey[400]}>
                          {category}
                        </Typography>
                      </Box>
                    </Typography>
                  ) : null}
                  {alcoholic ? (
                    <Typography
                      variant="h4"
                      margin={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {alcoholic === "Non alcoholic" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box padding={2}>
                            <LocalCafeIcon
                              style={{ fill: colors.greenAccent[600] }}
                            />{" "}
                          </Box>

                          <Typography variant="h4" color={colors.grey[400]}>
                            {alcoholic}
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box padding={2}>
                            <LocalBarIcon
                              style={{ fill: colors.greenAccent[600] }}
                            />
                          </Box>

                          <Typography variant="h4" color={colors.grey[400]}>
                            {alcoholic}{" "}
                          </Typography>
                        </Box>
                      )}
                    </Typography>
                  ) : null}
                  {ingredients.length ? (
                    <Typography
                      variant="h4"
                      margin={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box padding={2}>
                        {" "}
                        <ShoppingBasketIcon
                          style={{ fill: colors.greenAccent[600] }}
                        />
                      </Box>

                      <Typography variant="" color={colors.grey[400]}>
                        {ingredients.length}
                        {ingredients.length > 1
                          ? " Ingredients "
                          : " Ingredient"}
                      </Typography>
                    </Typography>
                  ) : null}
                </Grid>
                {/* */}

                {ingredients.length
                  ? ingredients.map((element, iterate) => {
                      return element ? (
                        <Grid item xs={12} lg={6} key={iterate}>
                          <Card
                            sx={{
                              display: "flex",
                              borderRadius: "12",
                              padding: "12",
                              boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.2)",
                              alignItems: "center",
                            }}
                          >
                            {/* <CardMedia image={`www.thecocktaildb.com/images/ingredients/${element}-Small.png`}  title={element} alt="/"/> */}

                            <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "10px 12px 10px 12px !important",
                              }}
                            >
                              <Typography variant="h6" color={colors.grey[400]}>
                                Ingredients {iterate + 1}
                              </Typography>
                              <div>
                                <Typography variant="h5">{element}</Typography>
                              </div>
                              {measure[iterate] ? (
                                <Typography
                                  variant="h6"
                                  color={colors.grey[400]}
                                >
                                  {measure[iterate]}
                                </Typography>
                              ) : null}
                            </CardContent>
                          </Card>
                        </Grid>
                      ) : null;
                    })
                  : null}
                {/* */}
                <Grid item xs={12}>
                  <Card
                    sx={{
                      borderRadius: "12",
                      padding: "12",
                      boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {glass ? (
                      <div>
                        <Typography
                          variant="h6"
                          color={colors.grey[400]}
                          sx={{
                            padding: "10px 0 0 10px",
                          }}
                        >
                          Served in
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            padding: "10px 0 0 10px",
                          }}
                        >
                          {glass}
                        </Typography>
                      </div>
                    ) : null}

                    <Typography
                      variant="h6"
                      color={colors.grey[400]}
                      sx={{
                        padding: "10px",
                      }}
                    >
                      instruction
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "12px",
                        padding: "10px",
                      }}
                    >
                      {instructions}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/*   <div>Back home </div> */}
        </Container>
      );
    }
  }
};

export default CocktailPage;
