//RuleCard.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: rule object with key-value pairs
//returns: An accordian with the meta tags followed by the rule text within a ruleCard section

const SegmentMetaData = ({metaTags}) => {
 console.log(metaTags)
return ( 
 <div className="segmentMetaData">
   Subject: {metaTags.subject}  
   Tags: {metaTags.tags}
  <hr/>
 </div>
 );
};

export default SegmentMetaData;
