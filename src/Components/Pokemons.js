import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getErr, fetchPokemonData } from '../Services/redux';
import { useEffect } from 'react';
import { Container, NavLinkStyled, Card } from './StyledComponents';
import {SearchBar, Preloader} from './index';
import logo from '../img/Pokemon-Logo.png';



function Pokemons() {
  const data = useSelector(getPokemons);
  const errorMsg = useSelector(getErr);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPokemonData("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if(errorMsg){
    return <h3>{errorMsg}</h3>
  }

  if(!data){
    return <Preloader />
  }
  

  return (
    <>
    <SearchBar />
    <Container>
      <Card>
        <img src={logo} alt="pokemon logo" />
        {data.results.map(pokemon => {
          return (
            <div key={pokemon.name}>
                <h3>{pokemon.name.toUpperCase()}</h3>
                <div>
                  <NavLinkStyled bgcolor='#FFCB04' bordercolor='#395CA8' fontSize=".8em" to={`/pokeinfo/${pokemon.name}`}>More info</NavLinkStyled>
                </div>
            </div>
          );
        })}
      </Card>
    </Container>
    </>
  );
}

export default Pokemons;

