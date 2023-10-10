import './App.css';

//components
import RuleCard from './RuleCard';
import SegmentMetaData from './SegmentMetaData';
import RuleList from './RuleList'

//data
import { result } from './resultsToDisplay';

const baseRuleHeader = result.base.baseRuleHeader;
const baseRule = result.base.baseRule;
const metaTags = result.base.metaTags;
const fullParallels = result.fullParallels;
const partialParallels = result.partialParallels;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{baseRuleHeader.srcTxt}</h1>
        <h3>{baseRuleHeader.label}</h3>
      </header>
      <section className="App-body">
        <RuleCard key={baseRule.id} rule={baseRule} />
        <SegmentMetaData metaTags={metaTags} />
        <RuleList listName="Full Parallels" rules={fullParallels} />
        <RuleList listName="Partial Parallels" rules={partialParallels} />
      </section>
    </div>
  );
}

export default App;
