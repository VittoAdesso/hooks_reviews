import './App.css';
import ShowContent from './components/hookUseState/showContent';
import BeerTime from './components/hookUseState/beerTime';
import FormHeroes from './components/hookUseEffect/formHeroes';
import JoseMaSing from './components/hookUseEffect/joseMaSing';

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
    </div>
  );
}

export default App;
