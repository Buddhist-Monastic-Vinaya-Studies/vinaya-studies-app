// findResultsToDisplayForRule.js
import fs from 'fs';
// last updated: 17/l2/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
// parameter: ruleId  
// example: "lzh-dg-bu-pm-pj1"
// returns: result JSON object
function findResultsToDisplayForRule(ruleId) {
  // fetch from existing query results if they exist
  let found = getResultFromQueryResultsGivenRuleId(ruleId);

  if (!found) {
    return "rule not found"
  } else {
    return found;
  }
};

// ***** getResultFromQueryResultsGivenRuleId(ruleId) *****
// last modified: 17-11-2023 (dd-mm-yyyy) by: Ayya Niyyānika - edit from script that accesses rootText
// parameter: the ruleId of one rule as arguements
// returns: the JSON array from the file that should contain the rule with the given ruleId 
// this script is expected to run from the main code area and access files in the ./queryResults directory
function getResultFromQueryResultsGivenRuleId(ruleId) {
  const fileName = "./queryResults/" + ruleId + ".js";

  if (fs.existsSync(fileName)) {
    return fs.readFileSync(fileName).toString();
  } else {
    return false;
  }
};

module.exports = {
  findResultsToDisplayForRule
};