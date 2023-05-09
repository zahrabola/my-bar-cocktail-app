import {
  CardContent,
  CardMedia,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const CocktailPage = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <img /> img
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography>Name </Typography>
              <div>subtitle</div>
              <Typography>
                Category
                <LabelIcon />
              </Typography>
              <Typography>
                non alcoholic
                <LocalCafeIcon />
                alcoholic
                <LocalBarIcon />
              </Typography>
              <Typography>
                ingredients
                <ShoppingBasketIcon />
              </Typography>
            </Grid>
            {/* */}
            return (
            <Grid item xs={12} lg={6}>
              <Card>
                <CardMedia />
                img
                <CardContent>
                  <Typography>ingredients</Typography>
                  <div>
                    <Typography>iterate</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            ){/* */}
            <Grid>
              <Card>
                <Typography>Served in</Typography>
                <div>Glass</div>
                <Typography>Served in</Typography>
                <div>Glass</div>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* */}
      <div>Back home </div>
    </Container>
  );
};
export default CocktailPage;
