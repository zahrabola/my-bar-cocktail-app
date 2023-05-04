import React from 'react';
import { Box, Typography} from "@mui/material";

const Cocktail = ({name, alcoholic }) => {
    return (
        <Box>
            <Typography>
          
            {name}
            </Typography>
            <Typography>
            {alcoholic}
            </Typography>
        </Box>
    )
}
export default Cocktail