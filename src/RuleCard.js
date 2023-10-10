//RuleCard.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: rule object with key-value pairs
//returns: An accordian with the meta tags followed by the rule text within a ruleCard section
import RuleMetaDataAccordian from "./RuleMetaDataAccordian";
import RuleRepresentation from "./RuleRepresentation";
import TranslationListAccordian from "./TranslationListAccordian";

const RuleCard = ({rule}) => {
  let translations = "";
  if (Object.hasOwn(rule, 'translations')) {
    translations = <div><TranslationListAccordian translations={rule.translations} /><hr/></div>;
  }
  
  return (
    <section className='ruleCard'>
      <RuleMetaDataAccordian key={rule.id} rule={rule} />
      <RuleRepresentation ruleRep={rule.text}/> 
      {translations}
    </section>
  );
};

export default RuleCard;