// findResultsToDisplayForRule.js

// last updated: 01/l1/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
// parameter: ruleId for which to construct Base, FullParallels and PartialParallels 
// example: "lzh-dg-bu-pm-pj1"
// returns: result JSON object
function findResultsToDisplayForRule(ruleId) {
 // fetch from existing query results if they exist
 let found = getResultFromQueryResultsGivenRuleId(ruleId);

 if (!found) {
  let ruleData = getRuleDataFromMergedTextGivenRuleId(ruleId);
  console.log("output from getRuleDataFromMergedTextGivenRuleId: ", ruleData);
  
 let results = constructBase(ruleData);
  //TO CODE constructParallelsGroup("fullParallels", fullParallels);
  //TO CODE constructParallelsGroup("partialParallels", partialParallels);
  return results;
 } else {
  return found;
 }
};

// ***** getResultFromQueryResultsGivenRuleId(ruleId) *****
// last modified: 17-11-2023 (dd-mm-yyyy) by: Ayya Niyyānika - edit from script that accesses rootText
// parameter: the ruleId of one rule as arguements
// returns: the JSON array from the file that should contain the rule with the given ruleId 
// this script is expected to run from the main code area and access files in the ./data/queryResults directory
function getResultFromQueryResultsGivenRuleId(ruleId) {

 const fileName = "./data/queryResults/" + ruleId + ".js";
 const fs = require("fs");

 if (fs.existsSync(fileName)) {
   return fs.readFileSync(fileName).toString();
 } else {
   return false;
 }
};

// parameter: ruleId to find in the MergedText files
// example: "lzh-dg-bu-pm-pj1"
// returns: JSON object for the rule
function getRuleDataFromMergedTextGivenRuleId(ruleId) {
 console.log("processing for ruleId: ", ruleId);

 let fileName = determineFileName(ruleId);
 fileName = "./data/mergedText/" + fileName;
 console.log("looking in file: ", fileName);
 const fs = require("fs");

 if (fs.existsSync(fileName)) {
  //console.log("1. MergedText file exists", fileName);
  
  let fileData = JSON.parse(fs.readFileSync(fileName));
  //console.log("2. fileData is:", fileData);

  let ruleData = fileData.find(elem => elem.id === ruleId.toString());
  //console.log("3. ruleData for ", ruleId, " is: ", ruleData);

   return ruleData;
 } else {
   return false;
 }

};


// ***** determineFileName(ruleId) *****
// last modified: 17-11-2023 (dd-mm-yyyy) by: Ayya Niyyānika - refactoring
// parameter: the ruleId of one rule as arguements
// returns: the filename

