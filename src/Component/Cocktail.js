import React from "react";
import { tokens } from "../Theme";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Cocktail = ({ name, alcoholic, image, id }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box>
        <Card
          sx={{
            maxWidth: 365,
            border: 3,
            borderRadius: 5,
            borderColor: colors.orangeAccent[500],
            backgroundColor: colors.orangeAccent[500],
          }}
        >
          <CardMedia
            sx={{ height: 360, margin: "5px", borderRadius: 5 }}
            image={image}
            title="drinks"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              fontWeight="500"
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="body2" fontWeight="300">
              {alcoholic}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                maxWidth: 365,
                border: 3,
                borderRadius: 5,
                color:  colors.grey[100],
                borderColor: colors.greenAccent[500],
                backgroundColor: colors.greenAccent[500],
              }}
              textAlign="center"
              component={RouterLink}
              to={`/cocktail/${id}`}
              variant="outlined"
              size="small"
            >
              {" "}
              View Recipe
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
export default Cocktail;
