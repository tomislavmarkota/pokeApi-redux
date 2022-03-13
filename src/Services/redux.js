import { combineReducers } from 'redux';

const FETCH_POKEMONS = "FETCH_POKEMONS";
const FETCH_POKEMONS_ERROR = "FETCH_POKEMONS_ERROR";
const FETCH_POKE_INFO = "FETCH_POKE_INFO";
const FETCH_POKE_INFO_ERR = "FETCH_POKE_INFO_ERR";
const FETCH_POKE_DETAILS = "FETCH_POKE_DETAILS";
const FETCH_POKE_DETAILS_ERR = "FETCH_POKE_DETAILS_ERR";



export function fetchPokemonData(all){
    return dispatch => {
        fetch(all)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_POKEMONS, pokeData: data }) )
        .catch(err => dispatch({ type: FETCH_POKEMONS_ERROR, error: err.toString() }))
    }
}

export function fetchPokeDetails(url){
    return dispatch => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_POKE_DETAILS, pokeUrl: data }))
        .catch(err => dispatch({ type: FETCH_POKE_DETAILS_ERR, urlErr: err }))
    }
}


export function fetchPokeInfo(name){
    return dispatch => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_POKE_INFO, pokeInfo: data }))
        .catch(err => dispatch({ type: FETCH_POKE_INFO_ERR, error: err.toString() }))
    }
}

// REDUCERS

export function pokemonDataReducer(state = { data:null, errorMsg:null }, action){
    switch(action.type){
        case FETCH_POKEMONS: 
            return {data: action.pokeData}
        case FETCH_POKEMONS_ERROR:
            return {errorMsg: action.error}
        default: return state;
    }
}

export function pokeDetailReducer(state = { pokeUrl:null, error: null }, action){
    switch(action.type){
        case  FETCH_POKE_DETAILS: 
            return { pokeUrl: action.pokeUrl }
        case FETCH_POKE_DETAILS_ERR: 
            return { error: action.urlErr }
        default: return state;
    }

}

export function pokeInfoReducer(state = { pokeInfo: null, error: null }, action){
    switch(action.type){
        case FETCH_POKE_INFO: 
            return { pokeInfo: action.pokeInfo }
        case FETCH_POKE_INFO_ERR: 
            return { error: action.error }
        default: return state;
    }
}

// CONNECT FUNCTIONS

export function getPokeDetails(state){
    return state.pokeDetailReducer.pokeUrl;
}

export function getPokeDetailsErr(state){
    return state.pokeDetailReducer.error;
}

export function getPokemons(state){
    return state.pokemonDataReducer.data;
}

export function getErr(state){
    return state.pokemonDataReducer.errorMsg
}

export function getPokeInfo(state){
    return state.pokeInfoReducer.pokeInfo
}

export function getPokeInfoErr(state){
    return state.pokeInfoReducer.error
}


export default combineReducers({
    pokemonDataReducer,
    pokeDetailReducer,
    pokeInfoReducer
});