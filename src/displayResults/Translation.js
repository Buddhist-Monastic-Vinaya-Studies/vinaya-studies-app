//Translation.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: translation object
//returns: language and translator followed by the rule text within a <div>
const Translation  = ({translation}) => {
  return (
    <section className='ruleCard'>
     <p>Language: {translation.inLanguage}&nbsp;&nbsp;&nbsp; Translator: {translation.translator}</p>
     <p>{translation.text}</p>
    </section>
  );
};

export default Translation;