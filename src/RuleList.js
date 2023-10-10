//components
import RuleCard from './RuleCard';
//import RuleTranslations from './RuleTranslations.js';

function RuleList({listName, rules}) {

  return (
    <section className='rulelist'>
      <h2>{listName}</h2>
      {rules.map((rule) => {
        console.log('in rule');
        console.log({rule});
        return (
          <div>
            <RuleCard key={rule.id} rule={rule} />
            {/* if ({rule.translations} !== undefined) {
              <div>  //HELP needed HERE
              console.log({rule.translations.length});
                <RuleTranslations transList={rule.translations}></RuleTranslations>
              </div>
            } else {
                console.log('prop was NOT passed')
            }; */}
          </div>
        )
      })}
    </section>
  );
}

export default RuleList;