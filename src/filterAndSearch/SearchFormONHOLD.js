//import React from "react"
//import availableTexts from './availableTexts'

// components
// import InstructionsSection from "./InstructionsSection"
// import RuleIdConstructionSection from "./RuleIdConstructionSection"
// import InputRuleIdTextBox from "./InputRuleIdTextBox"

function constructRuleId(language = "?",traditon = "?",order = "?",vinSection = "?",offenseClass = "?",ruleNum = "?") {

  let ruleId = language + "-" + traditon + "-" + order + "-" + vinSection + "-" + offenseClass + ruleNum;
  console.log(ruleId);
};



// const RuleNumInput = ({id, value, name, min, max, setter}) => {
//   return (
//     <div class="textInput">
//       <label htmlFor={id}>Rule Number</label>
//       <input id={id} name={name} value={value} min={min} max={max} onChange={() => setter(value)}/>
//     </div>
//   )
// };

// Display and manage Search Form 
const SearchForm = props => {
  //state values and control
  const [ruleId, setRuleId] = React.useState();
  const [language, setLanguage] = React.useState();
	const [tradition, setTradition] = React.useState();
  const [order, setOrder] = React.useState();
  const [vinSection, setVinSection] = React.useState();
  const [offenseClass, setOffenseClass] = React.useState();
  const [ruleNum, setRuleNum] = React.useState();
  const [min, setMin] = React.useState();
  const [max, setMax] = React.useState();

  const RadioInput = ({name, label, value, checked, disabled, setter}) => {
    return (
      <label>
        <input type="radio" name={name} checked={checked === value} disabled={disabled} onChange={() => { setter(value); handleRadioChange(name, value)}} />
        <span>{label}</span>
      </label>
    );
  };

  function handleRadioChange(name, value) {
  console.log(name + ": " + value);
  constructRuleId(language = language,tradition = tradition,order = order,vinSection = vinSection,offenseClass = offenseClass,ruleNum = ruleNum);
}

	const handleSubmit = e => {
		e.preventDefault();
	//	const data = {language, tradition, order, vinSection, offenseClass, ruleNum};
	//	const json = JSON.stringify(data, null, 4);
		console.clear();
		console.log(e);
	};

  return (
    <form onSubmit={handleSubmit}>
      <InstructionsSection />
      <RuleIdConstructionSection />
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
        <p><RadioInput label="Pārājika" name="offenseClass" value="Pj" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Saṅghādisesa" name="offenseClass" value="Ss" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Aniyata" name="offenseClass" value="Ay" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Nissaggiya Pācittiya" name="offenseClass" value="Np" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Pācittiya" name="offenseClass" value="Pc" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Pāṭidesanīya" name="offenseClass" value="Pd" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Sekhiya" name="offenseClass" value="Sk" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
        <p><RadioInput label="Adhikaranasamatha" name="offenseClass" value="As" checked={offenseClass} disabled={false} setter={setOffenseClass}/></p>
      </div>
  
      <RuleNumInput id="ruleNum" name="ruleNum" value={ruleNum} min={min} max={max} setter={setRuleNum} />
      <InputRuleIdTextBox />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchForm;