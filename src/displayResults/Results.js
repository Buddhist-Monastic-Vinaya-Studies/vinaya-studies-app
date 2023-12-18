//Results.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: results JSON
//returns: <article> with results as content

//components
import RuleCard from './RuleCard';
import SegmentMetaData from './SegmentMetaData';
import RuleList from './RuleList';

function Results({result}) {
  const baseRuleHeader = result.base.baseRuleHeader;
  const baseRule = result.base.baseRule;
  const metaTags = result.base.metaTags;
  const fullParallels = result.fullParallels;
  const partialParallels = result.partialParallels;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{baseRuleHeader.sourceText}</h1>
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

export default Results;