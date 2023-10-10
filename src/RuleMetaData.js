//RuleMetaData.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: baseRule object with metadata key-value pairs
//returns: <p>s with each metadata within article tags

import './App.css';

const RuleMetaData = ({name, inLanguage, trad, srcTxt, ofClass, rulNum, summary}) => {
 //attribute, eventHandler
 
 return (
  <article className="ruleMetaData">
   <p>Name: {name}</p>
   <p>Language: {inLanguage}</p> 
   <p>Vinaya Tradition: {trad}</p> 
   <p>Source Text: {srcTxt}</p>
   <p>Offense Class: {ofClass}</p>
   <p>Rule Number: {rulNum}</p>
   {/* if ({summary}) {
    <p>Summary: {summary}</p>
   } */}
  </article>
 );
};

export default RuleMetaData
