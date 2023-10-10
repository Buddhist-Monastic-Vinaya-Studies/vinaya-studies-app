//TranslationListAccordian.js

//last updated: 10/10/2023 (dd/mm/yyyy) by: Ayya Niyyānika - initial creation
//parameter: translations object
//returns: accordian with list of translation cards inside  

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Translation from './Translation';

function TranslationListAccordian({translations}) {

  return (
    <section className='rulelist'>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Translations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {translations.map((translation) => {
            return (<Translation translation={translation} />)
          })}
        </AccordionDetails>
      </Accordion> 
    </section>
  );
}

export default TranslationListAccordian;
        