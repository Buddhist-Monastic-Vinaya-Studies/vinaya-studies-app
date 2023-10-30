import './App.css';

//components
import SearchForm from "./filterAndSearch/SearchForm";
import Results from './displayResults/Results';

//data
import { result } from './resultsToDisplay';

function App() {
  return (
   // <SearchForm/>
   // <VinayaRadioGroup groupName="Steve"/>
    //<SearchForm />
    <Results result={result} />
  );
}

export default App;
