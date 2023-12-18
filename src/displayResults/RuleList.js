//components
import RuleCard from './RuleCard';
//import RuleTranslations from './RuleTranslations.js';

function RuleList({listName, rules}) {
  if (rules === undefined) {
    return;
  }
  return (
    <section className='rulelist'>
      <h2>{listName}</h2>
      {rules.map((rule) => {
        return (
          <div>
            <RuleCard key={rule.id} rule={rule} />
          </div>
        )
      })}
    </section>
  );
}

export default RuleList;