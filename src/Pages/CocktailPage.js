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

import { tokens } from "../Theme";


const CocktailPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Container maxWidth="lg" m="20px">
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <img
            sx={{
              display: "block",
              maxWidth: "100%",
              borderRadius: 12,
              width: "auto",
            }}
          />{" "}
          img
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h2" margin={2}>Name </Typography>
                <Typography variant="h4" margin={2} sx={{
                  display: "flex",
                  alignItems:"center",
                }}>
                    <Box padding={2}><LabelIcon style={{ fill: colors.greenAccent[600] }}/><Typography variant="h6" color={colors.grey[400]} >Category</Typography></Box>
                    <Box padding={2}><LocalCafeIcon  style={{ fill: colors.greenAccent[600] }} /> <Typography variant="h6" color={colors.grey[400]} >non alcoholic</Typography></Box>
                    <Box padding={2}><LocalBarIcon  style={{ fill: colors.greenAccent[600] }} /><Typography variant="h6" color={colors.grey[400]} >alcoholic </Typography></Box>
                    <Box padding={2}> <ShoppingBasketIcon  style={{ fill: colors.greenAccent[600] }}/><Typography variant="h6" color={colors.grey[400]} >ingredients</Typography></Box>
                </Typography>
            
            </Grid>
            {/* */}
            return (
            <Grid item xs={12} lg={6}>
              <Card
                sx={{
                  display: "flex",
                  borderRadius: "12",
                  padding: "12",
                  boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.2)",
                  alignItems: "center",
                }}
              >
                <CardMedia />
                img
                <CardContent 
                sx={{
                    display: "flex",
                    flexDirection:"column",
                    padding: "0 0 0 12px !important",
                }}>
                  <Typography variant="h4" color={colors.grey[400]}>ingredients</Typography>
                  <div>
                    <Typography>iterate</Typography>
                  </div>
                  <Typography variant="h4" color={colors.grey[400]}>measure</Typography>
                </CardContent>
              </Card>
            </Grid>
            ){/* */}
            <Grid item xs={12}>
              <Card sx={    
                {borderRadius: "12",
                   padding: "12",
    boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.2)",}}>
                <Typography variant="h4" color={colors.grey[400]} >Served in</Typography>
                <div>Glass</div>
                <Typography variant="h4" color={colors.grey[400]}>instruction</Typography>
                <div sx={{
                        marginBottom: "12px",
                }}>instruction</div>
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
