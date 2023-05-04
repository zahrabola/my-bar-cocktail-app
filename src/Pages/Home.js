import { useEffect, useState } from "react";
import Search from "../Component/Search";
import { Container } from "@mui/material";
//import axios from "axios";
import CocktailList from "../Component/CocktailList";

///https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
/*   axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => {
        // Handle response
        console.log(response.data);
    })
    .catch(err => {
        // Handle errors
        console.error(err);
    });


     useEffect(() => {
    if (query === "") {
      setInitial(false);
      const getaDrinks = async () => {
        try {
          const result = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
          );
          const { drinks } = result;
          if (drinks) {
            const newCocktail = drinks.map((element) => {
              const { idDrink, strDrink, strDrinkThumb, strAlcoholic } =
                element;
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                alcoholic: strAlcoholic,
              };
            });
            setCocktails(newCocktail);
          } else {
            setCocktails([]);
          }
        } catch (error) {
          // Handle errors
        }
        setLoading(false);
      };
      getaDrinks();
    }
  }, [query]);

 */
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [initial, setInitial] = useState(false);
  const [cocktails, setCocktails] = useState([]);



  useEffect(() => {    
    if(query === ''){
      setInitial(true);
    } else {
      const timer = setTimeout(() => {        
        setInitial(false);
        setLoading(true);        
        const getDrinks = async() => {
          try {
            const result = await (await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
            ).json();
            const { drinks } = result;

            if(drinks) {
              const newCocktails = drinks.map(element => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = element;
                return {
                  id: idDrink,
                  name: strDrink,
                  image: strDrinkThumb,
                  alcoholic: strAlcoholic
                };
              });
              setCocktails(newCocktails);
            } else {
              setCocktails([]);
            }
          } catch (error) {
            console.log('error: ', error);
          }
          setLoading(false);
        }
        getDrinks();
      }, 300);
      return () => clearTimeout(timer);
    }    
  }, [query]);





  return (
    <div>
      <Search setQuery={setQuery} />
      <Container>
        <CocktailList  loading={loading} cocktails={cocktails} initial={initial}/>
      </Container>
    </div>
  );
};
export default Home;
