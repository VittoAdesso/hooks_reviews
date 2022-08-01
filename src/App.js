import './App.css';
import ShowContent from './components/hookUseState/showContent';
import BeerTime from './components/hookUseState/beerTime';
import FormHeroes from './components/hookUseEffect/formHeroes';
import JoseMaSing from './components/hookUseEffect/joseMaSing';
import Swicth from './components/hookUseEffect/swicth';
import NewSinger from './components/hookUseEffect/newSinger';
import ShowUser from './components/hookUseContext/useContext_1/showUser';

function App() {
  return (
    // TODO: routers || links into a nav bar 
    <div className="App">
      <ShowContent message="Vittoooo, you got It!"/>
      <hr/>
      <BeerTime message="Beer Time my Friend"/>
      <hr/>
      <FormHeroes/>
      <hr/>
      <JoseMaSing/>
      <hr/>
      <Swicth/>
      <hr/>
      <NewSinger/> 
      <hr/>
      <ShowUser/>
    </div>
  );
}

export default App;
