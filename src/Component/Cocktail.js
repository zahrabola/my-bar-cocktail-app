import React from "react";
import { tokens } from "../Theme";
import { Box, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Cocktail = ({ name, alcoholic, image }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box >
        <Card
          sx={{
            maxWidth: 345,
            border: 3,
            borderRadius: 5,
            borderColor: colors.greenAccent[600],
          }}
        >
          <CardMedia sx={{ height: 360 }} image={image} title="drinks" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {alcoholic}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
export default Cocktail;
