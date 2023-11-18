import './App.css';

//components
//import SearchForm from "./filterAndSearch/SearchForm";
import Results from './displayResults/Results';

//data
//import findResultsToDisplayForRule from './findResultsToDisplay/findResultsToDisplayForRule';
import { result } from './resultsToDisplay';

function App() {
  //DEBUG test finding results
  //findResultsToDisplayForRule('lzh-dg-bu-pm-pj1');
  return (
   // <SearchForm/>
   // <VinayaRadioGroup groupName="Steve"/>
  
   //TEST Results with sample preformated results json
    <Results result={result} />
  );
}

export default App;
