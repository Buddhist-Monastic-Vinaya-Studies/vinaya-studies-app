import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@mui/material";

export const CustomRadioGroup = ({
  defaultValue,
  radiolabel,
  radiodata,
  handleOnRadioChange
}) => {
  const [val, setVal] = useState(defaultValue);

  const onChange = (event, value) => {
    setVal(value);
    handleOnRadioChange(value);
  };

  return (
    <FormControl>
      <RadioGroup
        name="row-radio-buttons-group"
        value={val}
        onChange={onChange}
      >
        <FormLabel> {radiolabel} </FormLabel>
        {radiodata.map((item) => {
          return (
            <div key={item} style={{ display: "flex", flexDirection: "row" }}>
              <FormControlLabel
                control={<Radio size="small" />}
                label={item}
                key={item}
                value={item}
              />
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
