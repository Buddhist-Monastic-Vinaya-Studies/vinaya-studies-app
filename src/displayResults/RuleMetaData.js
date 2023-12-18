//RuleMetaData.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: baseRule object with metadata key-value pairs
//returns: <p>s with each metadata within article tags

const RuleMetaData = ({name, inLanguage, tradition, sourceText, vinayaOffenseClass, ruleNumber, summary}) => {
 //attribute, eventHandler
 
 return (
  <article className="ruleMetaData">
   {/* <p>Name: {name}</p> */}
   <p>Language: {inLanguage}</p> 
   <p>Vinaya Tradition: {tradition}</p> 
   <p>Source Text: {sourceText}</p>
   <p>Offense Class: {vinayaOffenseClass}</p>
   <p>Rule Number: {ruleNumber}</p>
   {/* if ({summary}) {
    <p>Summary: {summary}</p>
   } */}
  </article>
 );
};

export default RuleMetaData
