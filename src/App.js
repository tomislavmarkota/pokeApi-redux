import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyles, theme } from './Components/StyledComponents';
import {ThemeProvider} from 'styled-components';
import {Pokemons, PokeInfo } from './Components';


function App() {



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={ <Pokemons /> } />
          <Route path="/pokeinfo/:name" element={<PokeInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