function determineFileName(ruleId) {
//separate the segments
 let segments = ruleId.split("-",4);

 //make them UpperCamelCase in one string
 let fileName = segments
  .map(seg => {
  return (seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
 })
 .reduce((first, next) => first + next);

 fileName += ".json";
 
 return fileName;
};

//parameter: ruleData JSON for which to construct baseRuleHeader, baseRule and metaData
//returns: base JSON object
function constructBase(ruleData) {
 let base = constructBaseRuleHeader(ruleData);
 //TO CODE constructBaseRule(ruleId);
 //TO CODE constructMetaTags(ruleId);

 return base;
};

//parameter: ruleData JSON object from which to construct baseRuleHeader
//returns: baseRuleHeader JSON object
// example: 
//  baseRuleHeader: {
//    srcTxt: "Taishō",
//    label: "Sarvāstivāda Bhikkhunī Pācittiya 79"
//  }
function constructBaseRuleHeader(ruleData) {
 let baseRuleHeader = 'srcTxt: "' + ruleData.isPartOf + '",label: "' + ruleData.label + '"';
 return (baseRuleHeader);
};

//parameter: ruleData JSON from which to construct baseRule
//returns: baseRule JSON object
// example: 
//  baseRule: {
//    id: 'lzh-sarv-bi-pm-pc79',
//    name: 'Harituccārachaḍḍana',
//    nameDe: 'Stuhl auf Pflanzen entsorgen',
//    nameEn: 'Disposing Feces on Plants',
//    inLanguage: 'lzh', 
//    trad: 'Sarvāstivāda', 
//    ofClass: 'Pācittiya', 
//    rulNum: '79',
//    srcTxt: 'Taishō',
//    text: '若比丘尼。棄屎尿著生草上。波夜提。',
//    label: 'Sarvāstivāda Bhikkhunī Pācittiya 79'
//  }
function constructBaseRule(ruleData) {
 let translations = "TRANSLATIONS HERE"; //TO CODE
 let baseRule = 'baseRule: { id: "' + ruleData.id + '",';
 baseRule += 'inLanguage: "' + ruleData.inLanguage + '",';
 baseRule += 'trad: "' + ruleData.about.VinayaTradition + '",';
 baseRule += 'ofClass: "' + ruleData.about.VinayaOffenseClass + '",';
 baseRule += 'srcTxt: "' + ruleData.isPartOf + '",';
 baseRule += 'text: "' + ruleData.text + '",';
 baseRule += 'label: "' + ruleData.label + '"';
 if (ruleData.translations) {
  baseRule += ', ' + constructTranslations(translations) + '}';
 } else {
  baseRule += '}'
 };

 return (baseRule);
};

//parameter: ruleId for which to construct metaTags
//returns: metaTags JSON object
function constructMetaTags(ruleId) {
 // example:
 // metaTags: {
 //   subject: ['feces','plants'],
 //   tags: ['Chinese', 'Sarvāstivāda', 'bhikkhunī','pācittiya', 'Disposing Feces on Plants']
 // }
}

//parameters: groupName for the group of rules, suchas fullParallels or partialParallels,
// ruleId for which to lookup parallel rules that belong in the group
//returns: array of JSON object with the groupName name
// example:
// fullParallels: [...
function constructParallelsGroup(groupName, rulesData) {
 let parallels = groupName + ': ';
 let rules = rulesData.forEach(element => {
  return constructParallel(element)
 });
 parallels += rules;
 return (parallels);
}

//parameter: ruleId for which to construct JSON object
//returns: JSON object containing the rule and translations
function constructParallel(ruleId) {
 //example:
 // {
 //    id: 'pli-tv-bi-pm-pc9',
 //    name: 'Harituccārachaḍḍana',
 //    nameDe: 'Stuhl auf Pflanzen entsorgen',
 //    nameEn: 'Disposing Feces on Plants',
 //    trad: 'Theravāda', 
 //    ofClass: 'Pācittiya',
 //    rulNum: '9',
 //    inLanguage: 'pli',
 //    srcText: 'Mahāsaṅgīti_Tipiṭaka_Buddhavasse_2500',
 //    text: 'Yā pana bhikkhunī uccāraṁ vā passāvaṁ vā saṅkāraṁ vā vighāsaṁ vā harite chaḍḍeyya vā chaḍḍāpeyya vā, pācittiyaṁ.',
 //    label: 'Paḷī Text Bhikkhunī Pācittiya 9',
 //    summary: 'A nun who disposes of feces, urine, or rubbish on cultivated plants must confess the offense.',
 //    translations: [...
};

//parameter: ruleId for which to construct translations
//returns: array of translations JSON object
function constructTranslations(ruleId) {
 // example:
 //    translations: [{...},{...}...]
};

//parameter: ruleId of a translation
//returns: translation JSON object
function constructTranslation(ruleId) {
 // example:
 // {
 //       id: 'pli-tv-bi-pc9_de_huesken-nanadassana',
 //       translator: ['Ute Husken','Bhikkhu Nanadassana'],
 //       inLanguage: 'de',
 //       text: 'Welche Nonne aber Fäkalien, Urin, Abfall oder Essensreste auf ein Feld wirft, muß dafür sühnen.'
 //     }
};

//test
//console.log(findResultsToDisplayForRule("lzh-sarv-bi-pm-pc79"));
console.log(findResultsToDisplayForRule("lzh-mu-bi-pm-pc79"));

module.exports =  { findResultsToDisplayForRule };