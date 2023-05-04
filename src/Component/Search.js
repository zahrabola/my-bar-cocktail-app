import { tokens} from "../Theme";
import { IconButton, Box, Container, useTheme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
//import { useFormControl } from '@mui/material/FormControl';
const Search = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
    <Container>
 <Box  display="flex" flexWrap="wrap" m="30px" sx={{border: 3, borderRadius: 5, borderColor: colors.greenAccent[600],}} >
<InputBase sx={{ ml: 2, flex: 1,  }} placeholder="Search Cocktails"  id="search" label="Outlined" variant="outlined"/>
       <IconButton type="button" sx={{p: 1}}>
           <SearchIcon style={{ fill: colors.greenAccent[600]}} />
       </IconButton>
   </Box>
    </Container>

       
   
   
    )
}
export default Search;