import './App.css';

//components
import RuleMetaData from './RuleMetaData';
import RuleMetaDataAccordian from './RuleMetaDataAccordian';
import RuleRepresentation from './RuleRepresentation';

//data
import { result } from './resultsToDisplay';

const baseRuleHeader = result.base.baseRuleHeader;
const baseRule = result.base.baseRule;
//const metaTags = result.metaTags;
//const fullParallels = result.fullParallels;
//const partialParallels = result.partialParallels;

function App() {
  console.log(baseRule);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{baseRuleHeader.srcTxt}</h1>
        <h3>{baseRuleHeader.label}</h3>
      </header>
      <section className="App-body">
        <RuleMetaData key={baseRule.id} {...baseRule} />
        <RuleMetaDataAccordian key={baseRule.id} rule={baseRule} />

        <RuleRepresentation ruleRep={baseRule.text} />
      </section>
    </div>
  );
}

export default App;
