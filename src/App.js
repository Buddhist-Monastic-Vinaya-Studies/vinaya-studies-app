import './App.css';

//components
import Results from './displayResults/Results';
import SearchForm from './filterAndSearchForm';

//data
import { result } from './resultsToDisplay';


function App() {
  return (
    <SearchForm />
  //  <Results result={result} />
  );
}

export default App;
