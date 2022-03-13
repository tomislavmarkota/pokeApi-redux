import React  from 'react'
import { useEffect } from 'react'
import { fetchPokeDetails, getPokeDetails, getPokeDetailsErr } from '../Services/redux'
import { useDispatch, useSelector } from 'react-redux'


export default function PokeDetails({ data }) {
    const dispatch = useDispatch();
    const pokeAbilities = useSelector(getPokeDetails);
    const error = useSelector(getPokeDetailsErr);
    const url = data.abilities[0].ability.url;
    const lang = pokeAbilities?.effect_entries[0].language.name;
    const effectLangOne = pokeAbilities?.effect_entries[1].effect;
    const effectLangTwo = pokeAbilities?.effect_entries[0].effect;
    const shortEffLangOne = pokeAbilities?.effect_entries[1].short_effect;
    const shortEffLangTwo = pokeAbilities?.effect_entries[0].short_effect;
 


 
 

    useEffect(() => {
        dispatch(fetchPokeDetails(url));
    }, [url, dispatch])

    if(!pokeAbilities){
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }


  return (
    <>
      <h2>Details</h2>
        <h4>Effect</h4>
        <p>{lang === "de" ? effectLangOne : effectLangTwo }</p>
        <h4>Short effect:</h4>
        <p>{lang === "de" ? shortEffLangOne : shortEffLangTwo}</p>
    </>
    
  )
}
