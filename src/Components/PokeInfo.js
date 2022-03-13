import React, {useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPokeInfo, getPokeInfoErr, fetchPokeInfo } from '../Services/redux';
import { useParams } from 'react-router';
import { CardInfo, NavLinkStyled, Circle } from './StyledComponents';
import {PokeDetails, SearchBar, Preloader } from './index';

export default function PokeInfo() {
    const data = useSelector(getPokeInfo);
    const error = useSelector(getPokeInfoErr);
    const dispatch = useDispatch();
    const [ palette, setPalette ] = useState("");
    let {name} = useParams();


    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0',
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7a5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#EEEEEE',
      fighting: '#E6E0D4',
      normal: '#EEEEEE',
    };

    

    useEffect(() => {
      dispatch(fetchPokeInfo((name)));
    }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

   
    useEffect(() => {
      const colorChange = () => {
        const pokemonType = data?.types[0].type.name;
        setPalette(colors[pokemonType]);
      }
      colorChange(); 
    })

    if(!data) return <Preloader />
    if(error) return <h2>{error}</h2>


  return (
    <>
      <SearchBar />
      <CardInfo>
        <Circle bgcolor={palette}>
          <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
        </Circle>
        <h2>{data.name.toUpperCase()}</h2>
        <h5>Pokemon type:</h5>
        <p>{data.types[0].type.name}</p>
        <PokeDetails data={data}/>
        <NavLinkStyled bgcolor={palette} bordercolor={palette} fontSize="1.5em" to="/" >Back</NavLinkStyled>
      </CardInfo>
    </>
  
  )
}

