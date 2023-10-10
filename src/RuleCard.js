//RuleCard.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: rule object with key-value pairs
//returns: An accordian with the meta tags followed by the rule text within a ruleCard section
import RuleMetaDataAccordian from "./RuleMetaDataAccordian";
import RuleRepresentation from "./RuleRepresentation";

const RuleCard = ({rule}) => {
  return (
    <section className='ruleCard'>
      <RuleMetaDataAccordian key={rule.id} rule={rule} />
      <RuleRepresentation ruleRep={rule.text}/> 
    </section>
  );
};

export default RuleCard;