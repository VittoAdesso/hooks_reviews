import './App.css';
import { Route, Routes } from "react-router-dom";

import ShowContent from './components/hookUseState/showContent';
import BeerTime from './components/hookUseState/beerTime';
import FormHeroes from './components/hookUseEffect/formHeroes';
import JoseMaSing from './components/hookUseEffect/joseMaSing';
import Swicth from './components/hookUseEffect/swicth';
import NewSinger from './components/hookUseEffect/newSinger';
import ShowUser from './components/hookUseContext/useContext_1/showUser';
import SnowName from './components/snowStyle/snowName';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    // TODO: routers || links into a nav bar 
    <div className="App">

    <Routes>
          <Route path="/" element={<NavBar/>} />
          <Route path="/state" element={<ShowContent message="Vittoooo, you got It!"/>} />
          <Route path="/state2" element={ <BeerTime message="Beer Time my Friend"/>} />
          <Route path="/effect" element={<FormHeroes/>} />
          <Route path="/singers" element={ <JoseMaSing/>} />
          <Route path="/swicth1" element={<Swicth/>} />
          <Route path="/swicth2" element={<NewSinger/> } />
          <Route path="/showUser" element={<ShowUser/>} />
          <Route path="/showName" element={<SnowName/>} />
        </Routes>
  
    </div>
  );
}

export default App;
