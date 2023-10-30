import { useState } from 'react';

export default function InputRuleIdTextBox(lang) {

 function constructRuleId(lang = "?",trad = "?",ord = "?",vinTxt = "?",ofCls = "?",num = "?") {
  console.log("lang is now : " + lang.valueOf);
  let ruleId = lang + "-" + trad + "-" + ord + "-" + vinTxt + "-" + ofCls + num;
  console.log(ruleId);
  return ruleId;
};

function onChange() {};

 return (
   <div class="textInput">
     <label htmlFor="ruleId">Rule Id</label>
     <input id="ruleId" name="ruleId" value={constructRuleId(lang)} onChange={onChange()}/>
   </div>
 );
};