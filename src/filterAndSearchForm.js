import React from "react";
import availableText from './filterAndSearch/availableTexts.json';

function constructRuleId(lang,trad,ord,vinTxt,ofCls,num) {

};

function handleRadioChange(name, value) {
  console.log(name + ": " + value);
}


const RadioInput = ({name, label, value, checked, disabled, setter}) => {
	return (
    <label>
      <input type="radio" name={name} checked={checked === value} disabled={disabled} onChange={() => { setter(value); handleRadioChange(name, value)}} />
      <span>{label}</span>
    </label>
	);
};

const RuleNumInput = ({id, value, name, min, max, setter}) => {
  return (
    <div class="textInput">
      <label htmlFor={id}>Rule Number</label>
      <input id={id} name={name} value={value} min={min} max={max} onChange={() => setter(value)}/>
    </div>
  )
};

const RuleIdInput = ({id, value, name, setter}) => {
  return (
    <div class="textInput">
      <label htmlFor={id}>Rule Number</label>
      <input id={id} name={name} value={value} onChange={() => setter(value)}/>
    </div>
  )
};

function setRuleNum(e) {};

const SearchForm = props => {
  const [ruleId, setRuleId] = React.useState();
  const [language, setLanguage] = React.useState();
	const [tradition, setTradition] = React.useState();
  const [order, setOrder] = React.useState();
  const [vinSection, setVinSection] = React.useState();
  const [ofClass, setOfClass] = React.useState();
  const [rulNum, setRulNum] = React.useState();
  const [min, setMin] = React.useState();
  const [max, setMax] = React.useState();
	const handleSubmit = e => {
		e.preventDefault();
		const data = {language, tradition, order, vinSection, ofClass, rulNum};
		const json = JSON.stringify(data, null, 4);
		console.clear();
		console.log(json);
	};

  return (
    <form onSubmit={handleSubmit}>
      <p>Enter the Rule Id directly in format like "Lzh-Dg-Bi-Pm-Pj8" or use radio buttons and num entry below.</p>
      <RuleIdInput  id="ruleId" name="ruleId" value={ruleId} setter={setRuleId} />
      <p>or fill in sections below.</p>
      <div className="radio">
        <label>Language</label>
        <p><RadioInput label="Chinese" name="language" value="Lzh" checked={language} disabled={false} setter={setLanguage}/></p>
        <p><RadioInput label="Paḷī" name="language" value="Pli" checked={language} disabled={false} setter={setLanguage}/></p>
        <p><RadioInput label="Prakrit" name="language" value="Pgd" checked={language} disabled={true} setter={setLanguage}/></p>
        <p><RadioInput label="Sanskrit" name="language" value="San" checked={language} disabled={true} setter={setLanguage}/></p>
        <p><RadioInput label="Tibetan" name="language" value="Xct" checked={language} disabled={true} setter={setLanguage}/></p>
      </div>
      <div className="radio">
        <label>Tradition</label>
        <p><RadioInput label="Dharmaguptaka" name="tradition" value="Dg" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Kāśyapīya" name="tradition" value="Ka" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Lokuttaravāda" name="tradition" value="Lo" checked={tradition} disabled={true} setter={setTradition}/></p>
        <p><RadioInput label="Mahāsaṁghika" name="Tradtraditionition" value="Mg" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Mahīśāsaka" name="tradition" value="Mi" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Mūlasarvāstivāda" name="tradition" value="Mu" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Sarvāstivāda" name="tradition" value="Sarv" checked={tradition} disabled={false} setter={setTradition}/></p>
        <p><RadioInput label="Theravāda" name="tradition" value="Tv" checked={tradition} disabled={false} setter={setTradition}/></p>
      </div>
      <div className="radio">
        <label>Order</label>
        <p><RadioInput label="Bhikkhu" name="order" value="Bu" checked={order} disabled={false} setter={setOrder}/></p>
        <p><RadioInput label="Bhikkhunī" name="order" value="Bi" checked={order} disabled={false} setter={setOrder}/></p>
      </div>
      <div className="radio">
        <label>Vinaya Section</label>
        <p><RadioInput label="Khandaka" name="vinayaSection" value="Kd" checked={vinSection} disabled={true} setter={setVinSection}/></p>
        <p><RadioInput label="Pātimokkha" name="vinayaSection" value="Pm" checked={vinSection} disabled={false} setter={setVinSection}/></p>
        <p><RadioInput label="Vibhaṅga" name="vinayaSection" value="Vb" checked={vinSection} disabled={true} setter={setVinSection}/></p>
      </div>
      <div className="radio">
        <label>Offense Class</label>
        <p><RadioInput label="Pārājika" name="offenseClass" value="Pj" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Saṅghādisesa" name="offenseClass" value="Ss" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Aniyata" name="offenseClass" value="Ay" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Nissaggiya Pācittiya" name="offenseClass" value="Np" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Pācittiya" name="offenseClass" value="Pc" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Pāṭidesanīya" name="offenseClass" value="Pd" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Sekhiya" name="offenseClass" value="Sk" checked={ofClass} disabled={false} setter={setOfClass}/></p>
        <p><RadioInput label="Adhikaranasamatha" name="offenseClass" value="As" checked={ofClass} disabled={false} setter={setOfClass}/></p>
      </div>
  
      <RuleNumInput id="ruleNum" name="ruleNum" value={rulNum} min={min} max={max} setter={setRuleNum} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;