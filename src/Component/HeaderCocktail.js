import {ColorContextMode, tokens} from "../Theme";
import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const HeaderCocktail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorContextMode)  
return (
   
    <Box display="flex" justifyContent="space-between" p={3} backgroundColor={colors.orangeAccent[500]}>
    {/*search bar */}
    <Box display="flex" borderRadius="5px" >
    <IconButton type="button" sx={{p: 1}}>
        <HomeOutlinedIcon style={{ fill: colors.greenAccent[600] }}/>
    </IconButton>
    </Box>      
      {/* icons - conditional rendering*/}
      <Box display="flex">
        <IconButton onClick={colorMode.togglecolorMode}>
            {theme.palette.mode === 'dark' ? (
               <DarkModeOutlinedIcon style={{ fill: colors.greenAccent[400] }} /> 
            ) : (
                <LightModeOutlinedIcon style={{ fill: colors.greenAccent[800] }} />
            )}
           
        </IconButton> 
      </Box>
</Box>

)
}
export default HeaderCocktail;