import React, {useState, useRef} from 'react'
import { HeaderStyled } from './StyledComponents'
import { getPokemons } from '../Services/redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function SearchBar() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [searchErr, setSearchErr] = useState();
  const navigate = useNavigate();
  const data = useSelector(getPokemons);
  const searchRef = useRef();

  const handleChange = (e) => {
    setPokemonSearch(e.target.value);
    if(searchRef.current.value.trim() === ""){
      setSearchErr("");
    }
  }
 



  const onFormSubmit = (e) => {
    e.preventDefault();
    const checkName = data.results.find(({name}) => name === pokemonSearch);
    
    
      if(pokemonSearch === checkName?.name){
        navigate(`/pokeinfo/${pokemonSearch}`)
        searchRef.current.value = "";
    }else{
        setSearchErr("Warning ! We can't find this pokemon.");
        searchRef.current.focus()
    }
    
  }

  return (
    <>
      <HeaderStyled>
          <form onSubmit={onFormSubmit}>
            <input ref={searchRef} onChange={handleChange} type="text" placeholder='Enter pokemon name'/>
            <input type="submit" />
          </form>
      </HeaderStyled>
      <h4 style={{textAlign: "center"}}>{searchErr}</h4>
    </>
      
   
  )
}
